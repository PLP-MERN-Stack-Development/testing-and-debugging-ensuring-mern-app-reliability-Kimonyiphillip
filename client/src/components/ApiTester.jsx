import { useState } from 'react'
import Button from './Button'

const ApiTester = () => {
  const [testResults, setTestResults] = useState([])
  const [loading, setLoading] = useState(false)

  const runApiTests = async () => {
    setLoading(true)
    setTestResults([])

    // This would make actual API calls in a real scenario
    const tests = [
      { name: 'Health Check', endpoint: '/api/health', method: 'GET' },
      { name: 'Get Users', endpoint: '/api/users', method: 'GET' },
      { name: 'Get Products', endpoint: '/api/products', method: 'GET' }
    ]

    const results = []
    for (const test of tests) {
      try {
        const startTime = Date.now()
        // In a real app, you'd use fetch or axios here
        await new Promise(resolve => setTimeout(resolve, 500))
        const duration = Date.now() - startTime
        
        results.push({
          name: test.name,
          status: 'success',
          duration,
          endpoint: test.endpoint
        })
      } catch (error) {
        results.push({
          name: test.name,
          status: 'error',
          duration: 0,
          endpoint: test.endpoint,
          error: error.message
        })
      }
      setTestResults([...results])
    }

    setLoading(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">API Integration Tester</h2>
      <Button
        onClick={runApiTests}
        disabled={loading}
        variant="primary"
        className="w-full mb-4"
      >
        {loading ? 'Testing APIs...' : 'Test API Endpoints'}
      </Button>
      
      {testResults.length > 0 && (
        <div className="space-y-2">
          {testResults.map((result, index) => (
            <div
              key={index}
              className={`p-3 rounded border ${
                result.status === 'success' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{result.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  result.status === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {result.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {result.endpoint} • {result.duration}ms
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ApiTester