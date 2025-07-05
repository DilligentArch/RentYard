'use client';

import { KeyRound, User } from "lucide-react"
import Image from "next/image"
import ProofOfOwnershipForm from "./ProofOfOwnerShipForm"
import RealtorVerificationForm from "./RealtorVerificationForm"
import CompanyOfficeForm from "./CompanyOfficeForm"
import { useState } from "react"
import { useRouter } from "next/navigation";




function SelectYourRole() {
  const [flag1,setFlag1] = useState(false);
  const [flag2,setFlag2 ]= useState(false); 
  const [flag3,setFlag3] = useState(false);
  const route = useRouter();
   
  const handleLandlordClick = () => {
    setFlag1(true);
    setFlag2(false);
    setFlag3(false);
  };
  const handleRealtorClick = () => {
    setFlag1(false);
    setFlag2(true);
    setFlag3(false);
  };
  const handleCompanyClick = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(true);
  };

  return (
    <div className='w-11/12 mx-auto mt-10'>
      <h2 className='text-3xl font-semibold'>Select your role</h2>
      <div className='mt-20 flex gap-4 justify-center items-center'>
        {/* Landlord  */}
        <div onClick={handleLandlordClick}     className={`px-8 py-10 text-xl font-semibold text-gray-800 border-2  rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 cursor-pointer ${flag1 ? ' border-blue-300' : 'border-gray-200'}`}>
          <div> <KeyRound></KeyRound> </div>
          <div>
            <h2 className='text-base'>Landlord</h2>
            <p className='text-sm' style={{ color: '#777980' }}>Owner of the property</p>
          </div>
        </div>
        {/* Realtor */}
        <div onClick={handleRealtorClick}     className={`px-8 py-10 text-xl font-semibold text-gray-800 border-2  rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 cursor-pointer ${flag2 ? ' border-blue-300' : 'border-gray-200'}`}>
          <div> <User></User> </div>
          <div>
            <h2 className='text-base'>Realtor</h2>
            <p className='text-sm' style={{ color: '#777980' }}>Manage property on behalf on owner</p>
          </div>
        </div>
        {/* Property management company */}
        <div
          onClick={handleCompanyClick}
          className={`px-8 py-10 text-xl font-semibold text-gray-800 border-2  rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 cursor-pointer ${flag3 ? ' border-blue-300' : 'border-gray-200'}`}
        >
          <div> <Image
          src={'/user_builder.svg'}
          alt="User Builder"
          width={50}
          height={50}>
            
            </Image> </div>
          <div>
            <h2 className='text-base'>Property management company</h2>
            <p className='text-sm' style={{ color: '#777980' }}>For management company</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      {
        flag1 && <ProofOfOwnershipForm></ProofOfOwnershipForm>
      }
      {
        flag2 && <RealtorVerificationForm></RealtorVerificationForm>
      }
      {
        flag3 && <CompanyOfficeForm></CompanyOfficeForm>  
      }
      <div className="flex justify-between items-center mt-64">
        <p className="underline">Back</p>
        <button onClick={() => route.push('/condominiums')} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
        
      </div>
  )
}

export default SelectYourRole