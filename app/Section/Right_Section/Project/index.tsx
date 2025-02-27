import { faChrome, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const projects = [
    {
        year: "",
        img: "/personal_port.png",
        title: "Personal Portfolio Website",
        description: "การใช้ Next Js พัฒนาเว็บ Portfolio เพื่อใช้ในการแสดงผลงาน",
        github: "https://github.com/MrThanakritt/Mrthanakrit-V.2",
        youtube: "",
        chrome: "https://mr-thanakrit-portfolio-snowy.vercel.app/",
        techs: [
            { name: "Next Js", color: "text-white group-hover:border-black" },
            { name: "TypeScript", color: "text-white group-hover:border-blue-600" },
            { name: "Tailwind CSS", color: "text-white group-hover:border-blue-500" },
        ],
    },
    {
        year: "",
        img: "/dream_vue.png",
        title: "Dream Record E-Commerce",
        description: "การใช้ Vus Js พัฒนาเว็บ E-Commerce ร้านแผ่นเสียง",
        github: "https://github.com/MrThanakritt/E-Commerce-Vue",
        youtube: "",
        chrome: "https://e-commerce-vue-sandy.vercel.app/",
        techs: [
            { name: "Vue Js", color: "text-white group-hover:border-green-600" },
            { name: "Tailwind CSS", color: "text-white group-hover:border-blue-500" },
            { name: "Daisy UI", color: "text-white group-hover:border-yellow-500" },
        ],
    },
    {
        year: "",
        img: "/shabu_app.png",
        title: "Web Application for Food Ordering",
        description: "การใช้ Vue JS พัฒนาWeb Application ระบบสั่งอาหาร",
        github: "https://github.com/MrThanakritt/Shabu-Web-app",
        youtube: "",
        chrome: "",
        techs: [
            { name: "Vue JS", color: "text-white group-hover:border-green-600" },
            { name: "Tailwind CSS", color: "text-white group-hover:border-blue-500" },
            { name: "Daisy UI", color: "text-white group-hover:border-yellow-500" },
        ],
    },
    {
        year: "",
        img: "/sos_app.png",
        title: "MySOS App",
        description: "การใช้ Flutter พัฒนาแอปพลิเคชั่นให้ข้อมูลติดต่อในเหตุฉุกเฉิน",
        github: "https://github.com/MrThanakritt/MySOS-App",
        youtube: "",
        chrome: "",
        techs: [
            { name: "Dart", color: "text-white group-hover:border-blue-400" },
            { name: "Flutter", color: "text-white group-hover:border-blue-400" },
        ],
    },
    {
        year: "",
        img: "/home_auto_app.png",
        title: "HOME Automation App",
        description: "การใช้ Flutter พัฒนาแอปพลิเคชั่นสำหรับควบคุมระบบต่างๆภายในบ้าน เพื่อนำไปใช้แทน Home Assistant App ในอนาคต",
        github: "https://github.com/MrThanakritt/Home-Automation-App-Flutter",
        youtube: "",
        chrome: "",
        techs: [
            { name: "Dart", color: "text-white group-hover:border-blue-400" },
            { name: "Flutter", color: "text-white group-hover:border-blue-400" },
        ],
    },
    {
        year: "",
        img: "/money_app.png",
        title: "Money Dairy App",
        description: "การใช้ Flutter พัฒนาแอปพลิเคชั่น ทำบัญชีรายรับ-รายจ่าย",
        github: "https://github.com/MrThanakritt/Expense-Flutter-App",
        youtube: "",
        chrome: "",
        techs: [
            { name: "Dart", color: "text-white group-hover:border-blue-400" },
            { name: "Flutter", color: "text-white group-hover:border-blue-400" },
        ],
    },
    {
        year: "",
        img: "/home_ass.png",
        title: "Home Assistant",
        description: "การทำระบบ IOT โดยการใช้ Raspberry Pi5 มาเป็นเครื่องเซิฟเวอร์ เพื่อควบคุมอุปกรณ์ต่างๆภายในบ้านผ่าน Home Assistant",
        github: "",
        youtube: "",
        chrome: "",
        techs: [
            { name: "Raspberry pi 5", color: "text-white group-hover:border-red-500" },
        ],
    },
];

const Project = () => {
    return (
        <div id="Project-section">
            {/* Title */}
            <h2 className="text-2xl font-bold py-1">Project</h2>
            <div className="space-y-6" >
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-[auto_1fr] gap-6 items-start px-5 py-6 rounded-lg transition duration-300 hover:bg-gray-700 group"
                    >
                        {/* Left Section */}
                        <div className="flex flex-col items-center min-w-[10rem]">
                            <div className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white">
                                {project.year}
                            </div>
                            <img src={project.img} className="w-full max-w-[10rem] h-24 rounded-md object-cover" alt="Project" />
                        </div>

                        {/* Right Section */}
                        <div className="flex-grow space-y-3">
                            <h3 className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white">
                                {project.title}
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="w-3 h-3 ml-2 inline-block mt-1 transform transition-all duration-1000 ease-in-out animate-bounce"
                                />
                            </h3>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {project.github &&
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                        />
                                    </a>
                                }
                                {project.youtube &&
                                    <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                        />
                                    </a>
                                }
                                {project.chrome && (
                                    <a href={project.chrome} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon
                                            icon={faChrome}
                                            className="w-8 h-8 text-gray-400 transition duration-200 group-hover:text-white"
                                        />
                                    </a>
                                )}
                            </div>


                            {/* Description */}
                            <p className="text-base text-gray-400 transition duration-300 group-hover:text-gray-200">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-4 text-sm font-medium">
                                {project.techs.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:${tech.color}`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;