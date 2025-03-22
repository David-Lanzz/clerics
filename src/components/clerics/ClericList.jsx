import React, { useEffect, useState } from 'react'
import { getAllClerics } from '../../services'
import { useNavigate } from 'react-router-dom'

const ClericList = () => {

    const [clerics, setClerics] = useState([])

    useEffect(() => {
        getAllClerics().then(data => setClerics(data?.clerics))
    }, [])

    const navigate = useNavigate()

    const userId = localStorage.getItem('userId')


    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[90rem] flex flex-col gap-[5rem]">
                {
                    clerics.map((cleric, index) => (
                        <div className={`w-full flex flex-col items-center md:flex-row gap-4 md:gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse pl-4 md:pl-[4rem]' : 'pr-4 md:pr-[4rem]'}`}>
                            <span className="w-full md:h-[30rem] overflow-hidden md:w-1/2">
                                <img src={cleric?.image} className='w-full h-full object-cover' alt="" />
                            </span>
                            <span className="w-full md:w-1/2 flex flex-col gap-4">
                                <h3 className="text-3xl font-semibold">{cleric?.name}</h3>
                                <h4 className="text-xl">{cleric?.subTitle}</h4>
                                <p>{cleric?.paragraph[0]}</p>
                                <span className="flex flex-col gap-2 p-2 px-4">
                                    <h4 className="text-lg">Pricing</h4>
                                    {
                                        cleric?.priceList?.map((price, index) => (
                                            <span key={index} className="flex w-full justify-between">
                                                <p>{price?.key}</p>
                                                <p>£{price?.value}</p>
                                            </span>
                                        ))
                                    }
                                </span>
                                <span>
                                    <button className='standardBtn' onClick={() => navigate(`/booking/${userId}/?id=${cleric?.id}`)}>Book Now</button>
                                </span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClericList