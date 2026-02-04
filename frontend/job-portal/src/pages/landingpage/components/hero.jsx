import React from 'react'
import {Search, ArrowRight, Building, Users, ChartSpline} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

export const Hero = () => {
    const isAuthenticated=false;
    const navigate=useNavigate();
    const user = {fullName:"suman", role:"employer"};
const stats =[
    {label:"active-users",icon:Users,value:200+"K",},
    {label:"companies",icon:Building,value:300+"+"},
    {label:"job-posts",icon:ChartSpline,value:1500+"+"},

]
  return (
    <section className='py-20 px-4 relative overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center space-y-8'>
                <motion.h1
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.5}}
                 className='text-4xl md:text-5xl font-bold text-gray-900'>
                    find your dream job or 
                    <span className='text-blue-600 block'>
                        hire talented professionals
                    </span>

                </motion.h1>
                {/*subheading*/}
                <motion.p
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.5}}
                 className='text-lg text-gray-600 max-w-2xl mx-auto'>
                    Join our job portal to explore thousands of job opportunities 
                    or find the perfect candidate
                </motion.p>
                {/*button*/}
                <motion.div 
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.4,duration:0.5}}
                className='flex gap-4 justify-center'>
                    <motion.button
                     whileHover={{scale:1.05}}
                     whileTap={{scale:0.95}}
                     onClick={()=>navigate('/find-jobs')}
                     className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700'>
                        <Search className='w-5 h-5'/>
                        <span>Search Jobs</span>
                        <ArrowRight className='w-5 h-5'/>
                    </motion.button>
                    <motion.button 
                     whileHover={{scale:1.05}}
                     whileTap={{scale:0.95}}
                     className='border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50'
                     onClick={()=> {
                        navigate(isAuthenticated && user?.role==="employer"
                            ?"/employer-dashboard"
                            :"login"
                        );
                    }}>
                        post a job
                
                    </motion.button>
   
                </motion.div>
                {/*stats*/}
                <motion.div
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.6,duration:0.5}}
                className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                    {stats.map((stat,index) => (
                        <motion.div
                        key={index}
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1,y:0}}
                        transition={{delay:0.2*index,duration:0.5}}
                        className='text-center'>
                             <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2'>
                                <stat.icon className='w-6 h-6 text-blue-600'/>
                            </div>
                            <div className='text-2xl font-bold text-gray-900'>
                                {stat.value}
                            </div>
                            <div className='text-gray-600'>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </div>
    </section>
  )
}
export default Hero;