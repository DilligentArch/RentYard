import { Info } from 'lucide-react';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ChargesModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl border w-full max-w-2xl relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
        >
          ×
        </button>

        <h2 className="text-lg mb-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold">
          Charges
        </h2>

        <form className="grid grid-cols-2 gap-4">
          {/* Application Fee */}
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Application fee (one-time)<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="number"
              required
              className="w-full border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl"
              placeholder="100                          All 18+ Applicants"

            />
        
            
          </div>

          {/* Applicant Type
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2 invisible">Applicant type</label>
            
          </div> */}

          {/* Admin Fee */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-2">
              Admin fee (one-time)<span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="number"
              required
              className="w-full border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl"
              placeholder="15"
            />
          </div>

          {/* Note */}
          

          {/* Submit Button */}
          <div className="col-span-2 text-right mt-2 flex justify-between items-center">
            <div className="col-span-2 flex items-center gap-2 mt-2">
            <span><Info></Info></span>
            <p className="text-sm">Type 0 if charges not applicable</p>
          </div>
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

export default ChargesModal;
