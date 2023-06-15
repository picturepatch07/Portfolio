import React from "react";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import colorSharp from "../assets/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skill.css";

function Skill() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h1>Skills</h1>
                <p>
                  Highly proficient in technologies such as HTML5, CSS and
                  JavaScript, <br />
                  with expertise in framework like React JS, Bootstrap, Material
                  UI, Tailwind CSS, etc. <br />I have also worked on backend
                  technologies like Node JS, Express JS, MongoDB, etc. <br />
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  arrows={false}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="HTML" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="CSS" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="JS" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="React" />
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Node" />
                    <h5>Node JS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Express" />
                    <h5>Express JS</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="MongoDB" />
                    <h5>MongoDB</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="Background"
        />
      </section>
    </div>
  );
}

export default Skill;
