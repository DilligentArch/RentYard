'use client';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationAgreementModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [acceptImmigrant, setAcceptImmigrant] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      setPdfFile(null);
    }
  };

  const handleCheckboxChange = () => {
    setAcceptImmigrant((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log('PDF File:', pdfFile);
    console.log('Accept Immigrant:', acceptImmigrant);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl border w-full max-w-xl relative shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-gray-100 text-gray-700 px-4 py-3 rounded-t-xl font-medium flex justify-between items-center">
          <span>Application agreement (optional)</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Upload Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload agreement</label>

            {/* Hidden File Input */}
            <label className="w-full border-2 border-dashed border-gray-300 bg-gray-200 rounded-xl p-4 text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12" />
              </svg>
              <span>{pdfFile ? pdfFile.name : '(PDF only)'}</span>
            </label>
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              id="accept-immigrant"
              type="checkbox"
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={acceptImmigrant}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="accept-immigrant"
              className="ml-3 block text-sm text-gray-700"
            >
              Accept immigrant & international student application
            </label>
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

export default ApplicationAgreementModal;
