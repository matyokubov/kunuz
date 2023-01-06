import Article from "./components/Article"
import News from "./components/News"
import { Route, Routes, Navigate } from "react-router-dom"

const Root = () => {
    return (
        <Routes>
            <Route path="/article/:index" element={<Article/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/" element={<Navigate to={"/news"}/>}/>
        </Routes>
    )
}

export default Root;