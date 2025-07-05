'use client'
import { Building, Building2, House } from 'lucide-react'
import  {  useState } from 'react'

function PropertyTypes() {
  const [f1,setF1]=useState(false);
  const [f2,setF2]=useState(false);
  const [f3,setF3]=useState(false);

  return (
    <div className='w-11/12 mx-auto '>
      <h2 className='text-3xl font-semibold'>Property Type</h2>
      <div className='mt-20 flex gap-4 justify-center items-center'>
        {/* Single house Property  */}
        <div onClick={() => { setF1(true); setF2(false); setF3(false); }} className={`px-8 py-10 text-xl cursor-pointer font-semibold text-gray-800 border-2 rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 ${f1 ? 'border-blue-300' : 'border-gray-200 '}`} >
          <div> <House></House> </div>
          <div>
            <h2 className='text-base'>Single House Property</h2>
            <p className='text-sm' style={{ color: '#777980' }}>Single unit house for single family</p>
          </div>
        </div>
        {/* Apartments complex */}
        <div onClick={() => { setF1(false); setF2(true); setF3(false); }} className={`px-8 py-10 text-xl cursor-pointer font-semibold text-gray-800 border-2 rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 ${f2 ? 'border-blue-300' : 'border-gray-200 '}`}>
          <div> <Building></Building> </div>
          <div>
            <h2 className='text-base'>Apartments complex</h2>
            <p className='text-sm' style={{ color: '#777980' }}>Multiple unit house for families</p>
          </div>
        </div>
        {/* Condominiums */}
        <div onClick={() => { setF1(false); setF2(false); setF3(true); }} className={`px-8 py-10 text-xl cursor-pointer font-semibold text-gray-800 border-2 rounded-3xl bg-white hover:shadow-md flex gap-5 items-center w-1/3 ${f3 ? 'border-blue-300' : 'border-gray-200 '}`}>
          <div> <Building2></Building2> </div>
          <div>
            <h2 className='text-base'>Condominiums</h2>
            <p className='text-sm' style={{ color: '#777980' }}>Multiple unit house for families</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      </div>
  )
}

export default PropertyTypes