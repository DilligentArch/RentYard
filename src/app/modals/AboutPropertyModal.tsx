import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: string) => void; // New prop to pass data back
}

const AboutPropertyModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [aboutText, setAboutText] = useState('');

  if (!isOpen) return null;

  const handleAddClick = () => {
    onSubmit(aboutText);  // Send data back to CondoForm
    onClose();            // Close modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl border w-full max-w-xl relative shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>About the property (optional)</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <textarea
            placeholder="Type message here"
            rows={6}
            className="w-full border-2 border-gray-200 bg-white hover:shadow-md p-4 rounded-xl resize-none text-sm"
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-300 text-right">
          <button
            onClick={handleAddClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPropertyModal;
