interface Props {
    image: string,
    rel: string,
}

const HeaderBtnComponent: React.FC<Props> = ({ image, rel }) => {
    return (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6E6E6]">
            <img src={image} rel={rel}/>
        </div>
    )
}

export default HeaderBtnComponent