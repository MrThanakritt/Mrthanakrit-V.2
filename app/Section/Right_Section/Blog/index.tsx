import { FC } from "react";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog: FC = () => {
    const blogs = [
        {
            imageSrc: "/medium_logo.jpeg",
            altText: "Fourier Blog Image",
            title: "Fourier อยู่รอบตัวเรา ?",
            description: "",
            techStack: ["Medium", "Blog", "Fourier"],
            medium: "https://medium.com/@thanakritcharoenchinnapat/กรรมการฟูริเยร์อยู่ข้างๆเรา-03f4b69e2642",
        },
        {
            imageSrc: "/medium_logo.jpeg",
            altText: "Flutter Blog Image",
            title: "Flutter มีอะไรดี ?",
            description: "",
            techStack: ["Medium", "Blog", "Flutter"],
            medium: "https://medium.com/@thanakritcharoenchinnapat/flutter-มีอะไรดี-bc74a116c53c",
        },
        {
            imageSrc: "/medium_logo.jpeg",
            altText: "Flutter Blog Image",
            title: "Blockchain คืออะไร ?",
            description: "",
            techStack: ["Medium", "Blog", "Flutter"],
            medium: "https://medium.com/@thanakritcharoenchinnapat/flutter-มีอะไรดี-bc74a116c53c",
        }
    ];

    return (
        <div id="Blog-section">
            <h2 className="text-2xl font-bold py-1">Blog</h2>
            {blogs.map((blog, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr] gap-x-6 items-start px-3 py-7 rounded-md transition duration-300 hover:bg-gray-700 group">
                    <div className="w-full max-w-[9rem] h-24 overflow-hidden rounded-md">
                        <img src={blog.imageSrc} alt={blog.altText} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold transition duration-300 text-gray-400 group-hover:text-white">
                            {blog.title}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 ml-2 inline-block -mt-1 transform transition-all duration-300 ease-in-out" />
                        </h3>

                        <div className="flex gap-3">
                            {blog.medium && (
                                <a href={blog.medium} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                    />
                                </a>
                            )}
                        </div>

                        <p className="text-sm text-gray-400 transition duration-300 group-hover:text-gray-200">
                            {blog.description}
                        </p>

                        <div className="flex gap-3 text-sm font-medium flex-wrap">
                            {blog.techStack.map((tech, index) => (
                                <span key={index} className="px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:text-white group-hover:border-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
