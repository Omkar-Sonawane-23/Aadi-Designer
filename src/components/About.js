import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import pic from './pic.png';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-8 m-10 md:m-0">
        <div className="mb-8 md:mb-0">
          <img
            src={pic}
            alt="Aaditya Suryavanshi"
            className="rounded-full border-4 border-yellow-500 h-50 w-50 md:h-48 md:w-48 object-cover"
          />
        </div>
        <div className="text-center md:text-left sm:w-[60rem]">
          <h2 className="text-4xl font-extrabold mb-4 text-yellow-500">About Me</h2>
          <p className="text-lg mb-4">
          I am a passionate graphic designer with over 2 years of experience and a portfolio featuring 50+ successful freelance projects. Currently pursuing B.Tech in Computer Engineering

Specializing in Brand Identity Designs
          </p>
          <p className="text-lg">
          I turn ideas into captivating visuals-Thumbnails, Posters, and Social Media Posts, Proficient in Photoshop, Illustrator, Figma, Canva, and more, I blend technical expertise with creative vision.

I'm not just a designer; I'm your creative partner. Committed to exceeding expectations, I adapt swiftly to ensure your vision comes to life seamlessly.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter className="text-3xl mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin className="text-3xl mx-2" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram className="text-3xl mx-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
