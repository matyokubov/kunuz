import { data } from "../../mock"
import Card from "../Card"
import { NavLink } from "react-router-dom"
import "./index.css"

const News = () => {
    return (
        <div className="container">
            <NavLink to={`/article/0`}>
                <Card title={data[0].title} description={data[0].description} uploaded={data[0].uploaded} img={data[0].img}/>
            </NavLink>
            <div className="recent">
                {
                    data.slice(1, data.length).map((value, key) => (
                        <div key={key}>
                            <NavLink to={`/article/${key}`}>
                                <Card title={value.title} uploaded={data[0].uploaded} img={value.img} type={"recent"}/>
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News;