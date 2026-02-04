import React from 'react'
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

const Header = () => {
  const isAuthenticated = false;
  const user = { fullName:"suman", role: "employer" };
  const navigate = useNavigate();
  return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/*logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <Briefcase size={40} color="#2563EB" />
              <span className="text-2xl font-bold text-gray-800">Job Portal</span>
            </div>
            
            {/*nav  */}
            <div className="flex items-center gap-6">
              <a onClick={()=> navigate("/find-jobs")} className="text-gray-600 hover:text-blue-600 cursor-pointer">Find Jobs</a>
              <a onClick={()=>{
                navigate(
                  isAuthenticated && user?.role ==="employer" ? "/employer-dashboard" : "/login");
              }} className="text-gray-600 hover:text-blue-600 cursor-pointer">For Employers</a>
              
              {/* authentication  */}
              <nav className="flex items-center gap-4">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">Welcome, {user?.fullName}</span>
                    <a 
                      href={user?.role==="employer" 
                        ?"/employer-dashboard"
                        :"/find-jobs"
                      } 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Dashboard
                    </a>
                  </div>
                ) : (
                  <>
                    <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
                    <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</a>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}
export default Header;
