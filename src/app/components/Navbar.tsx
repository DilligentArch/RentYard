import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
   <div className='border-b-1 border-dotted m-2 pb-2'>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="p-2">
            <Image
            src="/rentyard_logo.png"
            alt="Rentyeard Logo"
            width={150}
            height={150}
            >

            </Image>
        </div>
        <div>
            <button className="px-7 py-4 text-xl font-semibold text-gray-800 border-2 border-gray-200 rounded-3xl bg-white hover:shadow-md">
                Exit
            </button>
        </div>
      </div>
   </div>
  )
}

export default Navbar