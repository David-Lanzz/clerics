import { Route, Routes } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import About from "./routes/About"
import CreateClericForm from "./routes/ClericForm"
import Cleric from "./routes/Cleric"
import Clerics from "./routes/Clerics"
import Passcode from "./routes/Passcode"
import Admin from "./routes/Admin"
import AdminClerics from "./routes/AdminClerics"
import AdminBookings from "./routes/AdminBookings"
import Booking from "./routes/Booking"
import axios from "axios"
import { useEffect } from "react"
import { createCleric } from "./services"
import { clericsList } from "../data"
import UserBookings from "./routes/UserBookings"
import UserEmailVerification from "./routes/UserEmail"
import Signup from "./routes/Signup"
import CodeVerification from "./routes/CodeVerification"
import Login from "./routes/Login"
import ClericNav from "./routes/ClericNav"
import ClericBookings from "./routes/ClericBookings"


function App() {


  const responseInterceptor = axios.interceptors.response.use((response) => {
    if (response?.data?.notification) {
      toast.success(response?.data?.notification)
    }
    return response
  }, (error) => {
    if (error?.data?.notification) {
      console.log(error.data)
      toast.success(error?.data?.notification)
    }
    throw error
  })

  useEffect(() => {

    return () => axios.interceptors.response.eject(responseInterceptor)
  }, [])

  // useEffect(()=> {
  //   clericsList.map(cleric=> createCleric(cleric))
  // })

  return (
    <div className="text-primary bg-secondary">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cleric/:id" element={<Cleric />} />
          <Route path="/clerics" element={<Clerics />} />
          <Route path="/booking/:userId" element={<Booking />} />
          <Route path="/mybookings/:id" element={<UserBookings />} />
          <Route path="/authenticate" element={<UserEmailVerification />} />
        </Route>
        <Route path="/authorizeAdmin" element={<Passcode />} />
        <Route path="/verify/:email" element={<CodeVerification />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/:id" element={<Admin />} >
          <Route index element={<AdminClerics />} />
          <Route path="createCleric" element={<CreateClericForm />} />
          <Route path="bookings" element={<AdminBookings />} />
        </Route>
        <Route path="/teacher/:id" element={<ClericNav />} >
          <Route path="createCleric" element={<CreateClericForm />} />
          <Route index element={<ClericBookings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
