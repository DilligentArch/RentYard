import React, { useState } from 'react';
import {  ChevronDown } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const utilityTypes = [
  'Electricity',
  'Gas',
  'Water',
  'Sewer',
  'Trash/Recycling',
  'Internet',
  'Cable TV',
  'Phone',
  'Heating',
  'Cooling'
];

const UtilitiesProviderModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [utilityType, setUtilityType] = useState('');
  const [providerCompanyName, setProviderCompanyName] = useState('');
  const [showUtilityDropdown, setShowUtilityDropdown] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      utilityType,
      providerCompanyName
    });
    onClose();
  };

  const selectUtilityType = (type: string) => {
    setUtilityType(type);
    setShowUtilityDropdown(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl border w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Utilities provider</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Utility Type and Provider Company Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Utility type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowUtilityDropdown(!showUtilityDropdown)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex justify-between items-center"
                >
                  <span className={utilityType ? 'text-gray-900' : 'text-gray-500'}>
                    {utilityType || 'Select'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {showUtilityDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {utilityTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => selectUtilityType(type)}
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
                Provider company name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={providerCompanyName}
                onChange={(e) => setProviderCompanyName(e.target.value)}
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
const UtilitiesProviderDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Open Utilities Provider Modal
      </button>
      
      <UtilitiesProviderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default UtilitiesProviderDemo;
export { UtilitiesProviderModal };