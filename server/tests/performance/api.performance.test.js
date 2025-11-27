const request = require('supertest');
const app = require('../../src/server');

describe('API Performance Tests', () => {
  it('should respond quickly to health checks', async () => {
    const startTime = Date.now();
    
    await request(app)
      .get('/api/health')
      .expect(200);

    const responseTime = Date.now() - startTime;
    console.log(`Health check response time: ${responseTime}ms`);
    
    // Increased threshold for CI environments
    expect(responseTime).toBeLessThan(500);
  });

  it('should handle concurrent requests', async () => {
    const requests = Array(5).fill().map(() => 
      request(app).get('/api/health')
    );

    const startTime = Date.now();
    const responses = await Promise.all(requests);
    const totalTime = Date.now() - startTime;

    console.log(`5 concurrent requests completed in: ${totalTime}ms`);

    responses.forEach(response => {
      expect(response.status).toBe(200);
    });

    // Increased threshold
    expect(totalTime).toBeLessThan(2000);
  });
});