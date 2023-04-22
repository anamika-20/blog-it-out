import React from 'react';
import {Link ,useLocation} from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from 'react';
// import {db} from "../db.js";
//import tictac from "C:/Users/anami/OneDrive/Desktop/blog-it-out/client/src/uploads/1681752230077yo.png"

const AllPosts = () => {
  const [posts,setPosts] =useState( [] )

  const cat = useLocation().search
  console.log(cat)

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res= await axios.get(`/api/posts?cat=${cat.substring(1)}`);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[cat]);

  // const getText = (html)=>{
  //   const doc =new DOMParser().parseFromString(html,"text/html")
  //   return doc.body.textContent
  // }

  // function viewPost2() {
  //   navigate(`/post/${post.id}`)
  //  }

  return (
    <div className="allposts">
      <div className="posts">
        {posts.map((post)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`/uploads/${post.img}`} alt=""/>
            </div>
            <div className="content">
            <h1>{post.title}</h1>
            <p><div dangerouslySetInnerHTML={{ __html: post.desc.substring(0,200) }} /></p>
              {/* <p>{getText(post.desc)}</p> */}
              <div>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More...</button>
              </Link>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllPosts