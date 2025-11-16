import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle2, Clock, TrendingUp, Trash2, MapPin } from 'lucide-react'

const Dashboard = () => {
  const [bins, setBins] = useState([])
  const [stats, setStats] = useState({
    totalBins: 0,
    fullBins: 0,
    collectionRate: 0,
    recyclingRate: 0,
  })

  useEffect(() => {
    // Simulate fetching bin data
    const mockBins = [
      { id: 1, location: 'Downtown Plaza', level: 85, status: 'full', lastCollection: '2 days ago', type: 'General' },
      { id: 2, location: 'City Park', level: 45, status: 'medium', lastCollection: '1 day ago', type: 'Recyclable' },
      { id: 3, location: 'Main Street', level: 20, status: 'low', lastCollection: '3 days ago', type: 'General' },
      { id: 4, location: 'Shopping Mall', level: 92, status: 'full', lastCollection: '1 day ago', type: 'Recyclable' },
      { id: 5, location: 'Residential Area', level: 35, status: 'low', lastCollection: '2 days ago', type: 'General' },
      { id: 6, location: 'University Campus', level: 78, status: 'high', lastCollection: '1 day ago', type: 'Recyclable' },
    ]

    setBins(mockBins)
    setStats({
      totalBins: mockBins.length,
      fullBins: mockBins.filter(b => b.level > 80).length,
      collectionRate: 94,
      recyclingRate: 68,
    })
  }, [])

  const getStatusColor = (level) => {
    if (level > 80) return 'text-red-600 bg-red-50'
    if (level > 50) return 'text-yellow-600 bg-yellow-50'
    return 'text-green-600 bg-green-50'
  }

  const getStatusIcon = (level) => {
    if (level > 80) return <AlertCircle className="h-5 w-5" />
    if (level > 50) return <Clock className="h-5 w-5" />
    return <CheckCircle2 className="h-5 w-5" />
  }

  const getStatusText = (level) => {
    if (level > 80) return 'Needs Collection'
    if (level > 50) return 'Getting Full'
    return 'Normal'
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Monitor smart bins and waste collection status</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Smart Bins</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalBins}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Trash2 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Bins Needing Collection</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{stats.fullBins}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Collection Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{stats.collectionRate}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Recycling Rate</p>
              <p className="text-2xl font-bold text-primary-600 mt-1">{stats.recyclingRate}%</p>
            </div>
            <div className="bg-primary-100 p-3 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Smart Bins List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Smart Bins Status</h3>
          <p className="text-sm text-gray-600 mt-1">Real-time monitoring of waste levels</p>
        </div>
        <div className="divide-y divide-gray-200">
          {bins.map((bin) => (
            <div key={bin.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-lg ${getStatusColor(bin.level)}`}>
                    {getStatusIcon(bin.level)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{bin.location}</h4>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        {bin.type}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{bin.location}</span>
                      </span>
                      <span>Last collection: {bin.lastCollection}</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Fill Level</span>
                        <span className="font-medium text-gray-900">{bin.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            bin.level > 80
                              ? 'bg-red-500'
                              : bin.level > 50
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${bin.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      bin.level > 80
                        ? 'bg-red-100 text-red-700'
                        : bin.level > 50
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {getStatusText(bin.level)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

