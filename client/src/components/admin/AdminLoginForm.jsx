import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { adminLoginValidationSchema } from "../../utils/validation";
import { adminLogin } from "../../features/axios/api/admin/adminAuthentication";
import { adminsetToken } from "../../features/redux/slice/admin/AdminTokenSlice";
import { loginSuccess } from "../../features/redux/slice/admin/AdminLoginAuthSlice";



const AdminLoginForm = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = useSelector((state) => state.adminAuth.isLoggedIn);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminLoginValidationSchema),
  });

  useEffect(()=>{
    if(token) {
      dispatch(loginSuccess());
    }
    if(isLoggedIn === true) {
      navigate('/admin');
    }
  },[navigate]);

  const notify = (msg, type) =>
  type === "error" ? toast.error(msg) : toast.success(msg);

  const onSubmit = (data) => {
  console.log(data);

  adminLogin(data).then((response)=>{
    const token =response.token
    console.log(token)
    
    setTimeout(() => {
      navigate('/admin');
    }, 3000);
    dispatch(adminsetToken(token));
    dispatch(loginSuccess())

    notify("Login success", "success");
  })
  .catch((error) => {
    notify(error.message, "error");
  });

  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Admin Sign In
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-6">
            {/* Your input fields */}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                {...register("email")}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="email"
                type="text"
                placeholder=""
                
              />
             
             
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                {...register("password")}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                type="password"
                placeholder=""
              />
             
            
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
          </div>

          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign In
            </button>

            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Don't have an account?
              <a
                href="#signup"
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-pink-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default AdminLoginForm;
