import React from 'react'
import Image from '../assets/bird.jpeg'
import Images from '../assets/lion.jpeg'
import Imagez from '../assets/chimpanzee.jpeg'
import Imagey from '../assets/Wolf.jpeg'

const card = () => {
  return (
    <>

    <h1 className='text-center text-4xl text-amber-300 md:text-amber-200 lg:text-blue-400 mx-auto underline'>Mr Amoah Animal Kingdom</h1>

    <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 place-self-center'>
     {/* card - 1 */}
      <div className='w-60 flex flex-col pt-5 mb-3'>
        <img src={Image} alt="bird" className='shadow-2xl'/>
         <div className='text-center shadow-2xl'>
            <h1 className='text-orange-400 font-medium text-2xl'>Parrot</h1>
            <p className='text-1g font-light'>A parrot is a very smart and colorful bird with a strong, curved beak. They are known for their ability to copy sounds, and some can even learn to "talk" and say human words.</p>
            <button className='bg-orange-400 text-white px-4 py-2 rounded mt-2 mb-4 hover:bg-amber-600 cursor-pointer'>shop now</button>
         </div>
      </div>

      {/* card - 2 */}

      <div className='w-65 flex flex-col pt-5'>
        <img src={Images} alt="lion" className='shadow-2xl'/>
         <div className='text-center shadow-2xl'>
            <h1 className='text-orange-400 font-medium text-2xl'>Lion</h1>
            <p className='text-1g font-light'>lion,known as the king of the jungle, is a strong and majestic animal. It lives in prides and symbolizes leadership, courage, and royalty, earning great respect in the animal kingdom.</p>
            <button className='bg-orange-400 text-white px-4 py-2 rounded mt-2 mb-4 hover:bg-amber-600 cursor-pointer'>shop now</button>
         </div>
      </div>

      {/* card - 3 */}
        <div className='w-60 flex flex-col pt-5'>
        <img src={Imagez} alt="Chimpanzee" className='shadow-2xl'/>
         <div className='text-center shadow-2xl'>
            <h1 className='text-orange-400 font-medium text-2xl'>Chimpanzee</h1>
            <p className='text-1g font-light'>A chimpanzee is a smart, social animal closely related to humans. They use tools, communicate through gestures and sounds, and live in groups, showing emotions like love, care, and cooperation with one another.</p>
            <button className='bg-orange-400 text-white px-4 py-2 rounded mt-2 mb-4 hover:bg-amber-600 cursor-pointer'>shop now</button>
         </div>
      </div>

      {/* Card - 4 */}
      <div className='w-60 flex flex-col pt-5'>
        <img src={Imagey} alt="bird" className='shadow-2xl'/>
         <div className='text-center shadow-2xl'>
            <h1 className='text-orange-400 font-medium text-2xl'>Wolf</h1>
            <p className='text-1g font-light'>A wolf is a powerful and intelligent animal that lives and hunts in packs. Known for teamwork and loyalty, wolves communicate through howls and symbolize courage, unity, strength, and wild freedom.</p>
            <button className='bg-orange-400 text-white px-4 py-2 rounded mt-2 mb-4 hover:bg-amber-600 cursor-pointer'>shop now</button>
         </div>
      </div>


      </div>
      
    </>
  )
}

export default card
