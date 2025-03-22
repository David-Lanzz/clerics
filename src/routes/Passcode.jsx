import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { authorizeAdmin } from '../auth'
import { useNavigate } from 'react-router-dom'

const Passcode = () => {

    const [passcode, setPasscode] = useState('')
    const navigate = useNavigate()

    const handleAuthorize = () => {
        if (!passcode) {
            return toast.error('Enter the passcode')
        }

        authorizeAdmin(passcode).then(data => {
            sessionStorage.setItem('token', data?.token)
            navigate(`/admin/${data?.id}`)
        })
    }

    return (
        <div className='w-full flex h-[100svh] p-[4rem] justify-center'>
            <div className="w-full max-w-[90rem] flex flex-col items-center justify-center gap-4">
                <h5 className='text-3xl text-center md:text-5xl tracking-[0.5rem] font-semibold'>Welcome Admin</h5>
                <p className='text-center'>To authorize your presence, please enter the admin passcode</p>
                <input onChange={(e) => setPasscode(e.target.value)} type="password" placeholder='Enter passcode here' className='w-[20rem] tracking-[0.5rem] p-4 px-8 bg-tertiary text-white classic font-semibold text-center uppercase' />
                <button onClick={handleAuthorize} className="standardBtn">Authorize</button>
            </div>
        </div>
    )
}

export default Passcode