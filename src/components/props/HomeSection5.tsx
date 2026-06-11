import React from 'react'
import Img1 from '../../assets/section4/img1.jpg'
import Img2 from '../../assets/section4/img2.jpg'
import Img3 from '../../assets/section4/img3.jpg'

function HomeSection5() {
  return (
    <>
    <div className='bg-black w-full flex justify-center rounded-3xl mx-3 py-16'>
        <div className='w-[1320px] flex justify-between'>
            <div className='w-1/2 p-1'>
            <h2 className='text-[65px] text-yellow-500/50 font-semibold w-full mb-[100px] my-[70px]'>Gallery</h2>
            <div className='w-full h-[528px] bg-cover bg-center rounded-3xl'  style={{backgroundImage: `url(${Img1})`}}></div>
            </div>
            <div className='w-1/2 h-[803px] p-1'>
            <h2 className='text-white text-[65px] ml-3'>Discover Our Finest Project Showcase</h2>
            <div className='flex flex-wrap justify-between ml-3 pt-28 pb-4'>
                <div className='w-[49%] h-[272px] bg-cover bg-center  rounded-3xl' style={{backgroundImage: `url(${Img2})`}}></div>
                <div className='w-[49%] h-[272px] bg-cover bg-center  rounded-3xl' style={{backgroundImage: `url(${Img3})`}}></div>
            </div>
            <div className='flex flex-wrap ml-3'>
                <div className='w-1/2'>
                <h3 className='text-white text-[37px] font-semibold mb-3'>Design in Focus</h3>
                <p className='text-white text-2xl'>Figma Ipsum Component Varient Main Layer. Object</p>
                </div>
                <div className='w-1/2 flex flex-wrap justify-end items-end h-[200px] '>
                <div className='w-[50%] h-[65px] flex justify-between'>
                    <button className='text-yellow-500 text-2xl bg-white p-4 px-[18px] rounded-full hover:shadow-md hover:shadow-white hover:translate-y-[-2px] transition-all'><i className="fa-solid fa-arrow-left"></i></button>
                    <button className='text-yellow-500 text-2xl bg-white p-4 px-[18px] rounded-full hover:shadow-md hover:shadow-white hover:translate-y-[-2px] transition-all'><i className="fa-solid fa-arrow-right"></i></button>
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