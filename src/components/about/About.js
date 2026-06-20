import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Coding from '../../lottie/coding.json'
import DisplayLottie from '../DisplayLottie'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm <b>Sagar Rathod</b>{' '}
              <span role="img" aria-label="smile">
                😄
              </span>
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I'm a Software Engineer specializing in Frontend and Full Stack
              Development with <b>2+ years of experience</b> building scalable,
              responsive, and user-friendly web applications.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I work primarily with{' '}
              <b>
                React.js, TypeScript, JavaScript, HTML5, CSS3, Node.js,
                Express.js, MongoDB
              </b>
              , and modern web technologies to create high-performance
              applications.
            </p>

            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I have completed my{' '}
              <b>
                Bachelor of Engineering (B.E.) in Electronics and
                Telecommunications
              </b>{' '}
              from <b>JSPM Hadapsar, Pune</b>.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'building scalable applications',
                    'solving complex problems',
                    'fixing challenging bugs',
                    'collaborating with teams',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>

            <p>
              Throughout my professional journey, I have worked with modern
              development practices including RESTful API integration, testing
              with Jest and React Testing Library, debugging production issues
              using Chrome DevTools and AWS CloudWatch, and managing deployments
              through Git/GitHub and AWS CI/CD pipelines.
            </p>

            <p>
              I started my development journey at Masai School and have since
              worked at{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Idexcel
              </Link>{' '}
              and{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Infosys
              </Link>{' '}
              where I collaborated with talented teams and contributed to
              impactful projects.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </Fade>
        {/* <Skills /> */}
        <div className="lottie-icon">
          <DisplayLottie animationData={Coding} />
        </div>
      </div>
    </Section>
  )
}

export default About
