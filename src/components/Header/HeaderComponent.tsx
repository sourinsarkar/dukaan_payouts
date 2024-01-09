import HeaderBtnComponent from "./HeaderBtnComponent";

const HeaderComponent: React.FC = () => {
    return (
        <div>
            <div>
                Payments<span><img src="/images/HelpIcon.svg" alt="Help" /> <span>How it works</span></span>
            </div>
            <div>
                <img src="/images/SearchIcon.svg" alt="Search" /> <span><input type="search" placeholder="Search features, tutorials, etc." /></span>
            </div>
            <div>
                <div>
                    <HeaderBtnComponent image="/images/AnnouncementIcon.svg" rel="Announcement" />
                    <HeaderBtnComponent image="/images/DropDownIcon.svg" rel="Announcement" />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent