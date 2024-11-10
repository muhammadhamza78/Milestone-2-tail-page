import React from 'react'

const Home = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MyWebsite</h1>
          <p className="text-xl text-gray-600">A simple and clean website template</p>
        </div>
              {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Easy to Use</h2>
          <p className="text-gray-600">Simple and intuitive design for everyone.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Responsive</h2>
          <p className="text-gray-600">Looks great on all devices and screens.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Modern</h2>
          <p className="text-gray-600">Built with the latest web technologies.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
