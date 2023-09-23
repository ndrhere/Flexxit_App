import React, { Component, useState } from "react";
import Backgroundimage from "../components/Backgroundimage";
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const [formValues, setFormValues]=useState({
    email:"",
    password:"",
  })
  const handleSignIn=async()=>{
   try{
    const {email,password}=formValues;
    await createUserWithEmailAndPassword(firebaseAuth,email,password);
   }catch(error){
    console.log(error);
   }
  }
  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate ("/")
  });
  return (
    <Container showPassword={showPassword}>
      <Backgroundimage />

      <div className="content">
        <Header login />

        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies,TV Shows and more</h1>
            <h4>Watch anywhere and cancel Anytime</h4>
            <h6>
              ready to Watch ? write your email to create or restart your
              membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="email" name="email" value={formValues.email} onChange={(e)=>setFormValues({
              ...formValues,
              [e.target.name]:e.target.value,
            })}/>
            {
              showPassword && (<input
                type="password"
                placeholder="password"
                name="password"
                value={formValues.password} onChange={(e)=>setFormValues({
                  ...formValues,
                  [e.target.name]:e.target.value,
                })}
              />

              )
            }
            
            {!showPassword &&(<button onClick={()=>setShowPassword(true)}>Get Started</button>)}
            
          </div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
      gap: 1rem;
      height:85vh;
      width:100vw;
      text-align:center;
      @media (min-width:0px)and (max-width:1070px){
            
        width:25vw
      }
      

      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        @media (min-width:0px)and (max-width:1070px){
          text-align:center;
        }
      
        

        h1{
          padding: 0 25rem;
          text-align:center;
          @media (min-width:0px)and (max-width:1070px){ 
            width:10vw;
            text-align:center;
            margin-top:2px;
            
            margin-left:10%;
            margin-right:30%;
            padding-right:600px;
            
            
          }
        }
        h4{
          @media (min-width:0px)and (max-width:1070px){
            display:none;
          }
        }
        h6{
          @media (min-width:0px)and (max-width:1070px){
           width:100%; 
            padding-left:400px;
            padding-right:183px;
            margin-left:35px;
          }
        }
        
        
      }
      .form{
        display:grid;
        grid-template-columns:${({showPassword})=>showPassword ?"1fr 1fr":"2fr 1fr"};
        width:60%;
        @media (min-width:0px)and (max-width:1070px){
          width:100%;
         
        }
        input{
          color:black;
          border:none;
          padding:1.5rem;
          font-size:1.2rem;
          border:1px solid black;
          &:focus{
            outline:none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
          
        }
        
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
    
  }
`;
