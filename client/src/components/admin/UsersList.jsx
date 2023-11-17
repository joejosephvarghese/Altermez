import React, { useState } from "react";

const UserListTable = () => {
  // Sample user data
  const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    // Add more user data as needed
  ];

  const [users, setUsers] = useState(initialUsers);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-r">{user.id}</td>
              <td className="py-2 px-4 border-b border-r">{user.name}</td>
              <td className="py-2 px-4 border-b border-r">{user.email}</td>
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
