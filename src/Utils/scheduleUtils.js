const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const shortDayNames = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function createDate(date, daysFromNow, time) {
  const result = new Date(date);

  result.setDate(result.getDate() + daysFromNow);

  const [timePart, period] = time.split(" ");

  let [hours, minutes] = timePart.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  result.setHours(hours, minutes, 0, 0);

  return result;
}

function getLastSaturday(year, month) {
  const lastDay = new Date(year, month + 1, 0);

  const day = lastDay.getDay();

  const difference = day >= 6
    ? day - 6
    : 7 - (6 - day);

  const saturday = new Date(lastDay);

  saturday.setDate(lastDay.getDate() - difference);

  return saturday;
}

export function getNextCollection(waste, now = new Date()) {
  const startTime = waste.time.split(" - ")[0];

  // ORGANIC WASTE - DAILY
  if (waste.id === "organic") {
    const collectionToday = createDate(
      now,
      0,
      startTime
    );

    if (now < collectionToday) {
      return collectionToday;
    }

    return createDate(
      now,
      1,
      startTime
    );
  }

  // HAZARDOUS WASTE - MONTHLY
  if (waste.id === "hazardous") {
    let collectionDate = getLastSaturday(
      now.getFullYear(),
      now.getMonth()
    );

    const collectionTime = createDate(
      now,
      0,
      startTime
    );

    collectionDate.setHours(
      collectionTime.getHours(),
      collectionTime.getMinutes(),
      0,
      0
    );

    // If this month's collection has passed,
    // calculate next month's collection.
    if (now >= collectionDate) {
      collectionDate = getLastSaturday(
        now.getFullYear(),
        now.getMonth() + 1
      );

      collectionDate.setHours(
        collectionTime.getHours(),
        collectionTime.getMinutes(),
        0,
        0
      );
    }

    return collectionDate;
  }

  // WEEKLY COLLECTIONS
  const scheduledDays = waste.days.map((day) =>
    shortDayNames.indexOf(day)
  );

  const today = now.getDay();

  for (let offset = 0; offset <= 7; offset++) {
    const candidateDay = (today + offset) % 7;

    if (!scheduledDays.includes(candidateDay)) {
      continue;
    }

    const candidateDate = createDate(
      now,
      offset,
      startTime
    );

    if (candidateDate > now) {
      return candidateDate;
    }
  }

  return createDate(
    now,
    7,
    startTime
  );
}

export function getCollectionStatus(
  collectionDate,
  now = new Date()
) {
  const today = new Date(now);

  today.setHours(0, 0, 0, 0);

  const collectionDay = new Date(collectionDate);

  collectionDay.setHours(0, 0, 0, 0);

  const difference =
    (collectionDay - today) /
    (1000 * 60 * 60 * 24);

  if (difference === 0) {
    return "Today";
  }

  if (difference === 1) {
    return "Tomorrow";
  }

  return "Next";
}

export function formatCollectionDate(
  collectionDate,
  now = new Date()
) {
  const status = getCollectionStatus(
    collectionDate,
    now
  );

  const time = collectionDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (status === "Today") {
    return `Today at ${time}`;
  }

  if (status === "Tomorrow") {
    return `Tomorrow at ${time}`;
  }

  const day = dayNames[collectionDate.getDay()];

  return `${day} at ${time}`;
}