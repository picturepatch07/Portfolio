import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Abhishek", "Abhishek", "Abhishek"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="home">
      <div className="about">
        {/* <h2>Hi, My Name is Abhishek</h2> */}
        <h1>
          {`Hi! I'm`}{" "}
          <span
            className="txt-rotate"
            dataPeriod="1000"
            data-rotate='[ "Abhishek", "Abhishek", "Abhishek" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
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
