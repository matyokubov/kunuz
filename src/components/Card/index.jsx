import "./index.css"
import { Box } from "./style"

const Card = ({title, description, uploaded, img, type}) => {
    return (
        <Box className="card" type={type}>
            <div className="imgBox">
                <img src={img} alt="curr_img"/>
            </div>
            <div style={type!=="recent" ? {padding: "1rem 0"} : {}}>
                <div>
                    <span>{uploaded}</span>
                </div>
                <div>
                    <h1>
                        {title}
                    </h1>
                </div>
                <p>{description}</p>
            </div>
        </Box>
    )
}

export default Card;