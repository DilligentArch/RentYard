import React, { useState } from 'react';
import {
  Snowflake,
  Tv2,
  Fan,
  Expand,
  Mountain,
  Refrigerator,
  Trees,
  PlugZap,
  Home,
  Flame,
  Cross,
  Bell,
  ArrowsUpFromLine,
  Car,
  Shield,
 
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const amenitiesList = [
  { label: 'Air conditioning', icon: Snowflake },
  { label: 'Cable ready', icon: Tv2 },
  { label: 'Ceiling fan', icon: Fan },
  { label: 'High ceilings', icon: ArrowsUpFromLine },
  { label: 'Private balcony', icon: Mountain },
  { label: 'Refrigerator', icon: Refrigerator },
  { label: 'Wooded views', icon: Trees },
  { label: 'W/D hookup', icon: PlugZap },
  { label: 'Hardwood Floor (home)', icon: Home },
  { label: 'Fireplace (home)', icon: Flame },
  { label: 'First aid kit', icon: Cross },
  { label: 'Carbon monoxide alarm', icon: Bell },
  { label: 'Expanded patios (home)', icon: Expand },
  { label: 'Free parking on premises', icon: Car },
  { label: 'Fire extinguisher', icon: Shield },
];

const AmenitiesModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const toggleAmenity = (label: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const filteredAmenities = amenitiesList.filter(({ label }) =>
    label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl border w-full max-w-2xl relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Community&apos;s amenity/features</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search amenities"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm"
            />
          </div>

          {/* Amenity Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {filteredAmenities.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => toggleAmenity(label)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border text-sm transition-all
                  ${
                    selectedAmenities.includes(label)
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-300 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;