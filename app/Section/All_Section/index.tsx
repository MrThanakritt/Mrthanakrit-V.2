import LeftSection from "../Left_Section"
import RightSection from "../Right_Section"

const AllSection = () => {
    return (
        <>
            <div className="mt-14 mx-auto max-w-6xl grid grid-cols-2 gap-y-5 lg:grid-cols-[40%_60%] ">
                <LeftSection />
                <RightSection />
            </div>
        </>
    )
}

export default AllSection;