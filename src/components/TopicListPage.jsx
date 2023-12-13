import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../Utils/getApi';
import FancyBox from './FancyBox';

const TopicListPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
   
    getTopics()
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
           <FancyBox> <Link to={`/topics/${topic.slug}`}>{topic.description} 👉 {topic.slug}</Link></FancyBox>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicListPage;

