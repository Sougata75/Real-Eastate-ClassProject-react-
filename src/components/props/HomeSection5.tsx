
import Img1 from '../../assets/section4/img1.jpg'
import Img2 from '../../assets/section4/img2.jpg'
import Img3 from '../../assets/section4/img3.jpg'

function HomeSection5() {
  return (
    <>
    <div className='bg-black w-full flex justify-center rounded-3xl md:mx-3 py-5 md:py-16'>
        <div className=' w-full md:w-[1320px] flex flex-wrap justify-center md:justify-between'>
            <div className='w-full flex flex-wrap text-center md:text-start md:flex-none md:w-1/2 p-1'>
            <h2 className='text-[65px] text-yellow-500/50 font-semibold w-full mb-10 md:mb-[100px] md:my-[70px]'>Gallery</h2>
            <div className='w-full h-[528px] bg-cover bg-center rounded-3xl'  style={{backgroundImage: `url(${Img1})`}}></div>
            </div>
            <div className='text-center md:w-1/2 md:h-[803px] p-1 mt-5 md:mt-0'>
            <h2 className='text-white text-[35px] md:text-[65px] md:ml-3 mb-5 md:mb-0'>Discover Our Finest Project Showcase</h2>
            <div className='flex flex-wrap justify-between md:ml-3 md:pt-28 gap-3 md:gap-0 pb-4'>
                <div className='w-full md:w-[49%] h-[272px] bg-cover bg-center  rounded-3xl' style={{backgroundImage: `url(${Img2})`}}></div>
                <div className='w-full md:w-[49%] h-[272px] bg-cover bg-center  rounded-3xl' style={{backgroundImage: `url(${Img3})`}}></div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-normal md:ml-3'>
                <div className='md:w-1/2'>
                <h3 className='text-white text-[24px] md:text-[37px] font-semibold mb-3'>Design in Focus</h3>
                <p className='text-white text-sm md:text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
                </div>
                <div className='w-full pt-4 md:pt-0 px-4 md:px-0 md:w-1/2 flex flex-wrap justify-end md:items-end md:h-[200px] '>
                <div className='w-[30%] md:w-[50%] md:h-[65px] flex justify-between'>
                    <button className='text-yellow-500 md:text-2xl bg-white py-2 px-[10px] md:p-4 md:px-[18px] rounded-full hover:shadow-md hover:shadow-white hover:translate-y-[-2px] transition-all'><i className="fa-solid fa-arrow-left"></i></button>
                    <button className='text-yellow-500 md:text-2xl bg-white py-2 px-[10px] md:p-4 md:px-[18px] rounded-full hover:shadow-md hover:shadow-white hover:translate-y-[-2px] transition-all'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeSection5