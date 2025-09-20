/**
 * Abstract Base Service Class
 * Implements Template Method Pattern and follows Open/Closed Principle
 */
class BaseService {
  constructor(baseURL = 'https://api.example.com') {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  /**
   * Template method for HTTP requests
   * Subclasses can override specific steps
   */
  async request(endpoint, options = {}) {
    try {
      this.beforeRequest();
      
      const url = `${this.baseURL}${endpoint}`;
      const config = {
        headers: this.headers,
        ...options
      };

      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.afterRequest(data);
    } catch (error) {
      return this.handleError(error);
    }
  }

  // Hook methods for subclasses (Template Method Pattern)
  beforeRequest() {
    // Override in subclasses if needed
  }

  afterRequest(data) {
    return data;
  }

  handleError(error) {
    console.error('Service Error:', error);
    throw error;
  }

  // Common HTTP methods
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

export default BaseService;