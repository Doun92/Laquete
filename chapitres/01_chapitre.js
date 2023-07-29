// Variables
const title = document.getElementById("titre")
const text = document.getElementById("texte")
const actions = document.getElementById("actions")
// Action template
//"<div><button></button></div>"
// Actions non genrées
bouton_maison = "<div>Tu préfères rester à la maison et attendre que l'aventure vienne à toi.<button>Rester à la maison</button></div>"
bouton_taverne = "<div>Tout le monde le sait, les tavernes sont des lieux de bavardage et de rumeurs. Tu y trouveras certainement ta première quête.<button>Aller à la taverne</button></div>"

function Tableau01(personnage) {
    //Titre
    title.innerHTML = "<h1>Un nouveau départ</h1>"

    //Description
    if (personnage.genre == "masc") {
        texte01 = `<div>Tu te trouves dans une village, ton village natal, qui est si pourri qu'il n'a pas de nom officiel.</div>
            <div>Tu t'ennuies fermement et décides, sur un coup de tête de devenir un aventurier.</div>
            <div>Que préfères-tu faire ?</div>`
        bouton_armu = "<div>Un aventurier n'est rien sans sa fidèle épée.<button>Aller chez l'armurier</button></div>"
        bouton_chemin = "<div>L'aventure vient à celui qui la provoque.<button>Quitter le village</button></div>"

    } else {
        texte01 = `<div>Tu te trouves dans une village, ton village natal, qui est si pourri qu'il n'a pas de nom officiel.</div>
            <div>Tu t'ennuies fermement et décides, sur un coup de tête de devenir une aventurière.</div>
            <div>Que préfères-tu faire ?</div>`
        bouton_armu = "<div>Une aventurière n'est rien sans sa fidèle épée.<button>Aller chez l'armurier</button></div>"
        bouton_chemin = "<div>L'aventure vient à celle qui la provoque.<button>qQitter le village</button></div>"
    }

    text.innerHTML = texte01

    //Actions
    actions.innerHTML = bouton_maison +
        bouton_armu +
        bouton_taverne +
        bouton_chemin
}