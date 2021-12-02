import React from "react" 
import Home from "../views/home"
import {Routes, Route,useLocation} from "react-router-dom"
import AboutUs from "../views/aboutus"
import Garelley from "../views/garelley"
import Contact from "../views/contact"
import SignIn from "../views/signin"
import SignUp from "../views/signup"
import Tours from "../views/tours"
import  NewTourView from "../views/dashboard/newtour"
import AllTours from "../views/dashboard/alltours";
import DashboardLayout from "../components/dashboardLayout"

const isUserLoggedIn=localStorage.getItem("userLogedIn")
const Index=()=>{
    const currentUrl=useLocation().pathname
    return(
        
        <>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/garelley' element={<Garelley/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        <Route path='/tours' element={<Tours/>}/>
        </Routes>
{ isUserLoggedIn && currentUrl.includes("/dash")?(
    <DashboardLayout>
    <Routes>
    <Route path='/dash/newtour' element={<NewTourView/>}></Route>
        <Route path='/dash/alltour' element={<AllTours/>}/>
    </Routes>

</DashboardLayout>
    
):(
    <></>
)
}

</>
        
        
    )

}
export default Index;


