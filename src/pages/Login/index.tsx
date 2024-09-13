import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import clsx from "clsx";
import _ from "lodash";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { truncate } from "fs";
import { Link,Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../assets/images/pages/logo.png'
import TinySlider from "@/components/Base/TinySlider";
import Slide1 from '../../assets/images/pages/Login-slider-img1.png'
import Slide2 from '../../assets/images/pages/Login-slider-img2.png'
import Slide3 from '../../assets/images/pages/Login-slider-img3.png'
import Slide4 from '../../assets/images/pages/Login-slider-img4.png'

function Main() {


  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [otp, setOtp] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/generate-secret/')
      .then(response => {
        console.log(response)
        setSecret(response.data.secret);
        setQrCode(`otpauth://totp/YourAppName?secret=${response.data.secret}`);
      })
      .catch(err => console.error(err));
  }, []);

  const handleLogin = async () => {
    try {
      if (1) { // Replace with actual login check condition
        const response = await axios.get(`http://127.0.0.1:8000/api/generate-secret/?email=${username}`);
        const secret = response.data.secret;
        setSecret(secret);
        setQrCode(`otpauth://totp/MNS?secret=${secret}&issuer=${username}`);
        setShowQrCode(true); // Show OTP input if login is successful
      } else {
        // Handle login failure
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/verify-microsoftotp/', { token: otp, secret: secret });
      if (response.data.success) {
        // Handle successful verification
        console.log('OTP Verified');
        navigate("/");
      }
    } catch (error) {
      setError('Invalid OTP. Please try again.');
    }
  };



  return (
    <>
      <div className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24">
        <div
          className={clsx([
            "relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0",
            "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5",
          ])}
        >
          <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
            <div className="border-bottom pb-5">
              <Link to="/">
                <img src={Logo} alt="MNS_Logo" width={172} height={96} className="img-fluid m-auto pb-3" />
              </Link>
            </div>

            {showQrCode ? (
              <div>
                 {qrCode && <QRCode value={qrCode} />}
                <input
                  type="text"
                  placeholder="Enter OTP from Microsoft Authenticator"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button onClick={handleSubmit}>Verify OTP</button>
              </div>
            ) : (
              <div className="mt-10">
                <div className="text-2xl font-medium">Sign In</div>
                <div className="mt-2.5 text-slate-600">
                  Secure Access to Your Account Easily!
                </div>
               
                <div className="mt-6">
                  <FormLabel>User Name</FormLabel>
                  <FormInput
                    type="text"
                    className="px-4 py-3.5 rounded-[0.6rem] border-color"
                    placeholder={users.fakeUsers()[0].email}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FormLabel className="mt-4">Password</FormLabel>
                  <FormInput
                    type="password"
                    className="px-4 py-3.5 rounded-[0.6rem] border-color"
                    placeholder="************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                    <div className="flex items-center mr-auto">
                      <FormCheck.Input
                        id="remember-me"
                        type="checkbox"
                        className="mr-2.5 border"
                      />
                      <label
                        className="cursor-pointer select-none"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <Button
                      //variant="success"
                      rounded
                      className="w-full py-3.5 xl:mr-3 btn-primary"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="copyright py-3 text-center">
            <p>� 2024 Marks & Spencer plc (UK)</p>
          </div>
        </div>
      </div>
      <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] pl-14">
        <div
          className={clsx([
            "relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20",
            "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
            "before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
          ])}
        ></div>
        <div className="col-span-12 lg:col-span-7 2xl:col-span-8">
          <div className="h-full flex items-center justify-center relative">
            <TinySlider
              options={{
                controls: false,
                items: 1,
                nav: true,
              }}
              className="w-full h-full flex h-full"
            >
              <div className="h-full">
                <img src={Slide1} alt="Slide 1" className="w-full h-full" />
              </div>
              <div className="h-full">
                <img src={Slide2} alt="Slide 2" className="w-full h-full" />
              </div>
              <div className="h-full">
                <img src={Slide3} alt="Slide 3" className="w-full h-full" />
              </div>
              <div className="h-full">
                <img src={Slide4} alt="Slide 4" className="w-full h-full" />
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Main;
