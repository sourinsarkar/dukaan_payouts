import HeaderBtnComponent from "./HeaderBtnComponent";

const HeaderComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-between">
            {/* Page Tag */}
            <div className="w-full flex items-center">
                <h3>Payments</h3>
                <div className="flex items-center">
                    <img src="/images/HelpIcon.svg" alt="Help" />
                    How it works
                </div> 
            </div>

            {/* Search bar */}
            <div className="w-full flex items-center bg-xlight-gray px-4 py-[0.5625rem] rounded-[0.375rem] gap-2">
                <img src="/images/SearchIcon.svg" alt="Search" /> <span><input type="search" placeholder="Search features, tutorials, etc." className="bg-transparent placeholder-[#808080]"/></span>
            </div>

            {/* Header Buttons */}
            <div className="w-full flex items-center justify-end">
                <div className="flex items-center gap-3">
                    <HeaderBtnComponent image="/images/AnnouncementIcon.svg" rel="Announcement" />
                    <HeaderBtnComponent image="/images/DropDownIcon.svg" rel="Announcement" />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent