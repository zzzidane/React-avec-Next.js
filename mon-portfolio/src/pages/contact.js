export default function Contact() {
    // Fonction de gestion du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        // Ajout d'envoi du formulaire
      console.log('Formulaire soumis')
    }
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        
        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="nom" className="block mb-2">Nom</label>
            <input
              type="text"
              id="nom"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md h-32"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
                    Envoyer
                </button>
            </form>
        </div>
    )
    }