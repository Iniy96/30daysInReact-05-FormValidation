import * as Yup from "yup"

export const signUpSigma = Yup.object({
    name: Yup.string().min(3).max(25).required("Please Enter ataleast 3 characters"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(8).max(12).required("Please enter your Password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],("Password Must Match"))
})