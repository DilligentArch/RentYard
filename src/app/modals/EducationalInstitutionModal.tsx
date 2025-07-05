import React, { useState } from 'react';
import {  ChevronDown } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const institutionTypes = [
  'Elementary school',
  'Middle school',
  'High school',
  'College',
  'University',
  'Community college',
  'Technical school',
  'Private school',
  'Charter school',
  'Preschool'
];

const distanceUnits = [
  'Mile',
  'Kilometer',
  'Feet',
  'Meters'
];

const EducationalInstitutionModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [institutionType, setInstitutionType] = useState('High school');
  const [institutionName, setInstitutionName] = useState('');
  const [distance, setDistance] = useState('1.5');
  const [distanceUnit, setDistanceUnit] = useState('Mile');
  const [showInstitutionDropdown, setShowInstitutionDropdown] = useState(false);
  const [showDistanceDropdown, setShowDistanceDropdown] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      institutionType,
      institutionName,
      distance,
      distanceUnit
    });
    onClose();
  };

  const selectInstitutionType = (type: string) => {
    setInstitutionType(type);
    setShowInstitutionDropdown(false);
  };

  const selectDistanceUnit = (unit: string) => {
    setDistanceUnit(unit);
    setShowDistanceDropdown(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl border w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Add nearest educational institution</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Institution Type and Distance Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Educational institution type<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowInstitutionDropdown(!showInstitutionDropdown)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-700 bg-white hover:bg-gray-50 flex justify-between items-center"
                >
                  <span className="text-gray-900">{institutionType}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {showInstitutionDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {institutionTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => selectInstitutionType(type)}
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
                Distance from property<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="1.5"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
                />
                <div className="relative">
                  <button
                    onClick={() => setShowDistanceDropdown(!showDistanceDropdown)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-2 min-w-[80px]"
                  >
                    <span className="text-gray-900">{distanceUnit}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  {showDistanceDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {distanceUnits.map((unit) => (
                        <button
                          key={unit}
                          onClick={() => selectDistanceUnit(unit)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Institution Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Educational institution name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
const EducationalInstitutionDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Open Educational Institution Modal
      </button>
      
      <EducationalInstitutionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default EducationalInstitutionDemo;
export { EducationalInstitutionModal };