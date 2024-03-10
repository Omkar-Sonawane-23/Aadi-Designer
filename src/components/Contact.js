import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-gray-300">
          <div className="container mx-auto py-12 m-10 md:m-0">
            <h2 className="text-5xl font-extrabold text-center mb-8 text-blue-900">
              Get in Touch
            </h2>
    
              {/* Contact Form */}
              <div className="flex items-center justify-center">
                <form className="w-full max-w-md m-5">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-blue-900">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-yellow-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-yellow-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-blue-900">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-yellow-500"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue"
                  >
                    Send Message
                  </button>
                </form>
              </div>
          </div>
        </section>
      );
}

export default Contact