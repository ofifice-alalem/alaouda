import BaseService from './BaseService';

/**
 * User Service extending BaseService
 * Follows Liskov Substitution Principle - can replace BaseService
 * Implements Single Responsibility - handles only user-related operations
 */
class UserService extends BaseService {
  constructor() {
    super();
    this.endpoint = '/users';
  }

  /**
   * Override beforeRequest to add authentication
   */
  beforeRequest() {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        this.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }

  /**
   * Get user by ID
   */
  async getUserById(id) {
    return this.get(`${this.endpoint}/${id}`);
  }

  /**
   * Create new user
   */
  async createUser(userData) {
    return this.post(this.endpoint, userData);
  }

  /**
   * Mock method for demonstration
   */
  async getMockUser(delay = 200) {
    // Simulate API call with configurable delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://via.placeholder.com/150'
        });
      }, delay);
    });
  }
}

// Singleton pattern implementation
const userServiceInstance = new UserService();
export default userServiceInstance;