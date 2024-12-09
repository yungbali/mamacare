import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className="error-area pt-120 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="error-content text-center">
              <div className="error-image mb-70">
                <img src="/assets/img/error/error.png" alt="404 image" />
              </div>
              <h4 className="error-title mb-35">Oops! Page Not Found</h4>
              <p className="error-text mb-35">
                The page you're looking for might have been moved or doesn't exist. 
                Let us help you find your way back to our support resources.
              </p>
              <div className="error-button">
                <Link href="/" className="main-btn">
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 