

function HomeSection4() {
  return (
    <>
    <div className='w-[1320px] flex flex-wrap justify-between'>
        <div className='w-[30%]'>
        <h1 className='text-[55px] text-black font-semibold mb-[46px]'>Built Around 
            <p className='text-[65px] text-yellow-500 font-bold'>Your Needs</p>
        </h1>
        <div className='w-full  p-8 bg-yellow-100 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl'>
            <div className='w-full'>
                <h3 className='text-[65px] font-bold text-black/50 justify-self-end'>01</h3>
            </div>
            <h3 className='text-[46px] my-[26px] font-semibold'>Inerior & Space Planning</h3>
            <p className='w-[85%] text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
        </div>
        </div>
        <div className='w-[30%]'>
            <div className='w-full  p-8 bg-yellow-200 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl'>
            <div className='w-full'>
                <h3 className='text-[75px] font-bold text-black/50 justify-self-end'>02</h3>
            </div>
            <h3 className='text-[42px] my-[26px] mt-[248px] font-semibold'>Property Developement</h3>
            <p className='w-[85%] text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
        </div>
        </div>
        <div className='w-[30%] flex flex-wrap gap-20'>
            <div className='w-full  p-8 bg-yellow-100 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl mt-24'>
            <div className='w-full'>
                <h3 className='text-[65px] font-bold text-black/50 justify-self-end'>01</h3>
            </div>
            <h3 className='text-[42px] my-[26px] font-semibold'>Property Management</h3>
            <p className='w-[85%] text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
        </div>
        <button className="text-yellow-500 bg-white rounded-full w-[200px] flex justify-between items-center pl-9 text-lg p-1 border border-yellow-500 hover:shadow-md hover:shadow-black hover:translate-y-[-2px] transition-all">
              View More
              <p className="ml-3 bg-black px-5 pt-3 pb-3 rounded-full">➚</p>
            </button>
        </div>
    </div>
    </>
  )
}

export default HomeSection4