// src/composants/EnTete.js

import Image from 'next/image'
import Link from 'next/link'

export default function EnTete() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        {/* Logo et titre */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" 
               style={{width: '40px', height: '40px'}}>
            MP
          </div>
          <span className="ms-2">Mon Portfolio</span>
        </Link>

        {/* Bouton hamburger */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link href="/a-propos" className="nav-link">À Propos</Link>
            </li>
            <li className="nav-item">
              <Link href="/projets" className="nav-link">Projets</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary d-none d-lg-block">
            Me Contacter
          </Link>
        </div>
      </div>
    </nav>
  )
}