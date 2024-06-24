import React from 'react';
import Card from"../../component/card/Card";
import"./listPage.css"
import { Link, useLoaderData } from 'react-router-dom';

function ListPage ()  {
  const data= useLoaderData();
  return (
    <div className='listPage'>
     <div className="titlelist">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
      <div className="listContainer">
        <div className="wrapperlist">
          {data.map(post =>(
            <Card key={post.id} item ={post}/>
          ))}
        </div>
      </div>
    
    </div>
  )
}

export default ListPage;
