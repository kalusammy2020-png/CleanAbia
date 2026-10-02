import { useEffect, useRef, useState } from "react";

import PageHeader from "../components/PageHeader";
import TodaysCollection from "../components/TodaysCollection";
import WasteCard from "../components/WasteCard";
import DetailedSchedule from "../components/DetailedSchedule";
import QuickTips from "../components/QuickTips";

import { CollectionData } from "../data/CollectionData";

import { getNextCollection } from "../Utils/scheduleUtils";

import {
  requestNotificationPermission,
  sendCollectionNotification,
} from "../Utils/notificationUtils";

function PickUp() {
  const [selectedWaste, setSelectedWaste] = useState(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  const [reminders, setReminders] = useState({
    general: false,
    recyclables: false,
    organic: false,
    hazardous: false,
  });

  const scheduleRefs = useRef({});
  const notifiedCollections = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleWasteSelect = (wasteId) => {
    setSelectedWaste(wasteId);

    const selectedRef = scheduleRefs.current[wasteId];

    if (selectedRef) {
      selectedRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleReminderToggle = async (wasteId) => {
    const isCurrentlyOn = reminders[wasteId];

    if (isCurrentlyOn) {
      setReminders((previous) => ({
        ...previous,
        [wasteId]: false,
      }));

      return;
    }

    const permissionGranted =
      await requestNotificationPermission();

    if (!permissionGranted) {
      return;
    }

    setReminders((previous) => ({
      ...previous,
      [wasteId]: true,
    }));
  };

  useEffect(() => {
    const checkReminders = () => {
      CollectionData.forEach((waste) => {
        if (!reminders[waste.id]) {
          return;
        }

        const nextCollection = getNextCollection(
          waste,
          new Date()
        );

        const reminderTime =
          nextCollection.getTime() -
          30 * 60 * 1000;

        const difference =
          reminderTime - Date.now();

        if (
          difference <= 0 &&
          difference > -60000
        ) {
          const collectionKey =
            `${waste.id}-${nextCollection.getTime()}`;

          if (
            !notifiedCollections.current[collectionKey]
          ) {
            sendCollectionNotification(waste);

            notifiedCollections.current[collectionKey] = true;
          }
        }
      });
    };

    checkReminders();

    const interval = setInterval(
      checkReminders,
      60000
    );

    return () => clearInterval(interval);
  }, [reminders]);

  return (
    <main className="min-h-screen bg-[#f8f9fa] px-6 py-8">
      <div className="mx-auto w-full max-w-6xl">

        <PageHeader />

        <TodaysCollection />

        <section className="grid grid-cols-2 gap-4">
          {CollectionData.map((waste) => (
            <WasteCard
              key={waste.id}
              waste={waste}
              selected={selectedWaste === waste.id}
              onSelect={handleWasteSelect}
            />
          ))}
        </section>

        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="mb-5 text-[14px] font-semibold text-gray-800">
            Detailed Schedule
          </h2>

          <div className="space-y-3">
            {CollectionData.map((waste) => (
              <DetailedSchedule
                key={waste.id}
                waste={waste}
                currentTime={currentTime}
                reminderOn={reminders[waste.id]}
                onToggleReminder={() =>
                  handleReminderToggle(waste.id)
                }
                scheduleRef={(element) => {
                  scheduleRefs.current[waste.id] =
                    element;
                }}
              />
            ))}
          </div>
        </section>
      </div>
      <QuickTips />
    </main>
  );
}

export default PickUp;