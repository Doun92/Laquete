const subButton = document.getElementById('submit_button');

// Détermine le nom du personnage
// La fonction supprime ensuite l'interface de création.
function creationPerso() {
    nom = document.getElementById("form_nom").value
    genre = document.getElementById("genre_liste").value

    personnage = {
        "nom": nom,
        "genre": genre,
        "vie": 100,
        "pièces": 30,
        'état': "normal",
        "arme": ""
    }

    let formulaire_début = document.getElementById("formulaire_début")
    while (formulaire_début.hasChildNodes())
        formulaire_début.removeChild(formulaire_début.firstChild)

    Tableau01(personnage)
    return personnage
}
let personnage = subButton.addEventListener('click', creationPerso, false);
