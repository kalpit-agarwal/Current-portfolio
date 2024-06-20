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
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/aboutphoto.jpg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Kalpit agarwal</strong>. I'm originally
              from Udaipur, rajasthan but i am currently pursuing my bachelor's
              degree from LNMIIT, Jaipur. During my time here, I gained valuable
              experience through various workshops and interactions with
              different personalities, which greatly enhanced my work ethic,
              communication skills, and adaptability.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving, I love solving competitive coding
              problems for fun. Despite its challenges, I remained determined
              and forged lasting friendships that supported me throughout this
              interesting journey. Throughout my studies at LNMIIT, I had the
              opportunity to engage in fascinating projects. Notably, I
              contributed to the development of the super coach and BBI api in
              my SDE intership time at Octal IT solution
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
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
                I have become confident using the following technologies:
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
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
