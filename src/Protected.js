import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ userId, children }) {
  console.log(userId, "protected for chat");
  if (!userId) {
    // console.log(user, "user");
    return <Navigate to="/" replace />;
  }

  return children;
}
export default Protected;
