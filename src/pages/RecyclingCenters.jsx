import { useState } from 'react'
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react'

const RecyclingCenters = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [centers] = useState([
    {
      id: 1,
      name: 'Green Earth Recycling Center',
      address: '123 Eco Street, Downtown',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      distance: '2.3 km',
      types: ['Plastic', 'Paper', 'Metal', 'Glass'],
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Community Recycling Hub',
      address: '456 Green Avenue, Midtown',
      phone: '+1 (555) 234-5678',
      hours: 'Daily: 7:00 AM - 8:00 PM',
      distance: '4.1 km',
      types: ['Plastic', 'Paper', 'Electronics', 'Batteries'],
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Eco-Friendly Waste Center',
      address: '789 Sustainable Road, Uptown',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      distance: '5.7 km',
      types: ['Metal', 'Glass', 'Textiles', 'Organic'],
      rating: 4.9,
    },
    {
      id: 4,
      name: 'City Recycling Facility',
      address: '321 Clean Way, Industrial District',
      phone: '+1 (555) 456-7890',
      hours: 'Mon-Sat: 6:00 AM - 7:00 PM',
      distance: '6.2 km',
      types: ['Plastic', 'Paper', 'Metal', 'Glass', 'Electronics'],
      rating: 4.7,
    },
  ])

  const filteredCenters = centers.filter((center) =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Recycling Centers</h2>
        <p className="text-gray-600 mt-1">Find nearby recycling centers and drop-off locations</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">Interactive Map</p>
            <p className="text-sm text-gray-600 mt-1">Map integration can be added with Google Maps or Mapbox</p>
          </div>
        </div>
      </div>

      {/* Recycling Centers List */}
      <div className="space-y-4">
        {filteredCenters.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">No recycling centers found matching your search.</p>
          </div>
        ) : (
          filteredCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium text-gray-700">{center.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{center.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{center.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{center.hours}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Accepts:</p>
                      <div className="flex flex-wrap gap-2">
                        {center.types.map((type, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col items-end space-y-2">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Distance</p>
                      <p className="text-lg font-semibold text-gray-900">{center.distance}</p>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      <Navigation className="h-4 w-4" />
                      <span>Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default RecyclingCenters

