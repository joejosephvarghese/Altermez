import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import { jobPost } from "../../features/axios/company/jobPost";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
const CompanyForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate();


  const notify = (msg, type) =>
  type === "error" ? toast.error(msg) : toast.success(msg);

  const onSubmit = (data) => {
    console.log("Company data submitted:", data);

    jobPost(data).then((response)=>{
   console.log(response);
   setTimeout(() => {
    navigate('/company');
  }, 2000);

  notify("Company Posted", "success");
    })
    .catch((error) => {
      notify(error.message, "error");
    });
  };

  return (
    <div className="w-[40rem] h-[28rem] mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Company Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          type="text"
          label="Company Name"
          {...register("name", { required: true })}
        />
        <Input
          type="email"
          label="Company Email"
          {...register("email", { required: true })}
        />
        <Input
          type="number"
          label="User Limit"
          {...register("user", { required: true })}
        />
        <Input
          type="text"
          label="Country"
          {...register("country", { required: true })}
        />
        <Input
          type="number"
          label="Phone"
          {...register("phone", { required: true })}
        />
        <Button color="blue" type="submit" ripple="light">
          Submit
        </Button>
      </form>
      <Toaster richColors />
    </div>
  );
};

export default CompanyForm;
