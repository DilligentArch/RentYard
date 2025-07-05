import React from "react";

const ProofOfOwnershipForm = () => {
  return (
    <div className="p-4 mt-10 rounded-lg shadow ">
      <div className="mb-4">
        <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold">
          Proof of ownership
        </div>
        <div className="rounded-b-md p-4">
          <label className="block mb-2 font-medium">
            Ownership doc<span className="text-red-500">*</span>
          </label>
          <div className="border border-dashed border-gray-400 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50">
            <label className=" w-[405.33px] h-[48px] flex justify-center items-center space-x-2 text-gray-500 border border-dashed border-gray-400 rounded-md p-6 cursor-pointer hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12" />
              </svg>
              <span>(Pdf only)</span>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
            
              />
            </label>

            <input type="file" accept="application/pdf" className="hidden" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="acceptTerms" className="accent-red-500" />
        <label htmlFor="acceptTerms" className="text-sm">
          Accept RentYard property adding terms & condition
        </label>
      </div>
    </div>
  );
};

export default ProofOfOwnershipForm;
