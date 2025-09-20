import React, { useEffect } from 'react';
import { Card, Button } from '../../ui';
import useUser from '../../../hooks/useUser';
import './UserProfile.css';

/**
 * UserProfile Feature Component
 * Demonstrates composition of multiple components and hooks
 * Follows Single Responsibility - handles only user profile display
 */
const UserProfile = () => {
  const { user, loading, error, loadUser } = useUser();

  useEffect(() => {
    loadUser();
  }, []);

  if (loading) {
    return (
      <Card title="User Profile">
        <div className="user-profile__loading">Loading...</div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="User Profile">
        <div className="user-profile__error">
          Error: {error}
          <Button onClick={() => loadUser()} className="user-profile__retry">
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card title="User Profile">
        <div className="user-profile__empty">No user data available</div>
      </Card>
    );
  }

  return (
    <Card title="User Profile" className="user-profile">
      <div className="user-profile__content">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="user-profile__avatar"
        />
        <div className="user-profile__info">
          <h3 className="user-profile__name">{user.name}</h3>
          <p className="user-profile__email">{user.email}</p>
          <Button 
            onClick={() => loadUser()}
            variant="secondary"
            size="small"
          >
            Refresh
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;