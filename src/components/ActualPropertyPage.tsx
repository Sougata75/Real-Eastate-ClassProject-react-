
import { useParams } from 'react-router-dom'
import { cards } from '../services/json/cards'

function ActualPropertyPage() {
    const {id} = useParams()

    const currentProperty = cards.find((cards) => cards.id === Number(id));
  return (
    <div className='px-2'>
        <div className='w-full h-[600px] bg-cover bg-center rounded-3xl mb-2' style={{backgroundImage: `url(${currentProperty?.img})`}} ></div>
        <div className=' w-[1320px] justify-self-center'>
            <h2 className='text-black text-[75px] font-semibold mb-3'>{currentProperty?.heading}</h2>
            <p className='text-2xl w-[50%] mb-3'> About: {currentProperty?.brief[0].about}</p>
            <p className='text-2xl w-[50%] mb-3'>Type: {currentProperty?.brief[0].type}</p>
            <p className='text-2xl w-[50%] mb-3'>Location: {currentProperty?.brief[0].location}</p>
            <p className='text-2xl w-[50%] mb-3'>Price: {currentProperty?.brief[0].price}</p>
        </div>
    </div>
  )
}

export default ActualPropertyPage