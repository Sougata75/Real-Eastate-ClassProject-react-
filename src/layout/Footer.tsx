
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { myNav } from "../services/json/navbarOpt";

function Footer() {
  return (
    <div className="p-2">
      <div className="w-full h-[870px] bg-black flex justify-center rounded-3xl">
        <div className="w-[1320px] flex flex-wrap justify-between items-center">
          
          <div className="flex flex-wrap justify-between w-full">
            <div className="w-full pb-16">
            <img className="w-[200px]" src={Logo} alt="logo-Img" />
          </div>
          <div className="w-[20%] flex flex-wrap">
            <div className="flex flex-col h-[410px] gap-[12px]">
              <h2 className=" text-white text-[18px] font-semibold px-0 py-2 rounded-full mb-[32px]">
                Menu
              </h2>
              {myNav?.map((navItems,index) => (
                              <NavLink key={index} to={navItems.path}>
                              <span className={`text-white text-[16px]`}>{navItems.label}</span>
                          </NavLink>
                             ))} 
            </div>
          </div>
          <div className="flex flex-wrap  flex-col w-[17%]">
            <h2 className=" text-white text-[18px] mb-[46px] font-semibold  py-2 rounded-full flex">
              Write For Us
            </h2>
            <p className="text-white mb-6">
              We are open to publishing guest posts related to graphic and web
              design. These could be tutorials, useful graphic/web design
              resources or in-depth guides. If would like to contribute, we
              would love to hear from you. Please contact us using the button
              below.
            </p>
            <div className="">
              <NavLink to="/contactUs">
                <span className="text-black bg-white w-[150px] p-1 rounded-full border border-yellow-500 pl-3 justify-between flex items-center">
                  Contact US
                  <p className=" bg-black text-yellow-500 px-3 py-[5px] rounded-full">➚</p>
                </span>
              </NavLink>
            </div>
          </div>
          <div className="w-[350px]">
            <div className="pb-8">
              <p className="bg-yellow-100 w-[35%] font-semibold flex justify-center rounded-full p-2">Contact US</p>
            </div>
            <div >
              <form>
                <input className="w-full outline-none p-3 mb-3 rounded-full placeholder-black" type="text" placeholder="Name*" />
                <input className="w-full outline-none p-3 mb-3 rounded-full placeholder-black" type="text" placeholder="Email*" />
                <input className="w-full outline-none h-[150px] mb-3 rounded-3xl placeholder-black" type="text" placeholder="Message*" />
                <button type="submit" className="bg-white border border-yellow-500 p-1 pl-3 w-[35%] rounded-full flex justify-between justify-self-center items-center">Send <p className="ml-3 bg-black text-yellow-500 px-3 py-[5px] rounded-full">➚</p></button>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className=" w-[200px] flex justify-between">
              <a href="#" className="no-underline inline-block text-black bg-white px-1 py-[2px] pb-1 text-2xl rounded-full"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="no-underline inline-block text-black bg-white px-1 py-[2px] pb-1 text-2xl rounded-full"><i className="fa-brands fa-chrome"></i></a>
            <a href="#" className="no-underline inline-block text-black bg-white px-1 py-[2px] pb-1 text-2xl rounded-full"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <a href="#" className="text-white no-underline inline-block">© Copyright 2025 -Homez. All Rights Reserved</a>
            </div>
            <div className="w-[25%] flex justify-between">
              <a href="#" className="text-white no-underline inline-block">Privecy Policy</a>
              <a href="#" className="text-white no-underline inline-block">Terms and Conditions</a>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Footer;
