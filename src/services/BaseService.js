import { CONFIG } from '../utils/constants';

/**
 * Abstract Base Service Class
 * Implements Template Method Pattern and follows Open/Closed Principle
 */
class BaseService {
  constructor(baseURL = CONFIG.API_BASE_URL) {
    this.baseURL = this.validateURL(baseURL);
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  /**
   * Validate URL to prevent SSRF attacks
   */
  validateURL(url) {
    try {
      const parsedURL = new URL(url);
      const allowedHosts = ['localhost', '127.0.0.1', 'api.example.com'];
      
      if (!allowedHosts.includes(parsedURL.hostname)) {
        throw new Error('Invalid host');
      }
      
      return url;
    } catch (error) {
      throw new Error('Invalid URL provided');
    }
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

      // Check content type before parsing JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
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
    // Use proper logging instead of console.error
    if (CONFIG.APP_ENV === 'development') {
      console.error('Service Error:', error);
    }
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