import React, { useEffect, useState } from 'react'
import { getClericById } from '../services'
import { useNavigate, useParams } from 'react-router-dom'
import { Element } from 'react-scroll'
import { getUser } from '../auth'

const Cleric = () => {

    const { id } = useParams()
    const [cleric, setCleric] = useState({})
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [user, setUser] = useState({})


    useEffect(() => {
        if (id) {
            getClericById(id).then(data => setCleric(data.cleric))
            getUser(userId).then(data => setUser(data?.user))
        }
    }, [id])

    return (
        <Element name='cleric' className='w-full flex flex-col items-center gap-8 md:gap-16'>
            <div className='relative w-full h-[60vh] md:h-[75vh]'>
                <img src="/hand.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute inset-0 w-full h-full z-[2] bg-black/70 object-cover" />
                <div className="absolute top-0 z-[3] left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-16">
                    <h2 className="text-4xl md:text-6xl font-semibold">{cleric?.name}</h2>
                    {user?.email === cleric?.email ?<button className='standardBtnLight mt-4' onClick={()=> {
                        navigate(`/teacher/${cleric?.id}`)
                    }}>See my Bookings</button>: null}
                </div>
            </div>

            <div className="w-full px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col gap-6">
                    <h3 className="text-xl md:text-3xl font-semibold">{cleric?.subTitle}</h3>
                    <div className="flex flex-col gap-3">
                        {
                            cleric?.paragraph?.map((parag, index) => (
                                <p key={index} className="text-lg md:text-xl text-gray-700">{parag}</p>
                            ))
                        }
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-start">
                        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300" onClick={() => navigate(`/booking/${userId}/?id=${id}`)}>Book Now</button>
                        <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-light transition-all duration-300">Book a Consultation</button>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <img src={cleric?.image} alt="Cleric" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h3 className="text-3xl font-semibold">Why Choose Our {cleric?.name}?</h3>
                        <div className="flex flex-col gap-4">
                            {
                                cleric?.description?.map((descript, index) => (
                                    <div key={index} className={`flex flex-col ${descript?.key?.includes(':') ? 'gap-2 pl-4' : ''}`}>
                                        {descript?.key ? (
                                            descript?.key?.includes(':')
                                                ? <span className='text-primary underline'>{descript?.key}</span>
                                                : <span className="font-semibold text-lg text-primary">{descript?.key}:</span>
                                        ) : null}
                                        <p className="text-gray-700">{descript?.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
                        <h3 className="text-3xl font-semibold">Price</h3>
                        <div className="flex flex-col gap-2">
                            {
                                cleric?.priceList?.map((price, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="rounded-full text-primary">•</span>
                                        <span className="font-semibold">{price?.key ? price?.key + ":" : null} £{price?.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Cleric
