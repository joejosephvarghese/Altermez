import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { handleGettingUser } from "../../features/redux/slice/admin/userSlice";

const UserListTable = () => {
  const dispatch = useDispatch()
  const users = useSelector(s => s.user.data.users);
  const pageCount = useSelector(s => s.user.data.page);
  const [page, setPage] = React.useState(1);


  React.useEffect(()=>{
    dispatch(handleGettingUser({page, limit: 8}));
  },[])


  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r">User ID</th>
            <th className="py-2 px-4 border-b border-r">Name</th>
            <th className="py-2 px-4 border-b border-r">Email</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td className="py-2 px-4 border-b border-r">{user?._id.substring(0,8)}</td>
              <td className="py-2 px-4 border-b border-r">{user?.name}</td>
              <td className="py-2 px-4 border-b border-r">{user?.email}</td>
              <td className="py-2 px-4 border-b text-center">
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
