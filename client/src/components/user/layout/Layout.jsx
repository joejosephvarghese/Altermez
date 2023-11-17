import Navbar from "../Header/Navbar"
import Sidebar from "../sidebar/Sidebar"
import {Outlet} from "react-router-dom"



const Layout = () =>{
    return (
        <div className="">
            <div><Navbar/></div>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout