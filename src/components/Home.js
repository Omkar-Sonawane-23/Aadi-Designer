import React, {useEffect} from 'react'
import pic from './pic.png'

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <section id="home" className="min-h-screen relative overflow-hidden">
          {/* Background Video */}
          <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-exploding-ink-underwater-105-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-80"></div>
    
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 m-10">
          <img
                src={pic} // Replace with the actual URL of your photo
                alt="Aaditya Suryavanshi"
                className="rounded-full border-4 border-yellow-500 h-50 w-50 md:h-48 md:w-48 object-cover"
              />
            <h1 className="text-6xl font-extrabold mb-4">Aaditya Suryavanshi</h1>
            <p className="text-xl mb-8">Graphic Designer</p>
            <p className="text-lg mb-8 w-[70rem]">
              Welcome to my creative space! I specialize in delivering visually stunning and impactful designs.
              With a passion for graphic arts and an eye for detail, I bring ideas to life.
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-full text-lg font-semibold focus:outline-none focus:shadow-outline-blue"
            >
              Scroll Down
            </button>
          </div>
        </section>
      );
}

export default Home