import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = () => {
  return (
    <div>
      <div className="card"> 
          <div className="top">
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
            <button>Save <Bookmark size={20} /></button>
          </div>
          <div className="center">
            <h2>Amazon</h2><span>5 days ago</span>
            <h3>Senior Software Engineer</h3>
            <div>
              <h4>Part time</h4>
              <h4>Senior level</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <p>$15k - $20k</p>
              <h3>Location</h3>
            </div>
            <div>
              <button>Apply Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
