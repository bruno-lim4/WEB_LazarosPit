// src/utils/auth.js
import { jwtDecode }  from 'jwt-decode';

export function getUserFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return {
      email: decoded.email,
      isAdmin: decoded.isAdmin === true,
      isLoggedIn: true
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}
