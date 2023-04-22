import React from 'react'
import { useNavigate } from 'react-router-dom';
import Landing from "../img/landing.png";



function Home() {

const navigate = useNavigate()

function viewPost() {
 navigate("/allposts");
}
  return (
    <div className='home'>
      <div className='but'>
        <div className='land'>
            <img src={Landing} alt="landingpage"/>
            {/* <button onClick={viewPost}>Here!</button> */}
        </div>
        
        
      </div>
    </div>
  )
}

export default Home