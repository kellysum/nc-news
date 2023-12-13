import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Nav from './components/Nav'
import SingleArticlePage from './components/SingleArticlePage';

import TopicPage from './components/TopicPage';

import TopicArticlesPage from './components/TopicArticles';

function App() {
 

  return (
    <>
    <BrowserRouter>
   <Header/>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/articles/:article_id' element={<SingleArticlePage/>}/>
   <Route path='/topics' element={<TopicPage/>}/>
   <Route path='/topics/:slug' element={<TopicArticlesPage/>}/>

   </Routes>

    </BrowserRouter>
    
    </>
     
  )
}

export default App
