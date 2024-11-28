import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../Firebase/Firebase";

const DiscussionPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track auth state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user);
        setIsAuthenticated(true);
      } else {
        console.log("User is not authenticated");
        setIsAuthenticated(false);
        navigate("/login", { replace: true }); // Redirect to login
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [navigate]);

  if (isAuthenticated === null) {
    // Show a loading indicator while checking authentication
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // If unauthenticated, the redirect will already happen
    return null;
  }

  return (
    <div>
      <h1>Welcome to the Discussion Page!</h1>
      {/* Your discussion content here */}
    </div>
  );
};

export default DiscussionPage;
