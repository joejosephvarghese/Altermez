import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography } from "@material-tailwind/react";
import { handleFetchingCompanies } from "../../features/redux/slice/admin/companySlice";

const ListCompaniTable = () => {
  const dispatch = useDispatch();
  const companies = useSelector((s) => s.companies.data);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5; // Adjust as needed
  const totalItems = 10; // Replace with the actual total number of items

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setPage(page);
  };

  React.useEffect(() => {
    dispatch(handleFetchingCompanies({ page, limit: itemsPerPage }));
  }, [page]);

  const renderPaginationButtons = () => {
    return (
      <div className="flex">
        <button
          className={`mx-2 px-4 py-2 border rounded ${
            page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className={`mx-2 px-4 py-2 border rounded ${
            page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  const handleAddCompany = () => {
    // Add logic to show a modal or navigate to the page with the form for adding a new company
    console.log("Add Company clicked!");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        {/* <h1 className="text-2xl font-bold">Company List</h1> */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded "
          onClick={handleAddCompany}
        >
          Add Company
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r">Company Name</th>
            <th className="py-2 px-4 border-b border-r">Company Email</th>
            <th className="py-2 px-4 border-b border-r">User Limit</th>
            <th className="py-2 px-4 border-b border-r">Country</th>
            <th className="py-2 px-4 border-b border-r">Phone</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="py-2 px-4 border-b border-r">{company?.name}</td>
              <td className="py-2 px-4 border-b border-r">{company?.email}</td>
              <td className="py-2 px-4 border-b border-r">{company?.userLimit}</td>
              <td className="py-2 px-4 border-b border-r">{company?.country}</td>
              <td className="py-2 px-4 border-b border-r">{company?.phone}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 mr-2">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-2 py-1">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default ListCompaniTable;
