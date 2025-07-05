import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LeasingInfoModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
          Leasing info
        </h2>

        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Leasing manager name <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              required
              type="text"
              className="border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl w-full"
              placeholder="Alex Johan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Leasing manager Phone number <span className="text-red-600 text-lg">*</span>
            </label>
            <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
              <select className="bg-white p-2 pr-6 border-r-2">
                <option value="bd">🇧🇩</option>
                <option value="us">🇺🇸</option>
              </select>
              <input
                required
                type="tel"
                className="flex-1 p-2 outline-none"
                placeholder="+880"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              Leasing manager email <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              required
              type="email"
              className="w-full border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl"
              placeholder="leasing@rentyard.com"
            />
          </div>

          <div className="col-span-2 flex items-center space-x-2">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" id="same-address" />
            <label htmlFor="same-address" className="text-sm font-medium">
              Address (same as property)
            </label>
          </div>

          <div className="col-span-2 text-right mt-2">
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

export default LeasingInfoModal;
