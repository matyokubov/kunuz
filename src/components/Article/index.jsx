import { useParams } from "react-router-dom";
import { data } from "../../mock";

const Article = () => {
    const params = useParams()
    const text = data[params.index].article

    return (
        <div className="container">
            {text}
        </div>
    )
}

export default Article;