import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const User = () => {
  const [userData, setUserData] = useState({
    avatar_url: '',
    name: '',
    location: '',
  });

  const { userId } = useParams();


  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(({ name, location, avatar_url }) =>
        setUserData({
          name,
          location,
          avatar_url,
        }),
      );
  }, [userId]);

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

export default User;
