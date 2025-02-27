"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// โลโก้ที่ใช้ในแอนิเมชัน
const scrollLogos = [
    "/html_logo.png",
    "/css_logo.png",
    "/tailwind_logo.png",
    "/js_logo.png",
    "/ts_logo.png",
    "/react_logo.png",
    "/nextjs_logo.png",
    "/vue_logo.png",
    "/vite_logo.png",
    "/flutter_logo.png",
];

const Profile: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-44 sm:h-44 flex justify-center items-center mb-3 " id="Profile-section">
                <img src="/my_profile.jpg" alt="" className="w-full h-full object-cover rounded-full ring-4 ring-white ring-opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:ring-8 hover:ring-pink-500 hover:scale-110 hover:shadow-2xl"
                />
            </div>

            {/* Profile Name */}
            <div className="text-center">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    นาย ธนกฤต เจริญชินภัทร
                </h1>
            </div>

            {/* Profile Bio */}
            <div className="text-center max-w-sm sm:text-base text-gray-600 dark:text-gray-300">
                "The best or nothing" <br />
                <p>"ถ้าไม่ทำให้ดีที่สุดก็อย่าทำเลยดีกว่า"</p>
            </div>

            {/* Infinite Scroll Animation with Logos */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] overflow-hidden py-2 rounded-lg">
                <motion.div
                    className="flex space-x-10 justify-center whitespace-nowrap"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                    }}
                >
                    {[...scrollLogos, ...scrollLogos, ...scrollLogos, ...scrollLogos].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Logo ${index}`}
                            width={50}
                            height={50}
                            unoptimized={true}
                            className="h-12 w-12 object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
