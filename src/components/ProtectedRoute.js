import { Navigate } from "react-router-dom";

const SESSION_TIMEOUT = 30 * 60 * 1000; 

const ProtectedRoute = ({ children }) => {
  console.log("🔒 ProtectedRoute: Starting check..."); 
  
  let sessionData;
  
  try {
    const stored = localStorage.getItem("ticketapp_session");
    console.log("📦 ProtectedRoute: Raw session from storage:", stored); 
    
    if (!stored) {
      console.log("❌ ProtectedRoute: No session found, redirecting to login"); // Debug
      alert("You must be logged in to access this page.");
      return <Navigate to="/auth/login" replace />;
    }
    
    sessionData = JSON.parse(stored);
    console.log("✅ ProtectedRoute: Parsed session data:", sessionData); 
  } catch (error) {
    console.error("❌ ProtectedRoute: JSON parse error:", error); 
    localStorage.removeItem("ticketapp_session");
    alert("Invalid session. Please log in again.");
    return <Navigate to="/auth/login" replace />;
  }

  const { token, loginTime } = sessionData;
  
  console.log("🔐 ProtectedRoute: Checking token and loginTime...");
  console.log("  Token:", token);
  console.log("  LoginTime:", loginTime);
  
  if (!token || !loginTime) {
    console.log("❌ ProtectedRoute: Missing token or loginTime, redirecting"); 
    localStorage.removeItem("ticketapp_session");
    alert("Invalid session. Please log in again.");
    return <Navigate to="/auth/login" replace />;
  }

  const now = new Date().getTime();
  const timeDiff = now - loginTime;
  
  console.log("⏰ ProtectedRoute: Time check...");
  console.log("  Current time:", now);
  console.log("  Login time:", loginTime);
  console.log("  Time difference:", timeDiff);
  console.log("  Session timeout:", SESSION_TIMEOUT);
  console.log("  Expired?", timeDiff > SESSION_TIMEOUT);

  if (timeDiff > SESSION_TIMEOUT) {
    console.log("❌ ProtectedRoute: Session expired, redirecting"); 
    localStorage.removeItem("ticketapp_session");
    alert("Your session has expired. Please log in again.");
    return <Navigate to="/auth/login" replace />;
  }

  console.log("✅ ProtectedRoute: All checks passed! Rendering children"); 
  return children;
};

export default ProtectedRoute;