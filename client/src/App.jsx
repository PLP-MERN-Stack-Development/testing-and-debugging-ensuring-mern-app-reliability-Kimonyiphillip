import { useState } from 'react'
import Button from './components/Button'
import ApiTester from './components/ApiTester'
import TestResults from './components/TestResults'

function App() {
  const [testResults, setTestResults] = useState([])
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    // Simulate API test execution
    const mockResults = [
      { name: 'Health Check', status: 'success', duration: 45 },
      { name: 'User Creation', status: 'success', duration: 120 },
      { name: 'Product API', status: 'success', duration: 85 },
      { name: 'Data Validation', status: 'success', duration: 65 }
    ]

    await new Promise(resolve => setTimeout(resolve, 2000))
    setTestResults(mockResults)
    setIsRunning(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MERN Testing & Debugging
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive API Testing with Supertest
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Test Runner Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">API Test Runner</h2>
            
            <div className="space-y-4">
              <Button
                onClick={runTests}
                disabled={isRunning}
                variant="primary"
                size="lg"
                className="w-full"
              >
                {isRunning ? 'Running Tests...' : 'Run Supertest Suite'}
              </Button>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Test Suite Includes:</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• User CRUD Operations</li>
                  <li>• Product Management</li>
                  <li>• Data Validation</li>
                  <li>• Error Handling</li>
                  <li>• Performance Testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Test Results */}
          <TestResults results={testResults} />
        </div>

        {/* Testing Coverage Stats */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Testing Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-green-700 font-medium">Integration Tests</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-blue-700 font-medium">API Endpoints</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-purple-700 font-medium">Test Scenarios</div>
            </div>
          </div>
        </div>

        {/* Component Testing Demo */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Component Testing Demo</h2>
          <p className="text-gray-600 mb-4">
            This Button component has comprehensive unit tests using React Testing Library
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="success">Success Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App