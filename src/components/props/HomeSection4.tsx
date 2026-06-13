

function HomeSection4() {
  return (
    <>
    <div className='md:w-[1320px] flex flex-wrap md:justify-between px-2 md:px-0'>
        <div className='w-full text-center md:text-start md:w-[30%]'>
        <h1 className=' text-[40px] md:text-[55px] text-black font-semibold mb-4 md:mb-[46px]'>Built Around 
            <p className='text-[55px] md:text-[65px] text-yellow-500 font-bold'>Your Needs</p>
        </h1>
        <div className='w-full p-4 md:p-8 bg-yellow-100 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl'>
            <div className='w-full'>
                <h3 className='text-[65px] font-bold text-black/50 justify-self-end'>01</h3>
            </div>
            <h3 className='text-[36px] md:text-[46px] my-[26px] font-semibold'>Inerior & Space Planning</h3>
            <p className='px-4 md:px-0 md:w-[85%] text-center md:text-start text-lg md:text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
        </div>
        </div>
        <div className='md:w-[30%]'>
            <div className='w-full p-4 md:p-8 bg-yellow-200 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl mt-[20px] md:mt-0'>
            <div className='w-full'>
                <h3 className='text-[75px] font-bold text-black/50 justify-self-end'>02</h3>
            </div>
            <h3 className='text-[36px] text-center md:text-start md:text-[42px] my-[26px] mt-[100px] md:mt-[248px] font-semibold'>Property Developement</h3>
            <p className='md:w-[85%] text-center md:text-start px-4 md:px-0 text-lg md:text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
        </div>
        </div>
        <div className='md:w-[30%] flex flex-wrap justify-center md:justify-start gap-5 md:gap-20'>
            <div className='w-full p-4 md:p-8 bg-yellow-100 border shadow-[0_0_4px_4px] shadow-gray-400 rounded-3xl mt-[20px] md:mt-24'>
            <div className='w-full'>
                <h3 className='text-[65px] font-bold text-black/50 justify-self-end'>03</h3>
            </div>
            <h3 className='text-[36px] text-center md:text-start md:text-[42px] my-[26px] font-semibold'>Property Management</h3>
            <p className='md:w-[85%] text-center md:text-start px-4 md:px-0 text-lg md:text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
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