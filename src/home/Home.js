import React from "react";
import "./Home.css";
import ShowDogs from "../Dog/dog";
import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <body>
        <div className="header">
          <h1>Dog TakeCare Forum</h1><br/>
          <p>We help you and you help us.</p>
        </div>
        <div className="topnav">
          <Navbar />
        </div>

        <div className="about-us">
          <h2>About Us</h2>
            Welcome to Dog Caretaker! We are a passionate team dedicated to providing valuable information and resources
            for dog owners and enthusiasts. Our mission is to promote responsible dog ownership, share tips and advice on
            dog care, and create a community where dog lovers can connect and exchange knowledge.
            <br />
            <br />
            At Dog Caretaker, you'll find a wide range of articles, guides, and resources on various topics such as dog
            training, health and nutrition, grooming, and much more. Whether you're a new dog owner or have years of
            experience, we're here to support you on your journey of being the best dog caretaker.
            <br />
            <br />
            Join our community, explore our content, and feel free to ask any questions or share your experiences. Together,
            let's create a happy and healthy life for our beloved furry friends!
        </div>

        <div className="dogs-list">
          <h2>Breeds</h2>
          <ShowDogs />
        </div>

        <footer></footer>
      </body>
    </div>
  );
};

export default Home;
