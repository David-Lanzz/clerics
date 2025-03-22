import React, { useEffect, useRef, useState } from 'react'
import { Element, scroller } from 'react-scroll'
import { editBooking, getUserBookings } from '../services'
import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronRight, FaClock, FaEnvelope } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { RiSendPlane2Line } from 'react-icons/ri'
import { toast } from 'react-toastify'

const UserBookings = () => {

    const [bookings, setBookings] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(id)
        if (!id || id === 'null') {
            console.log(id)
            navigate('/login')
        }
        getUserBookings(id).then(data => {
            setBookings(data?.bookings)
        })
    }, [])

    const [message, setMessage] = useState('')

    const [selectedBooking, setSelectedBooking] = useState(null)

    const handleStatus = (payload) => {
        editBooking({ id: payload?.id, body: { status: payload?.status } }).then(data => {
            getUserBookings(id).then(data => {
                setBookings(data?.bookings)
            })
            if (selectedBooking) {
                setSelectedBooking(data?.booking)
            }
        })
    }

    const sendMessage = (payload) => {
        if (message) {
            editBooking({ id: payload?.id, body: { message: { role: 'user', message } } }).then(data => {
                setBookings(prev => prev.map(booking => booking?.id === data?.booking?.id ? { ...booking, message: data?.booking?.message } : booking))
                setMessage('')
                if (selectedBooking) {
                    setSelectedBooking(data?.booking)
                }

                setTimeout(() => {
                    scroller.scrollTo('lastmessage', { smooth: true, containerId: 'messages' })
                }, 100);
            })
        }
        else {
            toast.error('Enter a message')
        }
    }

    return (
        <Element name='mybookings' className='w-full flex justify-center px-4 md:px-[4rem] mt-[5rem] relative overflow-x-hidden'>
            <div className={`w-full h-full ${selectedBooking ? 'right-0' : 'right-[-200vw]'} slowMo fixed top-0 object-cover bg-black/70 z-[5] flex justify-center items-center`}>
                <div className="w-[30rem] h-full md:h-[30rem] overflow-auto bg-white shadow-lg rounded-xl relative flex flex-col gap-4 p-6 border border-gray-200">
                    {/* Cleric Title */}
                    <button className="p-4 w-full flex sticky top-0 left-0 gap-2 items-center bg-gray-100 text-gray-800 font-semibold rounded-lg">
                        {selectedBooking?.cleric?.name}
                    </button>

                    {/* Message */}
                    <div className="flex gap-3 items-start text-gray-700">
                        <FaEnvelope className="mt-1 text-primary" />
                        <span id='messages' className="w-full flex pr-4 flex-col h-[10rem] flex-grow gap-4 overflow-auto">{selectedBooking?.message?.map((message, index) => (
                            <>
                               { message?  <span key={index} className={`flex flex-col gap-1`}>
                                    <p className={`font-medium ${message?.role === 'cleric' ? 'ml-auto' : null}`}>{message?.role === 'cleric' ? 'Cleric' : selectedBooking?.email}:</p>
                                    <p className={` ${message?.role === 'cleric' ? 'ml-auto' : null}`}>{message?.message}</p>
                                </span>: null}
                            </>
                        ))}
                            <Element name='lastmessage' />
                        </span>
                    </div>

                    {/* Booking Date */}
                    <div className="flex gap-3 items-center text-gray-800 font-medium">
                        <FaClock className="text-primary" />
                        <span>{new Date(selectedBooking?.date).toDateString()}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex flex-col w-full gap-3 border-t border-gray-200 pt-4">
                        <span className="flex items-center w-full border border-secondary rounded-md overflow-hidden">
                            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Enter a message' className='p-2 px-4 outline-none flex-grow' />
                            <RiSendPlane2Line onClick={() => sendMessage({ id: selectedBooking?.id })} className='text-3xl cursor-pointer' />
                        </span>

                        <button
                            onClick={() => setSelectedBooking(null)}
                            className="p-3 w-full flex gap-2 items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            <FaX /> Close
                        </button>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col gap-[2rem] items-end">
                {
                    !bookings.length ? <div className='w-full h-full flex justify-center items-center'>
                        <h3 className="text-3xl font-semibold tracking-[0.5rem]">No booking associated with this email</h3>
                    </div> :
                        <div className="w-full overflow-auto h-full flex flex-col gap-[2rem] items-end">
                            <h3 className="text-3xl md:text-5xl font-semibold">ALL BOOKINGS</h3>
                            {
                                ['pending', 'accepted', 'completed', 'cancelled'].map((status, index) => (
                                    <div key={index} className="flex flex-col gap-2 w-full">
                                        <h3 className='font-semibold'>{status}</h3>
                                        <div className="w-full flex gap-8 flex-wrap">
                                            {bookings.map((booking, index) => {
                                                if (booking?.status === status) {
                                                    return (
                                                        <span key={index} className='w-full md:w-[30%] flex-grow cursor-pointer md:max-w-[20rem] h-[20rem] overflow-hidden relative'
                                                        >
                                                            <img src={booking?.cleric?.image} className='absolute w-full h-full top-0 left-0 object-cover' alt="" />
                                                            <span className='relative w-full h-full text-white flex flex-col top-0 left-0 p-4 font-semibold'>
                                                                <h3 className='text-primary'>{booking?.cleric?.name}</h3>
                                                                <p>£{booking?.priceSummary?.reduce((accumulator, obj) => parseInt(obj.value) + accumulator, 0)}</p>
                                                            </span>
                                                            <span className="w-full h-full absolute top-0 gap-2 left-0 z-[2] flex flex-col justify-end items-center p-4 object-cover bg-gradient-to-t from-primary to-transparent">
                                                                <div className="w-full">
                                                                    <button
                                                                        onMouseEnter={() => {
                                                                            setBookings(prev => prev.map(item => booking?.id === item?.id ? { ...item, hovered: true } : item))
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                            setBookings(prev => prev.map(item => booking?.id === item?.id ? { ...item, hovered: false } : item))
                                                                        }}
                                                                        className="p-3 px-6 w-full flex gap-2 items-center bg-tertiary"><FaX /> Actions</button>
                                                                    <span
                                                                        onMouseEnter={() => {
                                                                            setBookings(prev => prev.map(item => booking?.id === item?.id ? { ...item, hovered: true } : item))
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                            setBookings(prev => prev.map(item => booking?.id === item?.id ? { ...item, hovered: false } : item))
                                                                        }}
                                                                        className={`absolute top-0 p-4 right-0 h-full object-cover ${booking?.hovered ? 'top-0' : 'top-[-20rem]'} slowMo bg-black/70 z-[5] w-full flex flex-col gap-4`}>
                                                                        <button onClick={() => {
                                                                            setSelectedBooking(booking)
                                                                            setTimeout(() => {
                                                                                scroller.scrollTo('lastmessage', { smooth: true, containerId: 'messages' })
                                                                            }, 100);
                                                                        }} className="p-3 px-6 w-full flex gap-2 items-center bg-tertiary"><FaChevronRight /> View</button>
                                                                        {
                                                                            booking?.status === 'pending' || !booking?.status ?
                                                                                <>
                                                                                    <button onClick={() => handleStatus({ id: booking?.id, status: 'cancelled' })} className="p-3 px-6 w-full flex gap-2 items-center bg-tertiary"><FaChevronRight />Cancel Booking</button>
                                                                                </> : booking?.status === 'accepted' ?
                                                                                    <>
                                                                                        <button onClick={() => handleStatus({ id: booking?.id, status: 'cancelled' })} className="p-3 px-6 w-full flex gap-2 items-center bg-tertiary"><FaChevronRight /> Cancel Booking</button>
                                                                                    </> : booking?.status === 'cancelled' ?
                                                                                        <>
                                                                                            <button onClick={() => handleStatus({ id: booking?.id, status: 'pending' })} className="p-3 px-6 w-full flex gap-2 items-center bg-tertiary"><FaChevronRight /> Resume Booking</button>
                                                                                        </> : null
                                                                        }
                                                                    </span> : null

                                                                </div>
                                                            </span>

                                                        </span>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                }
            </div>
        </Element>
    )
}

export default UserBookings