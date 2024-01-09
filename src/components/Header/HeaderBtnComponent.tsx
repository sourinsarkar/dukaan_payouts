interface Props {
    image: string,
    rel: string,
}

const HeaderBtnComponent: React.FC<Props> = ({ image, rel }) => {
    return (
        <div>
            <img src={image} rel={rel}/>
        </div>
    )
}

export default HeaderBtnComponent