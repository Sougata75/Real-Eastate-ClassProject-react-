import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { cards } from '../services/json/cards';
import { Link } from 'react-router-dom';


function SearchResult() {
    const [searchParams] = useSearchParams();
    const selectedLocation = searchParams.get("location");
    const selectedType = searchParams.get("type");
    const seletedPrice = searchParams.get("pricerange");

    console.log(selectedLocation,seletedPrice,selectedType);
    

    const filteredProperties = cards.filter((property) =>{
        const matchLocation = property.brief[0].location === selectedLocation;
        const matchType = property.brief[0].type === selectedType;

        let matchPrice = true;

        if(seletedPrice){
            const cleanPrice = parseInt(property.brief[0].price.replace(/[^0-9]/g, ""));

            const [minString,maxString] = seletedPrice.split('-');
            const minPrice = parseInt(minString.replace(/[^0-9]/g, ""));
            const maxPrice = parseInt(maxString.replace(/[^0-9]/g, ""));

            matchPrice = cleanPrice >= minPrice && cleanPrice <= maxPrice;
        }
        return matchLocation && matchType && matchPrice;
    });

  return (
     <>
    
        {filteredProperties?.map((item,index) => (
            <div key={index} className='w-[99%] h-full justify-self-center'>
                <div className='w-full flex flex-wrap justify-between border border-black rounded-3xl p-3 my-2 items-center'>
                    <div className='w-[200px] h-[100px] bg-cover bg-center rounded-3xl' style={{backgroundImage: `url(${item.img})`}}></div>
                    <h2 className='text-5xl font-semibold text-black'>{item.heading}</h2>
                    <Link to={`/property/${item.id}`}>
                    <button className='text-yellow-500 bg-black rounded-full w-[200px] flex justify-between items-center pl-9 text-lg p-1 border border-yellow-500 hover:shadow-md hover:shadow-black hover:translate-y-[-2px] transition-all'>
                        View
                        <p className="ml-3 bg-white px-5 pt-3 pb-3 rounded-full">➚</p>
                    </button>
                    </Link>
                </div>
            </div>
        ))}
   
    </>
  )
}

export default SearchResult