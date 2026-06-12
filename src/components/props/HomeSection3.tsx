
import S3Card from '../../assets/section-3/s3img.jpg'

const HomeSection3 = () => {
  return (
    <>
      <div className="w-[1320px] flex flex-wrap justify-between">
        <div className="md:w-[40%] flex flex-wrap ">
          <h2 className="text-[40px] md:text-[65px] text-center md:text-start w-full text-black font-semibold">
            Authentic
            <p className="text-yellow-500 font-bold text-[55px] md:text-[75px]">
              Nature Living
            </p>
          </h2>
          <p className="text-xl text-center md:text-start md:w-[80%] my-4 md:my-8">
            Figma ipsum component varient main layer. Effect list background
            ditribute
          </p>
          <div className="mx-1 md:w-[80.4%] border border-black rounded-3xl p-5 md:p-11 flex flex-wrap gap-[60px]">
            <div className="flex justify-between w-full">
              <p className="w-[60%] text-xl">Size</p>
              <div className="w-[40%] flex justify-between">
                <p className="text-xl">:</p>
                <p className="text-xl">500 M</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p className="w-[60%] text-xl">Room</p>
              <div className="w-[40%] flex justify-between">
                <p className="text-xl">:</p>
                <p className="text-xl">5 Rooms</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p className="w-[60%] text-xl">Bathrooms</p>
              <div className="w-[40%] flex justify-between">
                <p className="text-xl">:</p>
                <p className="text-xl">5 Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 mx-1 md:mx-0 w-full md:w-[60%] h-[290px] md:h-auto flex flex-wrap justify-between">
          <div className="w-[49%] bg-cover bg-left rounded-3xl" style={{backgroundImage: `url(${S3Card})`, backgroundSize: '200%'}}></div>
          <div className="w-[49%]">
            <div className="bg-cover rounded-3xl w-full h-[70.2%] md:h-[70%]" style={{backgroundImage: `url(${S3Card})`, backgroundSize: '200%', backgroundPosition: '100% 40.2%'}}></div>
            <p className=" text-[8px] md:text-[22px] w-[90%] my-4">
            Figma ipsum component varient main layer. Effect list background
            ditribute
          </p>
          <p className="text-[22px] font-bold text-black">1435 Ft</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
