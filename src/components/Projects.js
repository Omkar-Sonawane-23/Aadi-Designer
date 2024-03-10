import React, { useState } from 'react';
import thumb1 from '../assets/thumbnails/thumb1.jpeg';
import thumb2 from '../assets/thumbnails/thumb2.jpeg';
import thumb3 from '../assets/thumbnails/thumb3.jpeg';
import thumb4 from '../assets/thumbnails/thumb4.jpeg';
import thumb5 from '../assets/thumbnails/thumb5.jpeg';
import thumb6 from '../assets/thumbnails/thumb6.jpeg';

import freshflix1 from '../assets/brands/FreshFlix/HorizontalFreshFlixLogo.png';
import freshflix2 from '../assets/brands/FreshFlix/Square FreshFlix Logo.png';

import purepulse1 from '../assets/brands/PurePulse/Horizontal PurePulse Logo.png';
import purepulse2 from '../assets/brands/PurePulse/Square FreshFlix Logo.png';

import urban1 from '../assets/brands/Urban/Delivery Backpack Mockup.jpg';
import urban2 from '../assets/brands/Urban/Sticker Mockup.png';
import urban3 from '../assets/brands/Urban/URBAN BITE CAROUSELArtboard 1@4x-100.jpg';
import urban4 from '../assets/brands/Urban/Us_Business_Card_Mockup_4 6.jpg';

import social1 from '../assets/SocialMedia/Facebook-EventPhoto-Image-1336x700.jpg';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

const projectsData = [
  {
    id: 1,
    category: 'Graphic Design',
    title: 'Graphic Design',
    mainImageUrl: freshflix1,
  },
  {
    id: 2,
    category: 'Thumbnails',
    title: 'Thumbnails',
    imageUrl: thumb1,
  },
  {
    id: 3,
    category: 'Logo Design',
    title: 'Logo Designs',
    imageUrl: urban2,
  },
  {
    id: 3,
    category: 'Social Media Designs',
    title: 'Social Media Designs',
    imageUrl: social1,
  },
  // Add more projects as needed
];

const projectImages = {
  'Graphic Design': [freshflix1, freshflix2, urban1, urban3, urban4],  // Add 'urban1' to include the Urban image
  'Thumbnails': [thumb2, thumb3, thumb4],
  'Logo Design': [purepulse1, purepulse2],
  'Social Media Designs': [social1],
  // Add more categories and images as needed
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
  };

  const openFullScreen = (imageUrl) => {
    setSelectedProject(imageUrl);
  };

  const closeFullScreen = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-200">
      <div className="container mx-auto py-12 m-10 md:mt-0">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-900">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={project.imageUrl || project.mainImageUrl}
                alt={`Project ${project.id}`}
                className="mb-4 h-48 w-full object-cover rounded-md cursor-pointer"
                onClick={() => openFullScreen(project.imageUrl || project.mainImageUrl)}
              />
              <h3 className="text-xl font-bold mb-2 text-blue-900">{project.title}</h3>
              <p
                className="text-yellow-500 cursor-pointer"
                onClick={() => openModal(project.category)}
              >
                View More
              </p>
            </div>
          ))}
        </div>

        {/* Category Modal */}
        {selectedCategory && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-yellow-500">{selectedCategory}</h2>
              <div className="grid grid-cols-2 gap-4">
                {projectImages[selectedCategory].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md cursor-pointer"
                    onClick={() => openFullScreen(image)}
                  />
                ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Full Screen Modal */}
        {selectedProject && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-full max-h-full cursor-pointer" onClick={closeFullScreen}>
              <img
                src={selectedProject}
                alt="Full Screen Project"
                className="max-w-full max-h-full rounded-lg"
              />
              <button
                onClick={closeFullScreen}
                className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
