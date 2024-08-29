import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/16/solid/index.js";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const Links = [
        {name: "Home", link: "/"},
        {name: "Services", link: "/services"},
        {name: "About", link: "/about"},
        {name: "Contact", link: "/contact"},
    ];

    return (
        <div
            className="relative isolate overflow-hidden py-3">
            <img src="src/assets/images/hero-bg.png" alt=""
                 className="absolute inset-0 -z-10 w-full object-cover h-[600px] md:h-[700px] lg:h-screen object-center md:object-right lg:object-center opacity-85"/>

            <div className="mx-auto max-w-7xl px-4  md:px-10 min-h-[600px] md:min-h-[750px] lg:min-h-[1000px]">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold text-2xl lg:text-4xl text-[#ffffff] uppercase">Logo</span>
                    </div>
                    <div onClick={() => setOpen(!open)}
                         className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white'>
                        {open ? <XMarkIcon/> : <Bars3BottomRightIcon/>}
                    </div>

                    <ul className="hidden md:flex items-center justify-center gap-10 mt-4">
                        {Links.map((link) => (
                            <li key={link.name} className='font-semibold'>
                                <a href={link.link} className='text-white'>{link.name}</a>
                            </li>
                        ))}
                        <motion.div
                            whileHover={{scale: 1.1}}
                            className="flex justify-center border-2 border-dashed rounded-lg border-white cursor-pointer py-1.5 px-5"
                            onClick={() => navigate('/login')}
                        >
                            <span className="text-sm md:text-md font-bold text-white">Login</span>
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
                        <span className="text-sm text-white">Login</span>
                    </div>
                </motion.ul>

                <div
                    className="text-start text-white mt-10 md:mt-0 m-auto h-[300px] md:h-[500px] lg:h-[600px] items-center flex">
                    <div className=" justify-start max-w-2xl flex-col ">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider space-y-32 mb-8 md:mb-10">We
                            provide
                            best <br/>
                            healthcare</h1>
                        <p className="my-4 text-sm md:text-md lg:text-lg">We provide the best services to help you
                            succeed. Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
                            Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto
                            veritatis delectus repellat modi impedit sequi.</p>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            className=" bg-white rounded-md text-[#62d2a2] py-1 px-4 md:py-1.5 md:px-5 mt-5"
                            onClick={() => navigate('/login')}
                        >
                            <span className="text-sm md:text-lg">Read More</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}