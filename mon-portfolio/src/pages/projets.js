export default function Projets() {
    const projets = [
        {
            id: 1,
            titre: "Projet 1",
            description: "Description détaillée du projet 1. Expliquez ici ce que vous avez réalisé.",
            technologies: ["React", "Next.js", "Bootstrap"],
            imageUrl: "/api/placeholder/400/300"
        },
        {
            id: 2,
            titre: "Projet 2",
            description: "Description détaillée du projet 2. Expliquez ici ce que vous avez réalisé.",
            technologies: ["JavaScript", "HTML", "CSS"],
            imageUrl: "/api/placeholder/400/300"
        },
        {
            id: 3,
            titre: "Projet 3",
            description: "Description détaillée du projet 1. Expliquez ici ce que vous avez réalisé.",
            technologies: ["React", "Next.js", "Bootstrap"],
            imageUrl: "/api/placeholder/400/300"
        },
    ]
    
    return (
        <div className="container py-5">
            <h1 className="mb-4">Mes Projets</h1>
            <div className="row g-4">
                {projets.map((projet) => (
                    <div key={projet.id} className="col-md-6 col-lg-4">
                        <div className="card h-100">
                            <div className="card-img-top bg-light d-flex align-items-center justify-content-center" 
                                style={{height: '200px'}}>
                                Image du projet
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{projet.titre}</h5>
                                <p className="card-text">{projet.description}</p>
                                <div className="d-flex flex-wrap gap-2">
                                    {projet.technologies.map((tech) => (
                                        <span key={tech} className="badge bg-light text-dark">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}