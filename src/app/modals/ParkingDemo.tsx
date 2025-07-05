import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const timeOptions = [
  '1H',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '12H',
  '24H',
  'No limit'
];

const ParkingModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [guestVehicleParkingTime, setGuestVehicleParkingTime] = useState('2H');
  const [parkingOverview, setParkingOverview] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      guestVehicleParkingTime,
      parkingOverview
    });
    onClose();
  };

  const selectTime = (time: string) => {
    setGuestVehicleParkingTime(time);
    setShowDropdown(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl border w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Parking</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Guest Vehicle Parking Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guest vehicle parking time
            </label>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="text-gray-900">{guestVehicleParkingTime}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                  {timeOptions.map((time) => (
                    <button
                      key={time}
                      onClick={() => selectTime(time)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Parking Overview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Write parking overview
            </label>
            <div className="relative">
              <textarea
                value={parkingOverview}
                onChange={(e) => setParkingOverview(e.target.value)}
                placeholder="Write parking overview"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {200-parkingOverview.length}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-300 text-right">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo component to show the modal
const ParkingDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Open Parking Modal
      </button>
      
      <ParkingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ParkingDemo;
export { ParkingModal };