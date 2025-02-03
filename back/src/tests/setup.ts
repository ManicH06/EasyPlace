let server: any;
import app from '../index';

beforeEach(() => {
  jest.clearAllMocks();
});

beforeAll(() => {
  server = app.listen(5001); 
  jest.clearAllMocks();
});

afterAll((done) => {
  server.close(done); 
});