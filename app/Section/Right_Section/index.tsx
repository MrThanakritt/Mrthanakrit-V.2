import Blog from "./Blog";
import Experience from "./Experience";
import Profile from "./Profile";
import Project from "./Project";

const RightSection = () => {
    return (
        <>
            <div className="grid gap-y-5 lg:gap-y-40 px-5">
                <Profile />
                <Project />
                <Experience />
                <Blog />
            </div>
        </>
    )
}

export default RightSection;