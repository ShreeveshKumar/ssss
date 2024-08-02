import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    setIsLoggedIn(!!userToken);
  }, []);

  const handleNavigation = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">SkillPathFinder</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200 transition duration-300 font-medium">Home</Link></li>
            <li>
              <button 
                onClick={() => handleNavigation(isLoggedIn ? '/userDashboard' : '/login')} 
                className="hover:text-blue-200 transition duration-300 font-medium"
              >
                {isLoggedIn ? 'Dashboard' : 'Profile'}
              </button>
            </li>
            {isLoggedIn ? (
              <li>
                <button 
                  onClick={handleLogout} 
                  className="hover:text-blue-200 transition duration-300 font-medium"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li><Link to="/login" className="hover:text-blue-200 transition duration-300 font-medium">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;