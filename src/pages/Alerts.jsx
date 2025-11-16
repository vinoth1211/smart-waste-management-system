import { useState } from 'react'
import { AlertCircle, CheckCircle2, Clock, Bell, Trash2, MapPin } from 'lucide-react'

const Alerts = () => {
  const [alerts] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'Bin Collection Required',
      message: 'Smart bin at Downtown Plaza is 85% full and needs immediate collection',
      location: 'Downtown Plaza',
      timestamp: '2 hours ago',
      status: 'pending',
      binId: 1,
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Fill Level Detected',
      message: 'Smart bin at Shopping Mall has reached 92% capacity',
      location: 'Shopping Mall',
      timestamp: '4 hours ago',
      status: 'pending',
      binId: 4,
    },
    {
      id: 3,
      type: 'info',
      title: 'Collection Scheduled',
      message: 'Collection scheduled for City Park bin tomorrow at 8:00 AM',
      location: 'City Park',
      timestamp: '1 day ago',
      status: 'scheduled',
      binId: 2,
    },
    {
      id: 4,
      type: 'success',
      title: 'Collection Completed',
      message: 'Bin at Main Street has been successfully collected and emptied',
      location: 'Main Street',
      timestamp: '2 days ago',
      status: 'completed',
      binId: 3,
    },
    {
      id: 5,
      type: 'info',
      title: 'Maintenance Reminder',
      message: 'Routine maintenance check due for Residential Area bin next week',
      location: 'Residential Area',
      timestamp: '3 days ago',
      status: 'scheduled',
      binId: 5,
    },
    {
      id: 6,
      type: 'success',
      title: 'Collection Completed',
      message: 'University Campus bin collection completed successfully',
      location: 'University Campus',
      timestamp: '3 days ago',
      status: 'completed',
      binId: 6,
    },
  ])

  const [filter, setFilter] = useState('all')

  const filteredAlerts =
    filter === 'all'
      ? alerts
      : alerts.filter((alert) => alert.status === filter)

  const getAlertStyles = (type, status) => {
    if (status === 'completed') {
      return 'bg-green-50 border-green-200 text-green-800'
    }
    if (status === 'scheduled') {
      return 'bg-blue-50 border-blue-200 text-blue-800'
    }
    if (type === 'urgent') {
      return 'bg-red-50 border-red-200 text-red-800'
    }
    if (type === 'warning') {
      return 'bg-yellow-50 border-yellow-200 text-yellow-800'
    }
    return 'bg-blue-50 border-blue-200 text-blue-800'
  }

  const getIcon = (type, status) => {
    if (status === 'completed') {
      return <CheckCircle2 className="h-5 w-5" />
    }
    if (type === 'urgent' || type === 'warning') {
      return <AlertCircle className="h-5 w-5" />
    }
    return <Clock className="h-5 w-5" />
  }

  const stats = {
    total: alerts.length,
    pending: alerts.filter((a) => a.status === 'pending').length,
    scheduled: alerts.filter((a) => a.status === 'scheduled').length,
    completed: alerts.filter((a) => a.status === 'completed').length,
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Alerts & Notifications</h2>
        <p className="text-gray-600 mt-1">Stay informed about bin status and collection schedules</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Alerts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
            </div>
            <Bell className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{stats.pending}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{stats.scheduled}</p>
            </div>
            <Clock className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{stats.completed}</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Alerts' },
            { id: 'pending', label: 'Pending' },
            { id: 'scheduled', label: 'Scheduled' },
            { id: 'completed', label: 'Completed' },
          ].map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === filterOption.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No alerts found for the selected filter.</p>
          </div>
        ) : (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`bg-white rounded-lg shadow border-2 ${getAlertStyles(alert.type, alert.status)}`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getAlertStyles(alert.type, alert.status)}`}>
                    {getIcon(alert.type, alert.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{alert.title}</h3>
                        <p className="text-sm mb-3 opacity-90">{alert.message}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {alert.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {alert.timestamp}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            alert.status === 'completed'
                              ? 'bg-green-200 text-green-800'
                              : alert.status === 'scheduled'
                              ? 'bg-blue-200 text-blue-800'
                              : 'bg-red-200 text-red-800'
                          }`}
                        >
                          {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    {alert.status === 'pending' && (
                      <div className="mt-4 flex space-x-2">
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
                          Schedule Collection
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    )}
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

export default Alerts

