import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Nav from './components/Nav'
import SingleArticlePage from './components/SingleArticlePage';
import TopicPage from './components/TopicPage';
import TopicArticlesPage from './components/TopicArticles';
import Error from './components/Error'

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
   <Route path='/*' element={<Error message='Route not found'/>}/>

   </Routes>

    </BrowserRouter>
    
    </>
     
  )
}

export default App
