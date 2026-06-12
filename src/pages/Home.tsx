import  { useState } from "react";
import Banner from "../assets/banner-img/banner.jpg";
import HcardSection1 from "../components/props/HcardSection1";
import HomeSection3 from "../components/props/HomeSection3";
import { cards } from "../services/json/cards";
import HomeSection4 from "../components/props/HomeSection4";
import HomeSection5 from "../components/props/HomeSection5";
import HomeReviewSection from "../components/props/HomeReviewSection";
import { useNavigate } from "react-router-dom";

function Home() {
  const [rent,setRent] = useState<boolean>(false);
  const [buy,setBuy] = useState<boolean>(true);

  //for Search querry
  const [location,setLocation] = useState("NewYork");
  const [propertyType,setPropertyType] = useState("Duplex House");
  const [priceRange,setPriceRange] = useState("$21,000 - $40,000");

  const navigate = useNavigate();

  const handleSearch = () => {
    const mode = buy? "buy":"rent";
    navigate(`/searchResult?mode=${mode}&location=${location}&type=${propertyType}&pricerange=${priceRange}`);
  }

  return (
    <>
      <section className="md:px-2">
        <div
          className="h-[36vh] md:h-[100vh] bg-cover bg-bottom flex justify-center md:rounded-3xl"
          style={{ backgroundImage: `url(${Banner})` }}>
          <div className="w-[1450px] flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-center md:float-none md:items-start">
              <h1 className="text-white text-[20px] md:text-[80px] font-semibold flex flex-wrap w-[80%] md:w-[50%] mb-2 md:mb-10">
              Affordable Housing <p className="pr-2 md:pr-6">In</p>{" "}
              <p className="text-yellow-500 text-[20px] md:text-[80px] font-bold">
                Lagos Island
              </p>
            </h1>
            <p className="text-[7px] md:text-[20px] text-white w-[80%] md:w-[50%]  mb-2 md:mb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ratione labore ipsum nemo earum tempore nulla ad laborum quibusdam
              cum voluptatibus error velit temporibus optio minus, voluptate
              maiores mollitia quam.
            </p>
            <div className="w-[80%]">
            <button className=" text-yellow-500 bg-white rounded-full md:w-[200px] flex justify-between items-center  md:pl-9 text-sm md:text-lg px-3 md:px-0 p-1 border border-yellow-500 hover:shadow-md hover:shadow-black hover:translate-y-[-2px] transition-all">
              View More
              <p className="hidden md:block bg-black  px-5 pt-3 pb-3 rounded-full">➚</p>
            </button>
            </div>
            </div>

            <div className="w-[90%] md:w-full h-[80px] md:h-[238px] flex flex-wrap justify-center items-center bg-white/30 backdrop-blur-sm rounded-3xl px-4 md:px-10 py-2">
                <div className="w-[75%] md:w-[80%] flex flex-wrap gap-1 md:gap-14">
                  <div className="w-full flex flex-wrap gap-2 md:gap-10 item text-[14px]smd:-start">
                  <button onClick={()=>{setBuy(true); setRent(false)}} className={`${buy? "underline text-yellow-500":"text-yellow-500/80"} text-[10px] md:text-3xl  font-semibold`}>Buy</button>
                  <button onClick={()=>{setBuy(false); setRent(true)}} className={`${rent? "underline text-yellow-500":"text-yellow-500/80"} text-[10px] md:text-3xl  font-semibold`}>Rent</button>
                </div>
                <div className="w-full flex flex-wrap">
                  <div className="flex flex-wrap w-1/3 justify-between md:pr-16">
                    <div>
                      <p className=" text-[8px] md:text-3xl text-yellow-500 md:mb-5">Location</p>
                    <select className="bg-transparent text-white text-[8px] md:text-3xl" name="" id="" value={location} onChange={(e)=> setLocation(e.target.value)}>
                      <option value="Newyork">New York City</option>
                      <option value="London">London</option>
                      <option value="Germany">Germany</option>
                      <option value="Los Angeles">Los Angeles</option>
                    </select>
                    </div>
                    <div className="hidden md:block bg-yellow-500 h-full w-[1px]"></div>
                  </div>
                  <div className="flex flex-wrap w-1/3 justify-between  md:pr-16">
                    <div>
                      <p className="text-[8px] md:text-3xl text-yellow-500 md:mb-5">Property Type</p>
                    <select className="bg-transparent text-white text-[8px] md:text-3xl" name="" id="" value={propertyType} onChange={(e)=> setPropertyType(e.target.value)}>
                      <option value="Duplex House">Duplex House</option>
                      <option value="Bunglow">Banglow</option>
                      <option value="Farm House">Farm House</option>
                      <option value="Stilt Houses">Stilt Houses</option>
                    </select>
                    </div>
                    <div className="hidden md:block bg-yellow-500 h-full w-[1px]"></div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div>
                      <p className="text-[8px] md:text-3xl text-yellow-500  md:mb-5">Price Range</p>
                    <select className="bg-transparent text-white text-[8px] md:text-3xl" name="" id="" value={priceRange} onChange={(e)=> setPriceRange(e.target.value)}>
                      <option value="$21,000 - $40,000">$21,000 - $40,000</option>
                      <option value="$40,000 -$50,000">$40,000 -$50,000</option>
                      <option value="$50,000 -$70,000">$50,000 -$70,000</option>
                    </select>
                    </div>
                  </div>

                </div>
                </div>
                <div className="w-[20%]">
                  <button onClick={handleSearch} className="hidden  text-yellow-500 bg-black rounded-full w-[200px]  md:flex justify-between items-center  pl-9 text-lg p-1 border border-yellow-500 hover:shadow-md hover:shadow-black hover:translate-y-[-2px] transition-all">
              Search
              <p className="hidden md:block ml-3 bg-white px-5 pt-3 pb-3 rounded-full">➚</p>
            </button>

            <button onClick={handleSearch} className=" md:hidden ml-4 bg-black text-yellow-500 p-3 px-4 rounded-full"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] flex flex-wrap justify-center gap-4 md:gap-16">
        <div className="w-full md:w-[1320px] flex flex-wrap justify-between">
          <div className="w-[50%]">
            <h2 className=" ml-1 md:ml-0 text-[20px] md:text-[65px] font-semibold text-black">Looking For Your <p className=" text-[25px] md:text-[75px] font-bold text-yellow-500">Dream Home?</p></h2>
          </div>
          <div className="w-[48%] mr-1 md:mr-0 md:w-[40%] flex flex-wrap">
            <p className=" text-[8px] md:text-[20px] w-full">Figma ipsum component varient main layer. Effect list background ditribute</p>
            <div className="flex items-end">
              <button className="text-yellow-500 bg-white rounded-full  md:w-[200px] flex justify-between items-center md:pl-9 text-sm md:text-lg px-3 md:px-1 p-1 border border-yellow-500 hover:shadow-md hover:shadow-black hover:translate-y-[-2px] transition-all">
              View More
              <p className="hidden md:block ml-3 bg-black md:px-5 pt-3 pb-3 rounded-full">➚</p>
            </button>
            </div>
          </div>
        </div>
        <div className="w-[1320px] flex flex-wrap gap-1 md:gap-5">
        <HcardSection1 items = {cards.slice(0, 4)} />
        </div>
      </section>
      <section  className="py-[50px] flex justify-center">
        <HomeSection3/>
      </section>
      <section className="py-[50px] flex justify-center">
        <HomeSection4/>
      </section>
      <section className="py-[50px] flex justify-center">
        <HomeSection5/>
      </section>
      <section className="py-[50px] flex justify-center">
        <HomeReviewSection/>
      </section>
    </>
  );
}

export default Home;
