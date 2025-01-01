import React from 'react'
import { Link } from 'react-router-dom'
import image01 from "../assets/travel.png"
import image02 from "../assets/marketing.png"
import image03 from "../assets/fashion.png";
import image04 from "../assets/food.png";
import image05 from "../assets/health.png";
const Blogs = () => {
  
  return (
    <>
      <div className=" row  px-5 py-3 d-flex justify-content-around">
        <div class="post col-3 text-center pt-3">
          <img src="https://static.wixstatic.com/media/84770f_231a1c5c6e1d48e5a425809e93319bdc~mv2.jpg/v1/fill/w_726,h_1099,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_231a1c5c6e1d48e5a425809e93319bdc~mv2.jpg"></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">The one thing I would tell to my 16 year old self</p>
            <p class="post-text ">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
            <Link to="/blogs/personal_blog" className="btn btn-outline-dark">Personal Blogs</Link>
          </div>
        </div>
        <div class="post col-3 text-center  pt-3">
          <img src={image02}></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">The Mistake Every Small Business Makes in Its First Year</p>
            <p class="post-text ">Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business.</p>
            <Link to="/blogs/marketing_blog" className="btn btn-outline-dark">Marketing Blogs</Link>
          </div>
        </div>
        <div class="post col-3 text-center pt-3">
          <img src= {image01}></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">Travel Blog • How To Travel The World</p>
            <p class="post-text ">Explore. Dream. Discover. This is a world travel blog about beautiful destinations, with free tips & guides on how to travel the world!</p>
            <Link to="/blogs/travel_blog" className="btn btn-outline-dark">Travel Blogs</Link>
          </div>
        </div>
      </div>
      <div className=" row  px-5 py-3 d-flex justify-content-around">
        <div class="post col-3 text-center pt-3">
          <img src={image03}></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">Best Fashion Blogs, Style Websites, Online Trends</p>
            <p class="post-text ">
              We have curated chic and trendy outfit ideas for all your New Year’s Eve celebrations. From sequined dresses to chic metallic looks, find the perfect party dress for NYE 2025.…</p>
              <Link to="/blogs/fashion_blog" className="btn btn-outline-dark">Fashion Blogs</Link>
              </div>
        </div>
        <div class="post col-3 text-center pt-3">
          <img src={image04}></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">The Ultimate Cooking Recipe You'll Ever Need</p>
            <p class="post-text ">The range of street food has evolved over the years, blending traditional recipes with modern innovations. </p>
            <Link to="/blogs/food_blog" className="btn btn-outline-dark">Food Blogs</Link>
          </div>
        </div>
        <div class="post col-3 text-center pt-3">
          <img src={image05}></img>
          <div class="d-flex-column container justify-conter-center text-left pb-3 px-0">
            <p class="post-title py-2  m-0">Keep Your Body Moving All the fitness tips in one place</p>
            <p class="post-text ">Blogs topics cover ways to live a healthier lifestyle, foods to add to your diet, and more specific information on common health conditions.</p>
            <Link to="/blogs/health&fitness_blog" className="btn btn-outline-dark">Health n Fitness Blogs</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
