// src/composants/PiedDePage.js

export default function PiedDePage() {
    return (
      <footer className="bg-light py-4 mt-auto">
        <div className="container text-center">
          <div className="mb-3">
            <a href="#" className="text-decoration-none text-dark mx-2">LinkedIn</a>
            <a href="#" className="text-decoration-none text-dark mx-2">GitHub</a>
            <a href="#" className="text-decoration-none text-dark mx-2">Twitter</a>
          </div>
          <p className="text-muted mb-0">
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </p>
        </div>
      </footer>
    )
  }