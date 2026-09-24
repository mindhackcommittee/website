import { useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

export default function WeeklySchedule() {
  // slots[time][day] = string
  const [slots, setSlots] = useState(
    () =>
      Object.fromEntries(
        TIMES.map((t) => [t, Object.fromEntries(DAYS.map((d) => [d, ""]))])
      )
  );

  const handleChange = (time, day, value) => {
    setSlots((prev) => ({
      ...prev,
      [time]: { ...prev[time], [day]: value },
    }));
  };

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg">
      <table className="min-w-[620px] w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-800 text-white p-2 w-24">
              Time
            </th>
            {DAYS.map((day) => (
              <th
                key={day}
                className="border border-gray-300 bg-gray-800 text-white p-2 text-left"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TIMES.map((time, i) => (
            <tr key={time} className={i % 2 === 1 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 bg-gray-100 font-semibold p-2 whitespace-nowrap">
                {time}
              </td>
              {DAYS.map((day) => (
                <td
                  key={day}
                  className="border border-gray-300 p-0 min-w-[110px] h-11"
                >
                  <p>Event</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}