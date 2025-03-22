import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllClerics } from '../services'


const AdminClerics = () => {

    useEffect(() => {
        getAllClerics().then(data => setClerics(data.clerics))
    }, [])

    const [clerics, setClerics] = useState([])

    const navigate = useNavigate()

    return (
        <div className='w-full flex flex-col gap-[2rem] items-end'>
            <button className="standardBtn" onClick={()=> navigate('createCleric')}>Create Cleric</button>
            <div className="w-full flex gap-8 flex-wrap">
                {clerics.map((cleric, index) => (
                    <span key={index} className='w-[20rem] cursor-pointer flex-grow md:max-w-[30%] h-[20rem] overflow-hidden relative'
                    onClick={()=> navigate(`createCleric/?id=${cleric?.id}`)}
                    >
                        <img src={cleric.image} className='relative w-full h-full top-0 left-0' alt="" />
                        <span className="w-full h-full absolute top-0 left-0 z-[2] flex flex-col justify-end items-center p-4 object-cover bg-gradient-to-t from-primary to-transparent">
                            <p className="text-xl text-secondary">{cleric.name} Name</p>
                        </span>
                        <span className={`absolute top-0 left-0 w-full h-full object-cover bg-transparent text-transparent hover:text-white hover:bg-black/70 slowMo z-[10] flex justify-center items-center`}>
                        <p className='font-medium'>Click to Edit</p>
                        </span>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default AdminClerics