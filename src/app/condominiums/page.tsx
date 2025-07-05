'use client';
import { Upload, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import PropertyModal from '../modals/PropertyModal';
import LeasingInfoModal from '../modals/LeasingInfoModal'; // adjust the path
import ChargesModal from '../modals/ChargesModal';
import RentReminderModal from '../modals/RentReminderModal';
import ApplicationAgreementModal from '../modals/ApplicationAgreementModal';
import AboutPropertyModal from '../modals/AboutPropertyModal';
import AmenitiesModal from '../modals/AmenitiesModal';
import { PetFeesModal } from '../modals/PetFeesModal';
import { ParkingModal } from '../modals/ParkingDemo';
import { EducationalInstitutionModal } from '../modals/EducationalInstitutionModal';
import { NearestStationModal } from '../modals/NearestStation';
import { AddLandmarkModal } from '../modals/AddLandmarkModal';
import { UtilitiesProviderModal } from '../modals/UtilitiesProvider';
import { useRouter } from 'next/navigation';

// adjust the path

type Field = {
    label: string;
    required?: boolean;
    recommended?: boolean;
    note?: string;
};

const CondoForm = () => {
    const route = useRouter();
    const fieldsInOrder: Field[] = [
        { label: 'Property address', required: true },
        { label: 'Pet fees', note: 'Optional, add fees if you allow pet' },
        { label: 'Leasing info', required: true },
        { label: 'Parking' },
        { label: 'Charges', required: true },
        { label: 'Nearest educational institution', recommended: true },
        { label: 'Rent frequency & payment reminder', required: true },
        { label: 'Nearest stations', recommended: true },
        { label: 'Application agreement' },
        { label: 'Nearest landmark', recommended: true },
        { label: 'About the property' },
        { label: 'Utilities provider', recommended: true },
        { label: 'Community’s amenity/features', recommended: true },
    ];
    const [isVideoSectionOpen, setIsVideoSectionOpen] = useState(false);
    const [addedFields, setAddedFields] = useState<string[]>([]);
    const [fieldInputs, setFieldInputs] = useState<{ [key: string]: string }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLeasingModalOpen, setIsLeasingModalOpen] = useState(false);
    const [isChargesModalOpen, setIsChargesModalOpen] = useState(false);
    const [isRentReminderModalOpen, setIsRentReminderModalOpen] = useState(false);
    const [isApplicationAgreementModalOpen, setIsApplicationAgreementModalOpen] = useState(false);
    const [isAboutPropertyModalOpen, setIsAboutPropertyModalOpen] = useState(false);
    const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
    const [isPetFeesModalOpen, setIsPetFeesModalOpen] = useState(false);
    const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);
    const [isEducationalInstitutionModalOpen, setIsEducationalInstitutionModalOpen] = useState(false);
    const [isNearestStationModalOpen, setIsNearestStationModalOpen] = useState(false);
    const [isLandmarkModalOpen, setIsLandmarkModalOpen] = useState(false);
    const [isUtilitiesProviderModalOpen, setIsUtilitiesProviderModalOpen] = useState(false);

    const handleAddClick = (label: string) => {
        if (label === 'Property address') {
            setIsModalOpen(true);
        } else if (label === 'Leasing info') {
            setIsLeasingModalOpen(true);
        } else if (label === 'Charges') {
            setIsChargesModalOpen(true);
        } else if (label === 'Rent frequency & payment reminder') {
            setIsRentReminderModalOpen(true);
        } else if (label === 'Application agreement') {
            setIsApplicationAgreementModalOpen(true);
        }
        else if (label === 'About the property') {
            setIsAboutPropertyModalOpen(true);
        } else if (label === 'Community’s amenity/features') {
            setIsAmenitiesModalOpen(true);
        }
        else if (label === 'Pet fees') {
            setIsPetFeesModalOpen(true);
        } else if (label === 'Parking') {
            setIsParkingModalOpen(true);
        }
        else if (label === 'Nearest educational institution') {
            setIsEducationalInstitutionModalOpen(true);
        }
        else if (label === 'Nearest stations') {
            setIsNearestStationModalOpen(true);
        }
        else if (label === 'Nearest landmark') {
            setIsLandmarkModalOpen(true);
        }
        else if (addedFields.includes(label) && fieldInputs[label]) {
            // If the field is already added and has input, do nothing
            return;
        }
        else if (label === 'Utilities provider') {
            setIsUtilitiesProviderModalOpen(true);
        }
        else if (!addedFields.includes(label)) {
            setAddedFields((prev) => [...prev, label]);
        }
    };


    const handleInputChange = (label: string, value: string) => {
        setFieldInputs((prev) => ({ ...prev, [label]: value }));
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Condominiums information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fieldsInOrder.map((field, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 border-2 border-gray-200 bg-white hover:shadow-md rounded-xl p-5 text-sm"
                    >
                        <div className="flex justify-between items-center font-semibold">
                            <span>
                                {field.label}
                                {field.required && <span className="text-red-500"> (Required)</span>}
                                {field.note && <span className="text-gray-500"> ({field.note})</span>}
                                {!field.required && field.recommended && (
                                    <span className="text-gray-500"> (Optional but recommended)</span>
                                )}
                                {!field.required && !field.recommended && !field.note && (
                                    <span className="text-gray-500"> (Optional)</span>
                                )}
                            </span>
                            <button
                                onClick={() => handleAddClick(field.label)}
                                className="text-blue-500 hover:underline"
                            >
                                + Add
                            </button>
                        </div>
                        {addedFields.includes(field.label) && (
                            <input
                                type="text"
                                value={fieldInputs[field.label] || ''}
                                onChange={(e) => handleInputChange(field.label, e.target.value)}
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <PropertyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <LeasingInfoModal isOpen={isLeasingModalOpen} onClose={() => setIsLeasingModalOpen(false)} />
            <ChargesModal isOpen={isChargesModalOpen} onClose={() => setIsChargesModalOpen(false)} />
            <RentReminderModal isOpen={isRentReminderModalOpen} onClose={() => setIsRentReminderModalOpen(false)} />
            <ApplicationAgreementModal isOpen={isApplicationAgreementModalOpen} onClose={() => setIsApplicationAgreementModalOpen(false)} />
            <AboutPropertyModal
                isOpen={isAboutPropertyModalOpen}
                onClose={() => setIsAboutPropertyModalOpen(false)}
                onSubmit={(data) => {
                    setFieldInputs((prev) => ({ ...prev, 'About the property': data }));
                    if (!addedFields.includes('About the property')) {
                        setAddedFields((prev) => [...prev, 'About the property']);
                    }
                }}
            />
            <AmenitiesModal isOpen={isAmenitiesModalOpen} onClose={() => setIsAmenitiesModalOpen(false)} />
            <PetFeesModal isOpen={isPetFeesModalOpen} onClose={() => setIsPetFeesModalOpen(false)} />
            <ParkingModal isOpen={isParkingModalOpen} onClose={() => setIsParkingModalOpen(false)} />
            <EducationalInstitutionModal isOpen={isEducationalInstitutionModalOpen} onClose={() => setIsEducationalInstitutionModalOpen(false)} />
            <NearestStationModal isOpen={isNearestStationModalOpen} onClose={() => setIsNearestStationModalOpen(false)} />
            <AddLandmarkModal isOpen={isLandmarkModalOpen} onClose={() => setIsLandmarkModalOpen(false)} />
            <UtilitiesProviderModal isOpen={isUtilitiesProviderModalOpen} onClose={() => setIsUtilitiesProviderModalOpen(false)} />





            <div className=" mx-auto p-6 bg-white ">
                <h3 className="text-lg font-medium mb-4">
                    Property gallery <span className="text-gray-500 text-sm font-normal">(It&apos;s not unit photo)*</span>
                </h3>
                <div className="mb-8  flex gap-10 pt-10 justify-center items-center">


                    <div className="mb-4 ">
                        <h4 className="text-sm font-medium mb-3 ">Featured photos*</h4>
                        <div className="flex gap-3">
                            {/* Upload cover photo */}
                            <div className="w-32 h-32 border-dashed border-2 border-blue-300 flex flex-col items-center justify-center rounded text-center text-xs text-gray-500">
                                <Upload className="w-4 h-4 mb-1 text-blue-400" />
                                <span>Upload cover photo</span>
                                <span className="text-xs">(1 pic only)</span>
                            </div>

                            {/* Featured photo slots */}
                            {[...Array(3)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className="w-20 h-20 border-dashed border-2 border-blue-300 flex items-center justify-center rounded"
                                >
                                    <Upload className="w-4 h-4 text-blue-400" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium mb-3">More photos <span className="text-gray-500 text-sm font-normal">(optional)</span></h4>
                        <div className="grid grid-cols-6 gap-3">
                            {[...Array(12)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className="w-20 h-20 border-dashed border-2 border-blue-300 flex items-center justify-center rounded"
                                >
                                    <Upload className="w-4 h-4 text-blue-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4 border-2 border-gray-200 bg-white hover:shadow-md rounded-2xl p-5">
                        <h3 className="text-lg font-medium">
                            Videos <span className="text-gray-500 text-sm font-normal">(optional)</span>
                        </h3>
                        <button
                            onClick={() => setIsVideoSectionOpen(!isVideoSectionOpen)}
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            {isVideoSectionOpen ? (
                                <Minus className="w-3 h-3 text-gray-500" />
                            ) : (
                                <Plus className="w-3 h-3 text-gray-500" />
                            )}
                        </button>
                    </div>

                    {isVideoSectionOpen && (
                        <div className="border-dashed border-2 border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center text-sm text-gray-500 hover:border-gray-400 transition-colors cursor-pointer">
                            <Upload className="w-6 h-6 mb-2" />
                            <span>Upload video here</span>
                            <span className="text-xs text-gray-400 mt-1">Drag & drop or click to browse</span>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2 border-2 '></div>
                <div className='w-1/2 border-2 border-gray-200'></div>
            </div>
            <div className="flex justify-between items-center mt-10">
                <p className="underline">Back</p>
                <button onClick={() => route.push('/condominiums')} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors">
                    Next
                </button>
            </div>

        </div>
    );
};

export default CondoForm;
