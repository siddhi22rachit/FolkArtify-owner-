import React from 'react'
import "./singlePage.css";
import Slider from '../../component/slider/Slider';
import Map from '../../component/map/Map';
import { useLoaderData } from 'react-router-dom';
import DOMPurify from "dompurify"

const SinglePage = () => {
  const post = useLoaderData();
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapperPage">
          <Slider images={post.images}/>
          <div className="info">
            <div className="topPage">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="displayAddress">
                  <img src="/pin.png" alt="" />
                  <span>{post.city}</span>
                </div>
                <div className="displayPrice">
                  rs.{post.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div
              className="bottomPage"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="displayFeatures">
        <div className="bottomwrapper">
          <p className="title">General</p>
          <div className="listVertical">
          {/* <div className="displayFeature">
              <img src="/damage.png" alt="" />
              <div className="featureText">
                <span>damage</span>
                <p>refund is possible</p> 
                </div>
            </div> */}
            <div className="displayFeature">
              <img src="/buy.webp" alt="" />
             
              <div className="featureText">
                <span>type</span>
                {post.type === "buy"?(
                <p>BUY</p>
              ):(
                <p>RENT</p>
                )}              </div>
            </div>
            <div className="displayFeature">
              <img src="category.png" alt="" />
              <div className="featureText">
                <span>content</span>
                {post.postDetail.category === "cloths"?(
                <p>CLOTHS</p>
              ):(
                <p>WALL-DECOR</p>
                )}
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/length.png" alt="" />
              <span> {post.postDetail.size}</span>
            </div>
            <div className="feature">
              <img src="/quality.png" alt="" />
              <div className="featureText">
                <span>Quality</span>
                <p>{post.postDetail.quality} </p>
              </div>
            </div>
            {/* <div className="feature">
              <img src="/raw.webp" alt="" />
              <div className="featureText">
                <span>Fbric</span>
                <p>silk</p>
              </div>
            </div> */}
            
          </div>
          {/* <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/raw.webp" alt="" />
              <div className="featureText">
                <span>Fbric</span>
                <p>silk</p>
              </div>
            </div>
            <div className="feature">
              <img src="/quality.png" alt="" />
              <div className="featureText">
                <span>Quality</span>
                <p>A1 </p>
              </div>
            </div>
            <div className="feature">
              <img src="/made-in-india.jpeg" alt="" />
              <div className="featureText">
                <span>Made IN</span>
                <p>INDIA</p>
              </div>
            </div>
          </div> */}
          <p className="title">Location</p>
          { <div className="mapContainer">
            <Map items={[post]} />
          </div> }
          <div className="singleButtons">
            <div className='singleBtn'>
              <img src="/chat.jpeg" alt="" />
              Send a Message
            </div>
            <div className='singleBtn'>
              <img src="/save.png" alt="" />
              Save the Place
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;
