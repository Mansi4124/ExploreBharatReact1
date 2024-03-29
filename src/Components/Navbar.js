import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a className="navbar-brand" href="#">EXPLORE BHARAT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About India</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Booking</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
