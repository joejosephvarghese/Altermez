import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const CompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    userLimit: "",
    country: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle the submission of company data
    console.log("Company data submitted:", companyData);

    // You can add additional logic here, such as dispatching an action
    // to update state or making an API request to save the company details.
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Company Details</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Company Name"
          value={companyData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          label="Company Email"
          value={companyData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="userLimit"
          label="User Limit"
          value={companyData.userLimit}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="country"
          label="Country"
          value={companyData.country}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          label="Phone"
          value={companyData.phone}
          onChange={handleInputChange}
          required
        />
        <Button color="blue" type="submit" ripple="light">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;