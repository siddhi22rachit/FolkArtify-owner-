import React from 'react'
import List from "../../component/card/Card";
import "./profilePage.css"
import { useContext } from 'react';
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

function ProfilePage() {
const {updateUser, currentUser}= useContext(AuthContext);
const navigate =useNavigate();

const handleLogout= async()=>{
  try{
    await apiRequest.post("/auth/logout");
    navigate("/");

  }catch(err){
 console.log(err);
 
  }}

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className='titel'>User Information</div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.images } alt="" />
            </span>
            <span>
              Username: <b>{currentUser.name}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
         <List/>
        </div>
      </div>
      </div>
  )
}

export default ProfilePage;
