import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
   <div className='border-b-1 border-dotted'>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="p-2">
            <Image
            src="/rentyard_logo.png"
            alt="Rentyeard Logo"
            width={120}
            height={120}
            >

            </Image>
        </div>
        <div>
            <button className="text-black border-1 border-dashed  p-2 rounded-xl">
                Exist
            </button>
        </div>
      </div>
   </div>
  )
}

export default Navbar