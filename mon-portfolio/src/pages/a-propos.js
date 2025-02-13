export default function APropos() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">À Propos de Moi</h1>
        
            {/* Section parcours */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Mon Parcours</h2>
                    <p className="text-gray-700 mb-4">
                        [Décrivez votre parcours professionnel et académique ici]
                    </p>
            </section>
        
            {/* Section objectifs */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Mes Objectifs</h2>
                    <p className="text-gray-700">
                        [Décrivez vos objectifs professionnels ici]
                    </p>
            </section>
        </div>
    )
}