import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {
  const options = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div class="home-container container ">
        <div class="container">
          <p class=" d-flex justify-content-center py-3 m-0" id='home-text'>"Welcome To the World of Memoir."</p>
          <div className="carousel-container">
            <Carousel responsive={options}
              autoPlay={true}
              infinite={true}
              arrows={false}
              autoPlaySpeed={1500}
              swipeable={true}
              transitionDuration={300}>
              <div className="item d-flex-column" >
                <div class="item-text">
                  <h4>Personal</h4>
                  <p class="">A place for people to share their thoughts, experiences, and interests.</p>
                </div>
                <a href='/blogs/personal_blog' class="btn btn-outline-dark">More Blogs</a>
              </div>
              <div className="item d-flex-column" >
                <div class="item-text">
                  <h4>Business Marketing</h4>
                  <p class="">A way for businesses to promote their products or services, educate customers, and provide customer support</p>
                </div>
                <a href='/blogs/marketing_blog' class="btn btn-outline-dark">More Blogs</a>
              </div>
              <div className="item d-flex-column">
                <div class="item-text">
                  <h4>Travel</h4>
                  <p class="">To showcase different cultures, cuisines, and landscapes to inspire readers' wanderlust. </p>
                </div>
                <a href='/blogs/travel_blog' class="btn btn-outline-dark">More Blogs</a>
              </div>
              <div className="item d-flex-column" >
                <div class="item-text">
                  <h4>Foodie</h4>
                  <p class="">A place to share food reviews, compare dishes, write recipes, or introduce new cooking techniques.</p>
                </div>
                <a href='/blogs/food_blog' class="btn btn-outline-dark">More Blogs</a>
              </div>
              <div className="item d-flex-column" >
                <div class="item-text">
                  <h4>Fashion</h4>
                  <p class="">A place to learn about the latest trends, styles, and fashion tips.</p>
                </div>
                <div class="btn btn-outline-dark">More Blogs</div>
              </div>
              <div className="item d-flex-column" >
                <div class="item-text">
                  <h4>Heath & Fitness</h4>
                  <p class="">. With millions of people setting fitness goals yearly, your blog can push them to stay on track. </p>
                </div>
                <a href='/blogs/health&fitness_blog' class="btn btn-outline-dark">More Blogs</a>

              </div>
            </Carousel>;
          </div>
          <div class="d-flex-column text-center">
            <div class="d-flex-column text-center py-3 m-0" id='quote-text'>
              <div>“There’s a lot of information out there for free,</div>
              <div>so you’ve got to figure out what makes</div>
              <div>your information different.”</div>
            </div>
            <a href="/blogs" class="btn btn-primary btn-lg " tabindex="-1" role="button" >Primary link</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
