import React from 'react'
import AuthButton from '../../component/Auth/authButton/AuthButton'
import AuthInput from '../../component/Auth/authInput/AuthInput'
import Authmenu from '../../component/Auth/authNavMenu/Authmenu'
import GoogleIcon from "@mui/icons-material/Google";
import { TextButton } from '../register/Register'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="registerContainer">
      <div className="registerBox">
      <Link to={"/"}>
        <TextButton.Provider value={"ثبت نام"}>
          <Authmenu />
        </TextButton.Provider>
      </Link>        
        <div className="mainbox">
          <div className="inputBox">
                       <AuthInput textLabelInput="ایمیل" width={"560px"}  typeInput="email"/>
                         <AuthInput textLabelInput="گذرواژه " width={"560px"} typeInput="password" isPassword={true}  />
                        
            <div className="registerButtonBox">
              <div className="btnsBox">
                <Link to={"/"}>
                <TextButton.Provider value={"ورود"}>
                  <AuthButton widthValue={"66px"} bgcolor="#0A65CD"/>
                </TextButton.Provider>
                </Link>
                <button className="googleButton">
                  <span>حساب گوگل </span> <GoogleIcon className="googleIcon" />
                </button>
              </div>
              <Link to={"/forgetPassword"}>
                <div>
                     <span>گذرواژه خود را فراموش کرده‌اید؟</span>
                 </div>
             </Link>
            </div>
          </div>
          <div className="imgBox">
            <img src="/img/login.svg" alt="registerFrame" />
            <img src="/img/businessesIcon.png" alt="businessesIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}
