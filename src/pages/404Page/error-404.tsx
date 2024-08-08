import React from "react";
import Error from "@/assets/images/404-page.gif"
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center py-5 mt-5">
        <h1 className="text-8xl font-bold">404</h1>
        <img src={Error} style={{ height: '400px', transform: 'scale(1.4)', zIndex: '-1'}} />        
        <div style={{ textAlign: 'center'}}>
            <p className="text-3xl mb-2">Looks like you're lost</p>
            <p className="text-xl mb-5">The page you are looking for not available</p>
            <Link to="/" className="btn btn-primary px-5 py-3" style={{ marginTop: '30px', display: 'block'}}>Go to Home</Link>
        </div>
    </div>
  );
}

export default ErrorPage;
