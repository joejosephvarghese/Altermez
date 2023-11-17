import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { userLoginValidationSchema } from "../../utils/validation";
import { setToken } from "../../features/redux/slice/user/TokenSlice";
import { loginSuccess } from "../../features/redux/slice/user/UserLoginAuthSlice";
import { userLogin } from "../../features/axios/api/user/userAuthentication";





  const UserLoginForm =()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const token = localStorage.getItem('token');
    const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(userLoginValidationSchema),
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

    const submitHandler = async (formData) => {
        console.log(formData);
        userLogin(formData)
        .then((response)=>{
          const token =response.token
          dispatch(setToken(token));
          dispatch(loginSuccess())

          notify("Login success", "success");
          setTimeout(() => {
            navigate('/admin');
          }, 2000);
        })
        .catch((error) => {
          notify(error.message, "error");
        });
      }


      

    return (<div className="flex justify-end h-screen bg-slate-100">
    <div className="ml-32 flex justify-center items-center">
      <img
        src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?w=740&t=st=1692285789~exp=1692286389~hmac=21c315bc6b593f7155cec11285fa0a695a231a9eede6536b1d5d6a47c965b46e"
        alt="Img"
        className="w-80"
      />
    </div>
    <div className="flex justify-center items-center w-1/2 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="w-96 p-6 bg-white border border-gray-300 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <div>
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text  "
              placeholder="Email"
             {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            />
               {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
          </div>
          <div>
            <label className="text-sm" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
           {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
        )}
          </div>
          <button
            type="submit"
            className="w-24 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 flex justify-center items-center mx-auto"
          >
            Login
          </button>
        </form>
        <span className="mr-2 flex justify-center">or</span>
        <div className="flex items-center justify-center mt-2">
       
        </div>

        <div className="mt-4 text-center">

            <span className="text-gray-500">
              Don't have an account?{" "}
              <p className="text-purple-600 underline">Sign up</p>
            </span>
         
        </div>
      </div>
    </div>
    <Toaster richColors />
  </div>
);
}
export default UserLoginForm;