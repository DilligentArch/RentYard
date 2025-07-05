import React, { useState } from 'react';


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RentReminderModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [reminderDate, setReminderDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with:', {
      reminderDate,
      dueDate
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl border w-full max-w-3xl relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
        >
          ×
        </button>

        <h2 className="text-lg mb-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold">
          Rent frequency & payment reminder
        </h2>

        <form className="grid grid-cols-3 gap-4 items-end" onSubmit={handleSubmit}>
          {/* Rent payment frequency */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Rent payment frequency<span className="text-red-600 text-lg">*</span>
            </label>
            <select
              required
              className="w-full border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl"
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
          </div>

          {/* Rent reminder date */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Rent Reminder/Statement date<span className="text-red-600 text-lg">*</span>
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 bg-white hover:shadow-md">
              <input
                required
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
              />
              {/* <Calendar className="text-gray-500 ml-2" size={18} /> */}
            </div>
          </div>

          {/* Rent due date */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Rent due date<span className="text-red-600 text-lg">*</span>
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl px-2 bg-white hover:shadow-md">
              <input
                required
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
              />
              {/* <Calendar className="text-gray-500 ml-2" size={18} /> */}
            </div>
          </div>

          {/* Submit button */}
          <div className="col-span-3 text-right mt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentReminderModal;