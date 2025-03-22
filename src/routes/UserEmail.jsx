import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const UserEmailVerification = () => {

    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleAuthorize = () => {
        if (!email) {
            return toast.error('Enter the email')
        }

        navigate(`/mybookings/${email}`)
    }

    return (
        <div className='w-full flex h-[100svh] p-[4rem] justify-center'>
            <div className="w-full max-w-[90rem] flex flex-col items-center justify-center gap-4">
                <h5 className='text-3xl text-center md:text-5xl tracking-[0.5rem] font-semibold'>Welcome</h5>
                <p className='text-center'>To view your bookings, please enter the email associated with your bookings</p>
                <input onChange={(e) => setEmail(e.target.value)} type="emailrd" placeholder='Enter email here' className='w-[20rem] tracking-[0.4rem] p-4 px-8 bg-tertiary text-white font-semibold text-center' />
                <button onClick={handleAuthorize} className="standardBtn">Authorize</button>
            </div>
        </div>
    )
}

export default UserEmailVerification