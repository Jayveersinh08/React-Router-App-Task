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
import Login from './Components//Login.jsx';
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
import RestrictedAdmin from './Pages/RestrictedAdmin.jsx';
import RestrictedSuperuser from './Pages/RestrictedSuperuser.jsx';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Blogs' element={<Blogs/>}></Route>
            <Route path='/Blogs/personal_blog' element={<Personal_blog />}></Route>
            <Route path='/Blogs/personal_blog/:postId' element={<PersonalPost />}></Route>
            <Route path='/Blogs/marketing_blog' element={<Marketing_blog/>}></Route>
            <Route path='/Blogs/marketing_blog/:postId' element={<MarketingPost/>}></Route>
            <Route path='/Blogs/food_blog/' element={<Food_blog/>}></Route>
            <Route path='/Blogs/food_blog/:postId' element={<FoodPost/>}></Route>
            <Route path='/Blogs/travel_blog' element={<Travel_blog/>}></Route>
            <Route path='/Blogs/travel_blog/:postId' element={<TravelPost/>}></Route>
            <Route path='/Blogs/health&fitness_blog' element={<Health_blog/>}></Route>
            <Route path='/Blogs/health&fitness_blog/:postId' element={<HealthPost/>}></Route>
            <Route path='/Blogs/fashion_blog' element={<Fashion_blog/>}></Route>
            <Route path='/Blogs/fashion_blog/:postId' element={<FashionPost/>}></Route>
            <Route path="/superuser" element={<RestrictedSuperuser/>}></Route>
            <Route path="/admin" element={<RestrictedAdmin/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
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
