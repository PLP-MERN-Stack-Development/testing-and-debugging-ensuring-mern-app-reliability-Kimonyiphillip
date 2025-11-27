const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-secret';
});

afterEach(async () => {
  // Clear all collections
  const collections = mongoose.connection.collections;
  
  for (const key in collections) {
    const collection = collections[key];
    try {
      await collection.deleteMany();
    } catch (error) {
      // Ignore errors if collection doesn't exist
    }
  }
});

afterAll(async () => {
  if (mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
  }
  await mongoose.connection.close();
  if (mongod) {
    await mongod.stop();
  }
});

jest.setTimeout(30000);