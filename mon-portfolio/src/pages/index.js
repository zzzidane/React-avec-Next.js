import Head from 'next/head'
import Image from 'next/image'

export default function Accueil() {
    return (
        <div className="container mx-auto px-4">
            {/* En-tête HTML de la page */}
            <Head>
                <title>Mon Portfolio - Accueil</title>
                <meta name="description" content="Portfolio de développeur web" />
            </Head>

            {/* Section présentation */}
            <section className="text-center py-20">
                <div className="relative mx-auto w-48 h-48 mb-8">
                    <Image
                        src="/images/"
                        alt="Photo de profil"
                        layout="fill"
                        className="rounded-full"
                        priority
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4">Harley Fedy NDOUYI</h1>
                <p className="text-xl text-gray-600 mb-8">Développeur Full-Stack Junior</p>
                <p className="max-w-2xl mx-auto text-gray-700">
                    Passionné par le développement et les nouvelles technologies
                </p>
            </section>

            {/* Section compétences */}
            <section className="py-12">
                <h2 className="text-2xl font-bold text-center mb-8">Mes Compétences</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {['HTML/CSS', 'JavaScript', 'React', 'Next.js'].map((competence) => (
                        <div key={competence} className="bg-gray-100 p-4 rounded-lg text-center">
                            {competence}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
