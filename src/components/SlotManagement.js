import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify"; 

const SlotManagement = ({ slots, setSlots, user }) => {
  const [newSlot, setNewSlot] = useState({ date: "", time: "" });

  const addSlot = () => {
    if (!newSlot.date || !newSlot.time) {
      toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const isSlotBooked = slots.some(
      (slot) => slot.date === newSlot.date && slot.time === newSlot.time
    );

    if (isSlotBooked) {
      toast.error("This slot is already booked!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setSlots([...slots, { ...newSlot, id: Date.now(), user: user.username }]);
    setNewSlot({ date: "", time: "" });

    toast.success("Slot added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const deleteSlot = (id) => {
    setSlots(slots.filter((slot) => slot.id !== id));

    toast.success("Slot deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-gray-800 dark:text-gray-300 font-bold">
        Manage Your Slots
      </h2>
      <div className="flex gap-2 text-gray-800 dark:text-gray-500">
        <input
          type="date"
          value={newSlot.date}
          onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
          className="p-2 border rounded text-gray-800 dark:text-gray-500"
        />
        <input
          type="time"
          value={newSlot.time}
          onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
          className="p-2 border rounded text-gray-800 dark:text-gray-500"
        />
        <button
          onClick={addSlot}
          className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
        >
          Add Slot
        </button>
      </div>
      <ul className="space-y-2">
        <AnimatePresence>
          {slots.map((slot) => (
            <motion.li
              key={slot.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded shadow"
            >
              <span>
                {slot.date} at {slot.time}
              </span>
              <button
                onClick={() => deleteSlot(slot.id)}
                className="btn-danger bg-red-700 p-1 rounded-md text-white transition duration-300 ease-in-out hover:bg-red-800 hover:shadow-md hover:shadow-red-500/25"
              >
                Delete
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default SlotManagement;