import React, { useState } from 'react';
import './newPost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import UploadWidget from '../../component/uploadWidget/UploadWidget';
import Map from '../../component/map/Map';

function NewPost() {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    try {
      const res = await apiRequest.post('/posts', {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          city: inputs.city,
          type: inputs.type,
          address: inputs.address,
          rate: parseInt(inputs.rate),
          images: images,
          latitude: inputs.latitude,
          longitude: inputs.longitude
        },
        postDetail: {
          desc: value,
          quality: inputs.quality,
          category: inputs.category,
          size: parseInt(inputs.size)
        }
      });
      console.log(res.data);
      navigate('/' + res.data.newPost.id);
    } catch (err) {
      console.log(err);
      setError('Failed to add post. Please try again.');
    }
  };

  return (
    <div className="postPage">
      <div className="formContainer">
        <h1>Add new post</h1>
        <div className="wrapperform">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className="item_description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="rate">Rate</label>
              <input id="rate" name="rate" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="quantity">Quantity</label>
              <input id="quantity" name="quantity" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" required>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="category">Category</label>
              <select name="category" required>
                <option value="cloths">Cloths</option>
                {/* <option value="furniture">Furniture</option> */}
                <option value="wall-decor">Wall Decor</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="quality">Quality</label>
              <input id="quality" name="quality" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="size">Size</label>
              <input id="size" name="size" type="number" required />
            </div>
            <button className="sendButton">Add</button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: 'drvn2upzw',
            uploadPreset: 'e-commerce',
            folder: 'posts'
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPost;
