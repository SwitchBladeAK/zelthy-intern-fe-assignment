import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Dashboard = ({ slots, user }) => {
  const [query, setQuery] = useState("");

  const filteredSlots = slots.filter(
    (slot) =>
      slot.user.toLowerCase().includes(query.toLowerCase()) ||
      slot.date.includes(query) ||
      slot.time.includes(query)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-300">Available Slots</h1>
      <div className="mb-4 flex items-center">
        <BiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search slots..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <ul className="space-y-2">
        {filteredSlots.map((slot) => (
          <li
            key={slot.id}
            className="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded shadow"
          >
            {slot.user} is available on {slot.date} at {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;