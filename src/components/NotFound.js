import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/index">Go to Home</Link>
    </div>
  );
}
