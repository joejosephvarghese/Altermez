import { useSelector } from "react-redux"
import Navbar from "../Header/Navbar"
import Sidebar from "../sidebar/Sidebar"
import {Outlet, useNavigate} from "react-router-dom"
import React from "react"



const Layout = () =>{
    const token = useSelector(s => s.token.token);
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(!token){
            navigate("login")
        }
    }, [navigate])
    return (
        <div className="">
            <div><Navbar/></div>
            <div className="flex bg-white-200">
                <div>
                    <Sidebar/>
                </div>
                <div className="w-full flex justify-center pt-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout