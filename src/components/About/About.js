import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInRight">
            <Image src="/aboutphoto.jpg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Kalpit agarwal</strong>. I am originally
              from Udaipur, Rajasthan, but I am currently pursuing my bachelor's
              degree at LNMIIT, Jaipur. During my time here, I have gained
              valuable experience through various workshops and interactions
              with different personalities. These experiences have greatly
              enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Exploring and working on diverse projects has been an incredibly
              rewarding and unique experience for me. I am eager to continue
              delving into exciting future projects, particularly in the fields
              of web development and cross-platform mobile development.
              Additionally, I am currently striving to understand the world of
              AI and machine learning, which further enhances my enthusiasm for
              technology. These areas captivate me, and I am committed to
              continually enhancing my skills and knowledge to stay at the
              forefront of innovation.
              <br />
              <br />
              Here are my competitive coding profiles:
              <br />
              <a
                style={{ color: "white", backgroundColor: "black" }}
                href="https://codeforces.com/profile/thunder_fart"
                target="_blank"
                rel="noreferrer"
              >
                Codeforces
              </a>
              <br />
              <a
                style={{ color: "white", backgroundColor: "black" }}
                href="https://leetcode.com/u/kalpit0605/"
                target="_blank"
                rel="noreferrer"
              >
                Leetcode
              </a>
              <div className="tagline2">
                <strong>
                  I have become confident using the following technologies:
                </strong>
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>

            <br />
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              <strong style={{ fontSize: "30px" }}>Work Experience </strong>
              <br />
              <strong>Octal IT Solution</strong> -{" "}
              <i>Software Development Intern</i>
              <br />
              <br />
              I am currently working on the development of the Super Coach and
              BBI API within the MERN stack team. I have successfully converted
              the entire codebase from the designer team into JSX and React
              components. Additionally, I created APIs for coach and athlete
              logins and utilized React Hook Form to develop a dynamic form for
              the Super Coach project.
              <br />
            </ScrollAnimation>

            <br />
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              <strong style={{ fontSize: "30px" }}>Education</strong>
              <br />
              <strong>The LNM Institute of Information Technology </strong>{" "}
              <i> 2021 – 2025</i>
              <br />
              B.Tech. in ECE (CGPA - 7.85)
              <br />
              <br />
              <strong>MDS Public School Pratap Nagar, Udaipur, RAJ</strong>{" "}
              <i> 2021</i>
              <br />
              12th (CBSE) (95.2%)
              <br />
              <br />
              <strong>ST. Gregorios Sr. Sec. School, Udaipur, RAJ</strong>{" "}
              <i> 2019</i>
              <br />
              10th (CBSE) (94.4%)
              <br />
              <br />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
