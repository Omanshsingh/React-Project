import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';
import React from 'react'
import User from './components/User.jsx';


const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 40,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 55,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 80,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 42,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Test Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 50,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 38,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 months ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 65,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "Business Analyst",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: 35,
    location: "Remote"
  }
];


const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return <h1>{elem.pay}</h1>; 
})}
      
    </div>

  )
}

export default App
