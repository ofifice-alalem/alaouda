import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import userService from '../services/UserService';

/**
 * Custom hook for user operations
 * Follows Single Responsibility - handles only user-related state logic
 * Implements Dependency Injection pattern
 */
const useUser = () => {
  const { user, loading, error, setLoading, setUser, setError } = useAppContext();

  /**
   * Load user data
   * Demonstrates separation of concerns - UI logic separated from business logic
   */
  const loadUser = async (userId) => {
    try {
      setLoading(true);
      const userData = userId 
        ? await userService.getUserById(userId)
        : await userService.getMockUser();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Create new user
   */
  const createUser = async (userData) => {
    try {
      setLoading(true);
      const newUser = await userService.createUser(userData);
      setUser(newUser);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    loadUser,
    createUser
  };
};

export default useUser;