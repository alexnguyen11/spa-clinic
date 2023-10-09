import React from 'react'

const RELAXATION = () => {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="grid grid-cols-3 gap-8 max-w-6xl w-full p-8 bg-white rounded-xl shadow-lg">
        
        {/* Swedish Massage */}
        <div className="flex flex-col items-center space-y-6">
          <img src="/path/to/your/image1.jpg" alt="Swedish Massage" className="w-full h-56 object-cover rounded-md" />
          <h2 className="text-xl font-bold">SWEDISH MASSAGE</h2>
          <p className="text-sm text-gray-700">
            This classic massage treatment is also known as a Relaxation Massage and the goal is...
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Read More</button>
        </div>

        {/* Deep Tissue Massage */}
        <div className="flex flex-col items-center space-y-6">
          <img src="/path/to/your/image2.jpg" alt="Deep Tissue Massage" className="w-full h-56 object-cover rounded-md" />
          <h2 className="text-xl font-bold">DEEP TISSUE MASSAGE</h2>
          <p className="text-sm text-gray-700">
            Deep tissue massage is a style of massage that is designed to get into the connective...
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Read More</button>
        </div>

        {/* Prenatal and Infant Massage */}
        <div className="flex flex-col items-center space-y-6">
          <img src="/path/to/your/image3.jpg" alt="Prenatal and Infant Massage" className="w-full h-56 object-cover rounded-md" />
          <h2 className="text-xl font-bold">PRENATAL AND INFANT MASSAGE</h2>
          <p className="text-sm text-gray-700">
            When a woman is pregnant, getting a massage is a good way to reduce the stress of...
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Read More</button>
        </div>

      </div>
    </div>
  )
}

export default RELAXATION;
