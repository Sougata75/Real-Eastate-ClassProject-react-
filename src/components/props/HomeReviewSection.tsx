
import review1Img from '../../assets/review/r1.png'
import review2Img from '../../assets/review/r2.png'

function HomeReviewSection() {
  return (
    <>
      <div className="w-[1320px]">
        <div className="w-full">
          <h2 className="text-black text-[65px] font-semibold">
            Hear From Our
            <p className="text-yellow-500 text-[75px] font-bold">
              Happy Clints
            </p>
          </h2>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-1/2 flex flex-wrap gap-5">
            <div className="w-full bg-yellow-100  rounded-3xl flex">
                <div className="w-full h-[267.5px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${review1Img})`,backgroundSize:'75%', backgroundPosition: '-30% 10%'}} >
                    <p className="text-black text-[25px] w-[55%] justify-self-end text-right py-10 pr-10">
                "Impressed by the team's dedication and insight. They understood
                my vision and turned it into a beautiful living space."
              </p>
                </div>
            </div>
            <div className="w-full bg-yellow-100  rounded-3xl flex">
                <div className="w-full h-[267.5px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${review2Img})`,backgroundSize:'75%', backgroundPosition: '-30% 10%'}} >
                    <p className="text-black text-[25px] w-[55%] justify-self-end text-right py-10 pr-10">
                "Impressed by the team's dedication and insight. They understood
                my vision and turned it into a beautiful living space."
              </p>
                </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default HomeReviewSection;
