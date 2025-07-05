export default function CompanyOfficeForm() {
  return (
    <form className="p-6 rounded-lg shadow mt-10">
      <h2 className="text-xl  mb-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold">Company & office info</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Company name*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
        <input
          type="text"
          placeholder="Company Identifier(EIN/TIN)*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />

        {/* Job Title */}
        <input
          type="text"
          placeholder="Your job title*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white  rounded p-2"
        />

        {/* PDF Upload */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Agreement with landlord/owner*</label>
          <div className="border border-dashed border-gray-400 bg-gray-50 text-gray-500 rounded flex items-center justify-center w-[300px] h-[48px] text-sm">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              (PDF only)
            </span>
          </div>
        </div>

        {/* Country */}
        <select className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded">
          <option value="">Choose country</option>
          <option value="us">United States</option>
          <option value="bd">Bangladesh</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="in">India</option>
        </select>

        {/* Street, Apt, City, State */}
        <input
          type="text"
          placeholder="Street address*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
        <input
          type="text"
          placeholder="Apt, suit, unit (if applicable)"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
        <div className="flex gap-2">
          <select className="w-[100px] h-[48px] border border-gray-300 bg-white p-2 rounded">
            <option value="+880">🇧🇩 +880</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
          <input
            type="text"
            placeholder="Phone number*"
            className="w-[190px] h-[48px] border border-gray-300 bg-white p-2 rounded"
          />
        </div>

        {/* Email, City, State, Zip */}
        <input
          type="email"
          placeholder="Contact email*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
        <input
          type="text"
          placeholder="City/Town*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
        <select className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded">
          <option value="">Choose state</option>
          <option value="ny">New York</option>
          <option value="ca">California</option>
          <option value="tx">Texas</option>
          <option value="fl">Florida</option>
        </select>
        <input
          type="text"
          placeholder="Zip code*"
          className="w-[300px] h-[48px] border border-gray-300 bg-white p-2 rounded"
        />
      </div>

      {/* Terms */}
      <div className="flex items-center mt-4">
        <input id="terms" type="checkbox" className="mr-2" />
        <label htmlFor="terms" className="text-sm">
          Accept RentYard property adding terms & condition
        </label>
      </div>
    </form>
  );
}
