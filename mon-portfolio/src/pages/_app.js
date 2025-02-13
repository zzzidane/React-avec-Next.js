// src/pages/_app.js

// Importation des styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { useEffect } from 'react'

// Importation des composants
import EnTete from '../composants/EnTete'
import PiedDePage from '../composants/PiedDePage'

export default function MonApplication({ Component, pageProps }) {
  // Initialisation des composants Bootstrap qui nécessitent JavaScript
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <EnTete />
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
      <PiedDePage />
    </div>
  )
}