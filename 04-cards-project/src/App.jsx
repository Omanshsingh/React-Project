import './App.css'
import Card from './components/Card.jsx';



const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 40,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.facebook.com/images/fb_icon_325x325.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 55,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 80,
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 42,
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Test Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: 50,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: 38,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "3 months ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: 65,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
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
      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Card key={idx} brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} /> 

        </div>})}
      
    </div>

  )
}

export default App
