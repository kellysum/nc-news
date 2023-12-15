import  { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../Utils/getApi";
import FancyBox from "./FancyBox";
import SortArticles from "./SortArticles";
import { useSearchParams } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        
        const params = Object.fromEntries(searchParams);
        if (params.sortBy) setSortBy(params.sortBy);
        if (params.sortOrder) setSortOrder(params.sortOrder);

        getArticles(params)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
            });
    }, [searchParams]);

    const sortedArticles = articles.slice().sort((a, b) => {
        if (sortBy === "comment_count") {
            return sortOrder === "asc" ? a.comment_count - b.comment_count : b.comment_count - a.comment_count;
        } else if (sortBy === "votes") {
            return sortOrder === "asc" ? a.votes - b.votes : b.votes - a.votes;
        }
        
        return sortOrder === "asc" ? new Date(a.created_at) - new Date(b.created_at) : new Date(b.created_at) - new Date(a.created_at);
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>All Articles</h2>
            <SortArticles sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />

            <ul className="article_list">
                {sortedArticles.map((article) => (
                    <li key={article.article_id}>
                        <FancyBox>
                            <ArticleCard article={article} />
                        </FancyBox>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
