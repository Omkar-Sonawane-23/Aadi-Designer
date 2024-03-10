import React from 'react'

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-900 p-4 text-white flex justify-end">
    <ul className="flex space-x-4">
      <li><button onClick={() => scrollToSection('home')}>Home</button></li>
      <li><button onClick={() => scrollToSection('about')}>About</button></li>
      <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
      <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
    </ul>
  </nav>
  )
}

export default Navbar