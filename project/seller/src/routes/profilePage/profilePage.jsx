import React, { useContext, useEffect, useState } from 'react';
import List from "../../component/card/Card";
import "./profilePage.css";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, Link,useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

function ProfilePage() {
  const data=useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className='title'>User Information</div>
          <div className="info">
            <span>
              <img src={currentUser.avatar} alt="Profile" />
            </span>
            <span>Username: <b>{currentUser.name}</b></span>
            <span>E-mail: <b>{currentUser.email}</b></span>
            <span>phone: <b>{currentUser.phone}</b></span>

            <div>
              <Link to="/profile/update"><button className="update-btn" >Update</button></Link>
              
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
