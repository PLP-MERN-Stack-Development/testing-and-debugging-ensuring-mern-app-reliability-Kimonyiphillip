const TestResults = ({ results }) => {
    if (!results || results.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Test Results</h2>
          <div className="text-center py-8 text-gray-500">
            <p>Run tests to see results here</p>
          </div>
        </div>
      )
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Test Results</h2>
        <div className="space-y-3">
          {results.map((result, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-lg border ${
                result.status === 'success'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{result.name}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    result.status === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {result.status === 'success' ? 'PASS' : 'FAIL'}
                </span>
                <span className="text-sm text-gray-500">{result.duration}ms</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">
              Total: {results.length} tests
            </span>
            <span className="text-green-600 font-medium">
              Passed: {results.filter(r => r.status === 'success').length}
            </span>
          </div>
        </div>
      </div>
    )
  }
  
  export default TestResults