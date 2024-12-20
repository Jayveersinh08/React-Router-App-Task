import react from 'react';
import './App.css';
import './Components/Navbar.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Blogs from './Components/Blogs.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.jsx';
import Notfound from './Notfound.jsx';
import Protected from './Protected.jsx';
import Login from './Components/Login.jsx';
import Personal_blog from './Pages/Personal_blog.jsx';
import Marketing_blog from './Pages/Marketing_blog.jsx';
import Food_blog from './Pages/Food_blog.jsx';
import Travel_blog from './Pages/Travel_blog.jsx';
import Health_blog from './Pages/Health_blog.jsx';
import Fashion_blog from './Pages/Fashion_blog.jsx';
import FoodPost from './Posts/FoodPost.jsx';
import PersonalPost from './Posts/PersonalPost.jsx';
import MarketingPost from './Posts/MarketingPost.jsx';
import TravelPost from './Posts/TravelPost.jsx';
import FashionPost from './Posts/FashionPost.jsx';
import HealthPost from './Posts/HealthPost.jsx';
import { AuthProvider } from './AuthContext.jsx';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/Blogs' Component={Blogs}></Route>
            <Route path='/Blogs/personal_blog' element={<Personal_blog />}></Route>
            <Route path='/Blogs/personal_blog/:postId' element={<PersonalPost />}></Route>
            <Route path='/Blogs/marketing_blog' Component={Marketing_blog}></Route>
            <Route path='/Blogs/marketing_blog/:postId' Component={MarketingPost}></Route>
            <Route path='/Blogs/food_blog/' Component={Food_blog}></Route>
            <Route path='/Blogs/food_blog/:postId' Component={FoodPost}></Route>
            <Route path='/Blogs/travel_blog' Component={Travel_blog}></Route>
            <Route path='/Blogs/travel_blog/:postId' Component={TravelPost}></Route>
            <Route path='/Blogs/health&fitness_blog' Component={Health_blog}></Route>
            <Route path='/Blogs/health&fitness_blog/:postId' Component={HealthPost}></Route>
            <Route path='/Blogs/fashion_blog' Component={Fashion_blog}></Route>
            <Route path='/Blogs/fashion_blog/:postId' Component={FashionPost}></Route>
            <Route path='/About' Component={About}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='*' element={<Notfound />}></Route>
            <Route path='/protected' element={
              <Protected >
                <Protected />
              </Protected>}></Route>
          </Routes>
        </Router>
      </AuthProvider>

    </>
  )
}

export default App
