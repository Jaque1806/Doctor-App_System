import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Contact Us</h2>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        
        {/* Email Section */}
        <div className="flex items-center mb-4">
          <i class="fa-regular fa-envelope"></i>
          <a href="mailto:contact@example.com" className="text-lg text-blue-600 hover:text-blue-800">info@vitacare.ie</a>
        </div>
        <i class="fa-regular fa-envelope"></i>

        {/* Phone Section */}
        <div className="flex items-center mb-4">
          <p className="text-lg text-gray-700">(01) 239-7890</p>
        </div>

        {/* Address Section */}
        <div className="flex items-center mb-4">
          <p className="text-lg text-gray-700">123 Main Street, Dublin, Ireland</p>
        </div>

        {/* Location Section */}
        <div className="flex items-center">

          <a href="https://www.google.com/maps?q=123+Main+Street+Dublin+Ireland" className="text-lg text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact