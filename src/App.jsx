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
            <Route path='/' element={<Home />} />
            <Route path='/Blogs' element={<Blogs />} />
            <Route path='/Blogs/personal_blog' element={<Protected><Personal_blog /></Protected>} />
            <Route path='/Blogs/personal_blog/:postId' element={<Protected><PersonalPost /></Protected>} />
            <Route path='/Blogs/marketing_blog' element={<Protected><Marketing_blog /></Protected>} />
            <Route path='/Blogs/marketing_blog/:postId' element={<Protected><MarketingPost /></Protected>} />
            <Route path='/Blogs/food_blog/' element={<Protected><Food_blog /></Protected>} />
            <Route path='/Blogs/food_blog/:postId' element={<Protected><FoodPost /></Protected>} />
            <Route path='/Blogs/travel_blog' element={<Protected><Travel_blog /></Protected>} />
            <Route path='/Blogs/travel_blog/:postId' element={<Protected><TravelPost /></Protected>} />
            <Route path='/Blogs/health&fitness_blog' element={<Protected><Health_blog /></Protected>} />
            <Route path='/Blogs/health&fitness_blog/:postId' element={<Protected><HealthPost /></Protected>} />
            <Route path='/Blogs/fashion_blog' element={<Protected><Fashion_blog /></Protected>} />
            <Route path='/Blogs/fashion_blog/:postId' element={<Protected><FashionPost /></Protected>} />
            <Route path="/superuser" element={<RestrictedSuperuser />} />
            <Route path="/admin" element={<RestrictedAdmin />} />
            <Route path='/About' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Notfound />} />
          </Routes>

        </Router>
      </AuthProvider>

    </>
  )
}

export default App
