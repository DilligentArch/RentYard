import React from "react";

const RealtorVerificationForm = () => {
  return (
    <div className=" p-4  rounded-lg shadow mt-10">
      <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold">
        Realtor verification
      </div>
      <div className="flex flex-wrap gap-4  rounded-b-md p-4">
        {/* Lenience number */}
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label className="mb-1 font-medium">
            Lenience number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="000000000000"
            className=" rounded-md p-2 w-[405.33px] h-[48px] border-2 border-gray-200  bg-white hover:shadow-md"
          />
        </div>

        {/* Additional documents */}
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label className="mb-1 font-medium">
            Additional documents for realtor
          </label>
          <label className=" w-[405.33px] h-[48px]  border border-dashed border-gray-400 rounded-md p-3 text-center cursor-pointer hover:bg-gray-50 text-gray-500">
            <div className="flex justify-center items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
                />
              </svg>
              <span>(Pdf only)</span>
            </div>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              // onChange={(e) => console.log("Realtor doc:", e.target.files[0])}
            />
          </label>
        </div>

        {/* Agreement with landlord */}
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label className="mb-1 font-medium">
            Agreement with landlord<span className="text-red-500">*</span>
          </label>
          <label className="w-[405.33px] h-[48px] border border-dashed border-gray-400 rounded-md p-3 text-center cursor-pointer hover:bg-gray-50 text-gray-500">
            <div className="flex justify-center items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
                />
              </svg>
              <span>(Pdf only)</span>
            </div>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              // onChange={(e) => console.log("Agreement doc:", e.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* Terms & condition checkbox */}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="acceptTerms"
          className="accent-red-500"
        />
        <label htmlFor="acceptTerms" className="text-sm">
          Accept RentYard property adding terms & condition
        </label>
      </div>
    </div>
  );
};

export default RealtorVerificationForm;
