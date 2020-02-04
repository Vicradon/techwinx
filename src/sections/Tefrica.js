import React from 'react';
import PostCard from '../components/PostCard';
import PostCarousel from '../components/PostCarousel';
import { Button } from 'reactstrap';

const Tefrica = () => {
   return (
    <section className="section">
      <style>
        {`
          
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><span aria-label = "jsx-a11y" role = "img">🌍</span> Tefrica</h3>
        <PostCarousel>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard />
        </PostCarousel>
        <p className = "center mt-3"><Button outline color = "primary">All Tefrica posts</Button></p>
      </div>
    </section>
  )
}

export default Tefrica;