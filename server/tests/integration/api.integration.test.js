const request = require('supertest');
const app = require('../../src/server');
const User = require('../../src/models/User');
const Product = require('../../src/models/Product');

describe('MERN API - Integration Tests', () => {
  let testUser;
  let testProduct;

  beforeEach(async () => {
    // Use unique email for each test
    const uniqueEmail = `test${Date.now()}@integration.com`;
    
    testUser = await User.create({
      name: 'Test User',
      email: uniqueEmail,
      password: 'password123'
    });

    testProduct = await Product.create({
      name: 'Integration Test Product',
      description: 'Product for integration testing',
      price: 99.99,
      category: 'electronics',
      stockQuantity: 10,
      createdBy: testUser._id
    });
  });

  describe('Health Check', () => {
    it('should return API health status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('User API', () => {
    it('should get all users', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
      response.body.data.forEach(user => {
        expect(user).not.toHaveProperty('password');
      });
    });

    it('should create a new user', async () => {
      const userData = {
        name: 'New User',
        email: `new${Date.now()}@test.com`,
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(userData.name);
      expect(response.body.data.email).toBe(userData.email);
    });

    it('should validate user data', async () => {
      const invalidUser = {
        name: 'A',
        email: 'invalid',
        password: '123'
      };

      const response = await request(app)
        .post('/api/users')
        .send(invalidUser)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.errors).toBeInstanceOf(Array);
    });

    it('should return 400 for duplicate email', async () => {
      const userData = {
        name: 'Duplicate User',
        email: testUser.email, // Use existing email
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('already exists');
    });
  });

  describe('Product API', () => {
    it('should get all products', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeInstanceOf(Array);
    });

    it('should create a new product', async () => {
      const productData = {
        name: 'New Product',
        description: 'New product description',
        price: 49.99,
        category: 'clothing'
      };

      const response = await request(app)
        .post('/api/products')
        .send(productData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(productData.name);
    });
  });

  describe('Error Handling', () => {
    it('should return 404 for unknown routes', async () => {
      await request(app)
        .get('/api/unknown')
        .expect(404);
    });

    it('should handle invalid user ID', async () => {
      await request(app)
        .get('/api/users/invalid-id')
        .expect(400);
    });
  });
});