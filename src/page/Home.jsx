import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Abhishek</h2>
        <div className="prompt">
          <p>
            I am a dedicated and enthusiastic third-year undergraduate student
            with a passion for learning and creating.
          </p>
          <a href="https://www.linkedin.com/in/abhishek-anand-284a9520a/">
            <LinkedIn />
          </a>
          <Email />
          <a href="https://github.com/picturepatch07">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              React.js, Vue.js, HTML, CSS, React Native, NPM, Bootstrap,
              MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Java, C++, C, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
