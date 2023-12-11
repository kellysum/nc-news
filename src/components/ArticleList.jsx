import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"
import { getArticles } from "../Utils/getApi"


const ArticleList = ()=>{
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getArticles().then((data)=>{
            setArticles(data)
        })
    }, [])

    return (
        <div>
        <h2>All Articles</h2>
        <ul className="article_list">
        {articles.map((article)=>{
            return <ArticleCard article={article} key={article.title}/>
        })}
       
        </ul>
       </div>
    )
}

export default ArticleList
