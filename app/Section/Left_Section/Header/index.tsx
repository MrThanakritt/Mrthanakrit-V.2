const Header = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="text-3xl text-purple-400 font-semibold">
                Thanakrit Charoenchinnapat
            </div>
            <div className="flex items-center gap-2">
                <div className="text-2xl text-green-700 font-semibold">Student  -  Taweethapisek</div>
                <a href="https://taweethapisek.ac.th/2022/" target="_blank" rel="noopener noreferrer">
                    <img src="/tp_logo.png" alt="School Logo" className="w-10 h-10" />
                </a>
            </div>
            <div className="text-base font-medium text-gray-300 w-4/5">
                การที่โลกเราพัฒนามากยิ่งขึ้น นั่นหมายความว่าเทคโนโลยีพัฒนามากขึ้น และเป้าหมายของผมคือการเป็นส่วนหนึ่งในการพัฒนาความก้าวหน้าของโลก
            </div>
        </div>
    );
};

export default Header;
