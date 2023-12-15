import  { useState, useEffect } from "react";
import { getArticles, getTopics } from "../Utils/getApi";
import ArticleCard from "./ArticleCard";
import FancyBox from "./FancyBox";

const TopicArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    getArticles().then((data) => {
   
        setArticles(data);
    });
    getTopics().then((data) => {
        setTopics(data);
    });
  }, []);

  const handleTopicChange = (event) => {
    const selectedTopic = event.target.value
    setSelectedTopic(selectedTopic === "All Articles" ? "" : selectedTopic);
  };

  const filteredArticles = selectedTopic
    ? articles.filter((article) => article.topic === selectedTopic)
    : articles;

    
  return (
    <div>
      <h2>Articles</h2>
      <select value={selectedTopic} onChange={handleTopicChange}>
        <option value="">All Topics</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        ))}
      </select>
      <ul className="topic-article">
      {filteredArticles.map((article)=>{
        return <FancyBox><ArticleCard article={article} key={article.article_id}/></FancyBox>
      })}
        
      </ul>
    </div>
  );
};

export default TopicArticlesPage;