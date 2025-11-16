import { useState } from 'react'
import { Recycle, Trash2, Leaf, Battery, Lightbulb, Package, Droplet, Shirt } from 'lucide-react'

const WasteGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Categories', icon: Trash2 },
    { id: 'recyclable', label: 'Recyclable', icon: Recycle },
    { id: 'organic', label: 'Organic', icon: Leaf },
    { id: 'hazardous', label: 'Hazardous', icon: Battery },
    { id: 'general', label: 'General Waste', icon: Package },
  ]

  const wasteItems = [
    {
      id: 1,
      name: 'Plastic Bottles',
      category: 'recyclable',
      icon: Package,
      color: 'blue',
      description: 'Clean plastic bottles (PET, HDPE) can be recycled',
      instructions: [
        'Remove caps and labels',
        'Rinse thoroughly',
        'Flatten if possible',
        'Place in recycling bin',
      ],
      tips: 'Check the recycling symbol on the bottom of the bottle',
    },
    {
      id: 2,
      name: 'Paper & Cardboard',
      category: 'recyclable',
      icon: Package,
      color: 'brown',
      description: 'Clean paper and cardboard are highly recyclable',
      instructions: [
        'Remove any plastic or metal attachments',
        'Flatten cardboard boxes',
        'Keep dry and clean',
        'Place in paper recycling bin',
      ],
      tips: 'Wet or greasy paper should go in general waste',
    },
    {
      id: 3,
      name: 'Glass Containers',
      category: 'recyclable',
      icon: Droplet,
      color: 'green',
      description: 'Glass bottles and jars can be recycled indefinitely',
      instructions: [
        'Remove caps and lids',
        'Rinse clean',
        'Remove labels if possible',
        'Place in glass recycling bin',
      ],
      tips: 'Broken glass should be wrapped and placed in general waste',
    },
    {
      id: 4,
      name: 'Food Scraps',
      category: 'organic',
      icon: Leaf,
      color: 'green',
      description: 'Organic waste can be composted',
      instructions: [
        'Separate from other waste',
        'Remove any packaging',
        'Place in compost bin',
        'Keep covered to prevent odors',
      ],
      tips: 'Meat and dairy products may not be suitable for home composting',
    },
    {
      id: 5,
      name: 'Batteries',
      category: 'hazardous',
      icon: Battery,
      color: 'red',
      description: 'Batteries contain hazardous materials and must be disposed of properly',
      instructions: [
        'Never throw in regular trash',
        'Take to designated collection points',
        'Tape terminals to prevent short circuits',
        'Store in a cool, dry place until disposal',
      ],
      tips: 'Many stores offer battery recycling programs',
    },
    {
      id: 6,
      name: 'Electronics',
      category: 'hazardous',
      icon: Lightbulb,
      color: 'purple',
      description: 'E-waste requires special handling',
      instructions: [
        'Remove personal data',
        'Take to e-waste collection centers',
        'Check for manufacturer take-back programs',
        'Never dispose in regular trash',
      ],
      tips: 'Many electronics stores accept old devices for recycling',
    },
    {
      id: 7,
      name: 'Textiles',
      category: 'recyclable',
      icon: Shirt,
      color: 'pink',
      description: 'Clothing and textiles can be recycled or donated',
      instructions: [
        'Clean and dry items',
        'Donate if in good condition',
        'Place in textile recycling bins',
        'Remove any non-textile parts',
      ],
      tips: 'Many charities accept clothing donations',
    },
    {
      id: 8,
      name: 'Mixed Waste',
      category: 'general',
      icon: Trash2,
      color: 'gray',
      description: 'Non-recyclable items go in general waste',
      instructions: [
        'Ensure items are truly non-recyclable',
        'Minimize waste by choosing reusable alternatives',
        'Place in general waste bin',
        'Follow local waste collection schedules',
      ],
      tips: 'When in doubt, check with your local waste management authority',
    },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? wasteItems
      : wasteItems.filter((item) => item.category === selectedCategory)

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      brown: 'bg-amber-50 text-amber-700 border-amber-200',
      green: 'bg-green-50 text-green-700 border-green-200',
      red: 'bg-red-50 text-red-700 border-red-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      pink: 'bg-pink-50 text-pink-700 border-pink-200',
      gray: 'bg-gray-50 text-gray-700 border-gray-200',
    }
    return colors[color] || colors.gray
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Waste Segregation Guide</h2>
        <p className="text-gray-600 mt-1">Learn how to properly sort and dispose of different types of waste</p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Waste Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow border-2 ${getColorClasses(item.color)}`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(item.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm mb-4 opacity-90">{item.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Instructions:</h4>
                      <ul className="space-y-1">
                        {item.instructions.map((instruction, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                      <p className="text-sm">
                        <span className="font-medium">💡 Tip:</span> {item.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Proper Segregation Matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">♻️ Increases Recycling</h4>
            <p className="text-sm text-gray-700">
              Proper sorting ensures more materials can be recycled and reused
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">🌱 Protects Environment</h4>
            <p className="text-sm text-gray-700">
              Reduces contamination and helps protect our natural resources
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">💰 Saves Money</h4>
            <p className="text-sm text-gray-700">
              Efficient waste management reduces costs for municipalities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WasteGuide

