import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const petTypes = [
  'Dog',
  'Cat',
  'Bird',
  'Fish',
  'Rabbit',
  'Hamster',
  'Guinea Pig',
  'Reptile',
  'Ferret',
  'Other'
];

export const PetFeesModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [petType, setPetType] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [oneTimeFee, setOneTimeFee] = useState('');
  const [securityDeposit, setSecurityDeposit] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      petType,
      maxWeight,
      oneTimeFee,
      securityDeposit,
      monthlyRent
    });
    onClose();
  };

  const selectPetType = (type: string) => {
    setPetType(type);
    setShowDropdown(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl border w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Pet fees</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Pet Type and Max Weight Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex justify-between items-center"
                >
                  <span className={petType ? 'text-gray-900' : 'text-gray-500'}>
                    {petType || 'Select'}
                  </span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {petTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => selectPetType(type)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max weight(LB)
              </label>
              <input
                type="text"
                value={maxWeight}
                onChange={(e) => setMaxWeight(e.target.value)}
                placeholder="100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>
          </div>

          {/* Fee Fields Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                One time pet fee<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={oneTimeFee}
                onChange={(e) => setOneTimeFee(e.target.value)}
                placeholder="$100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Security Deposit<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={securityDeposit}
                onChange={(e) => setSecurityDeposit(e.target.value)}
                placeholder="$100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly pet rent<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(e.target.value)}
                placeholder="$100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
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
const PetFeesDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Open Pet Fees Modal
      </button>
      
      <PetFeesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default PetFeesDemo;