import { HiEye } from "react-icons/hi";
import { BsEnvelope } from 'react-icons/bs';
import { FiShieldOff } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import Image from "next/image";
import { useState } from "react";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl m-12">
        {/* Top Section for mobile device only */}
        <div className="w-full md:hidden">
          <Image
            src="/images/admin/admin-login.png"
            alt="Admin Image"
            width={600}
            height={600}
            objectFit="cover"
          />
        </div>
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-2">Login to your account</h1>
          <p className="text-gray-500 mb-6">Welcome back!</p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Username"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute top-2 left-2">
              <BsEnvelope className="text-gray-400" size={24} />
            </div>
          </div>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute top-2 left-2">
              <FiShieldOff className="text-gray-400" size={24} />
            </div>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <HiEye className="text-gray-400" size={20} />
              ) : (
                <BsEyeSlash className="text-gray-400" size={20} />
              )}
            </div>
          </div>
          <button className="bg-primary text-white py-2 px-5 rounded-lg hover:bg-primary transition-colors">
            Login
          </button>
        </div>
        {/* Right Section */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/images/admin/admin-login.png"
            alt="Admin Image"
            width={600}
            height={600}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
