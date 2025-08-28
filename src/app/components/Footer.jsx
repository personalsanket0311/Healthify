import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">MyHospiCare</h5>

        <p className="mb-2">
          <i className="bi bi-telephone-fill me-2"></i> +91-9876543210
          <span className="mx-3">|</span>
          <i className="bi bi-envelope-fill me-2"></i> support@myhospicare.com
        </p>

        <div className="mb-3">
          <a href="#" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-light">
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <p className="mb-0">
          &copy; {new Date().getFullYear()} MyHospiCare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer