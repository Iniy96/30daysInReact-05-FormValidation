import React from "react";
import { useFormik } from "formik";
import { signUpSigma } from "./schema";

const initialValues = {
    name:"",
    email:"",
    password:"",
    confirmPassword:""
}

export const Form = () => {

   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSigma,
        onSubmit : (values,action)=>{
                console.log(values)
                action.resetForm()
        }
    })

  return (
    <div className="container container-lg mt-5 border bg-secondary-subtle py-4" style={{maxWidth:"350px",borderRadius:"10px"}}>
    <h3 className="text-center text-muted mb-4">Form-Validation</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className=" input-group-prepend" >
          <span className="input-group-text" style={{height:"40px"}}>
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
        
          name="name"
          className="form-control "
          placeholder="Full name"
          type="text"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
        {errors.name && touched.name ? <p className="text-start text-danger opacity-75">{errors.name}</p> : null}
      <div className="mt-3 form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{height:"40px"}}>
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          className="form-control"
          placeholder="Email address"
          type="email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
        {errors.email && touched.email ?<p className="text-start text-danger opacity-75">{errors.email}</p>:null}
      
      
      <div className="mt-3 form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{height:"40px"}}>
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          placeholder="Create password"
          type="password"
          autoComplete="off"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
        {errors.password && touched.password?<p className="text-start text-danger opacity-75">{errors.password}</p>:null}

      <div className=" mt-3 form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{height:"40px"}}>
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          className="form-control"
          placeholder="Repeat password"
          type="password"
          autoComplete="off"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur} 
        />
      </div>
        {errors.confirmPassword && touched.confirmPassword ? <p className="text-start text-danger opacity-75">{errors.confirmPassword}</p>:null}
      <div className="mt-5 form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Create Account
        </button>
      </div>
      
    </form></div>
  );
};
