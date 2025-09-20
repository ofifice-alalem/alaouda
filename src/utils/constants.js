/**
 * Application constants
 * Follows DRY principle - single source of truth for constants
 */
export const API_ENDPOINTS = {
  USERS: '/users',
  AUTH: '/auth'
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences'
};