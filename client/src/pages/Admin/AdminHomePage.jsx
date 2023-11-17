import React from "react";
import AdminHomePageComponent from "../../components/admin/AdminHome";
import Header from "../../components/admin/Header";
import Siderbar from "../../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
const AdminHomepage = () => {
  return (
    <div>
      {/* <AdminHomePageComponent /> */}
      <Header/>
      <div className="flex flex-row gap-1">
        <Siderbar/>
        <div className="w-full">
           <div className="h-[40rem] rounded shadow bg-white p-2">
            <Outlet/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
