import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/16/solid/index.js";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const Links = [
        {name: "HOME", link: "/"},
        {name: "SERVICE", link: "/service"},
        {name: "ABOUT", link: "/about"},
        {name: "CONTACT", link: "/contact"},
    ];

    return (
        <div
            className="relative isolate overflow-hidden py-5 sm:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-screen">
            <img src="src/assets/images/hero-bg.png" alt=""
                 className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-right lg:object-center opacity-85"/>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 min-h-[600px] md:min-h-[750px] lg:min-h-[1000px]">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold text-2xl lg:text-4xl text-[#ffffff] uppercase">Logo</span>
                    </div>
                    <div onClick={() => setOpen(!open)}
                         className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white'>
                        {open ? <XMarkIcon/> : <Bars3BottomRightIcon/>}
                    </div>

                    <ul className="hidden md:flex items-center justify-center space-x-10 mt-4">
                        {Links.map((link) => (
                            <li key={link.name} className='font-semibold'>
                                <a href={link.link} className='text-white'>{link.name}</a>
                            </li>
                        ))}
                        <motion.div
                            whileHover={{scale: 1.1}}
                            className="flex justify-center border-2 border-dashed rounded-lg border-white py-[10px] px-[30px]"
                            onClick={() => navigate('/login')}
                        >
                            <span className="text-md text-white uppercase">Login</span>
                        </motion.div>
                    </ul>
                </div>

                <motion.ul
                    initial={{height: 0}}
                    animate={{height: open ? 'auto' : 0}}
                    transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 150,
                        damping: 20,
                        ease: 'easeInOut'
                    }}
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out w-full p-2 mt-2`}>
                    {Links.map((link) => (
                        <li key={link.name} className='font-semibold'>
                            <a href={link.link} className='text-white'>{link.name}</a>
                        </li>
                    ))}
                    <div onClick={() => navigate('/login')}>
                        <span className="text-md text-white uppercase">Login</span>
                    </div>
                </motion.ul>

                <div
                    className="text-start text-white mt-20 lg:mt-40 m-auto h-[300px] md:h-[500px] lg:h-[600px] items-center flex">
                    <div className=" justify-start flex-col max-w-7xl">
                        <h1 className="text-3xl lg:text-6xl font-bold uppercase tracking-wider space-y-10 mb-8 md:mb-14 lg:mb-20">We
                            provide
                            best <br/>
                            healthcare</h1>
                        <p className="mt-4 text-lg">We provide the best services to help you succeed.</p>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            className="border-2 bg-white rounded-lg text-[#62d2a2] py-[10px] px-[30px] mt-5"
                            onClick={() => navigate('/login')}
                        >
                            <span className="text-md uppercase">Read More</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}