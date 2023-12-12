import {useState, useEffect} from "react"
import ArticleCard from "./ArticleCard"
import { getArticles } from "../Utils/getApi"
import {Link} from 'react-router-dom'


const ArticleList = ()=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        getArticles().then((data)=>{
           setArticles(data)
           setLoading(false)
        })
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>All Articles</h2>
            <ul className="article_list">
            {articles.map((article) => (
                    <li key={article.article_id}>
                        <ArticleCard article={article} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList
