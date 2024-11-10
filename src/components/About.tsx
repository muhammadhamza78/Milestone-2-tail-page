import React from 'react'

const About = () => {
  return (
    <div>
      <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <div className="prose">
          <p className="text-gray-600 mb-4">
            We're a team passionate about creating simple and effective websites. 
            Our goal is to make web development accessible to everyone.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To provide clean, efficient, and user-friendly web solutions that help 
            businesses and individuals establish their online presence.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Simple and clean design</li>
              <li>Responsive layouts</li>
              <li>Fast and efficient</li>
              <li>Easy to customize</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
