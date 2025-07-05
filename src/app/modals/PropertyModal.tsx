import React from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const PropertyModal: React.FC<Props> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-xl border w-full max-w-3xl relative shadow-lg overflow-y-auto max-h-[90vh] ">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
                >
                    ×
                </button>
                <h2 className="text-lg mb-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-t-md font-semibold ">Property Address</h2>
                <form className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Property name as identifier <span className='text-red-600 text-lg'>*</span> </label>
                        <input required
                            type="text"
                            className="border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl w-full"
                            placeholder="Dallas apartments complex"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Total apartment unit<span className='text-red-600 text-lg'>*</span></label>
                        <input required
                            type="number"
                            className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl"
                            placeholder="50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Property website (optional)</label>
                        <input
                            type="url"
                            className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl"
                            placeholder="https://"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Country/Region<span className='text-red-600 text-lg'>*</span></label>
                        <select className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl">
                            <option>Choose country</option>
                            <option>United States</option>
                            <option>Canada</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Street address<span className='text-red-600 text-lg'>*</span></label>
                        <input
                            required
                            type="text"
                            className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl"
                            placeholder="111 Austin Ave"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Apt, suite, unit</label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl"
                            placeholder="123"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">City/Town<span className='text-red-600 text-lg'>*</span></label>
                        <input
                            required
                            type="text"
                            className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl"
                            placeholder="Dallas"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">State/Territory</label>
                        <select className="w-full border-2 border-gray-200  bg-white hover:shadow-md p-2 rounded-xl">
                            <option>Choose state</option>
                            <option>Texas</option>
                            <option>California</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Zip code*</label>
                        <input
                            type="text"
                            className="border-2 border-gray-200 bg-white hover:shadow-md p-2 rounded-xl w-full"
                            placeholder="75061"
                        />
                    </div>

                    <div className="col-span-3 text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyModal;
