export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Your browser does not support notifications.");
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  const permission = await Notification.requestPermission();

  return permission === "granted";
}

export function sendCollectionNotification(waste) {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission !== "granted") {
    return;
  }

  const startTime = waste.time.split(" - ")[0];

  new Notification("Collection Reminder 🔔", {
    body: `${waste.name} collection starts at ${startTime}.`,
  });
}