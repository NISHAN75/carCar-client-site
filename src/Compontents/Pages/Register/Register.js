import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../../../Hooks/useAuth";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Share/Loading/Loading";

const Register = () => {
  const [auth] = useAuth();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updatingLoading, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, verifySending, verifyError] =
    useSendEmailVerification(auth);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [token]=useToken(user || gUser);
  const navigate=useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const displayName = data.name;
    await createUserWithEmailAndPassword(data.email, data.password, data.name);
    await sendEmailVerification();
    await updateProfile({ displayName });
    toast("Your Register is successfull")
    toast("Please Verify Your Email");
    reset();
  };
  let errorElement;
  if (error || gError || verifyError || updateError) {
    errorElement = (
      <p className="text-red-500 mb-5">
        <small>
          {error?.message ||
            gError?.message ||
            verifyError?.message ||
            updateError?.message}
        </small>
      </p>
    );
  }
  if (loading || gLoading || verifySending || updatingLoading) {
    return <Loading></Loading>;
  }
  if(token){
    navigate('/')
  }
  

  return (
    <section className=" flex h-screen justify-center items-center">
      <div className="card card-compact w-96 shadow-xl">
        <div className="card-body w-full">
          <h2 className="card-title  justify-center mb-10">Please Register</h2>
          <div className="card-actions justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-80 max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-80 max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Enter a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-80 max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must Be enter 6 characters or Longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorElement}
              <input
                className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
                type="submit"
                value="Register"
              />
            </form>
            <p className="text-xl text-primary text-center">
              <small>
                <Link to="/login">Already Have a Account? please Login</Link>
              </small>
            </p>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary  text-white font-bold text-xxl hover:bg-white hover:text-black"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
