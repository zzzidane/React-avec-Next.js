// Importation du composant Link de Next.js pour la navigation entre les pages
import Link from 'next/link'

// Définition du composant Navigation
export default function Navigation() {
    return (
        <nav className="p-4 bg-gray-100">
            <ul className="flex justify-center space-x-4">

                {/* Élément de navigation vers l'accueil */}
                <li>
                    <Link 
                        href="/" 
                        className="hover:text-blue-600" // Change la couleur au survol
                    >
                        Accueil
                    </Link>
                </li>

                {/* Élément de navigation vers la page À propos */}
                <li>
                    <Link 
                        href="/a-propos"
                        className="hover:text-blue-600"
                    >
                        À Propos
                    </Link>
                </li>

                {/* Élément de navigation vers la page Projets */}
                <li>
                    <Link 
                        href="/projets"
                        className="hover:text-blue-600"
                    >
                        Projets
                    </Link>
                </li>

                {/* Élément de navigation vers la page Contact */}
                <li>
                    <Link 
                        href="/contact"
                        className="hover:text-blue-600"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}