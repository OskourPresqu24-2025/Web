const url = "https://api.24h.etiq-dijon.fr/Oskour-5bcbf55a-9660/";

const liste = ["wDKr8ldHYQJPBxPpFB+g"];
const listeUl = document.getElementById("listeDisparus");

for (const element of liste) {
    const rep = await fetch(url + element);
    const repJson = await rep.json();

    const newLi = document.createElement("li");
    newLi.innerHTML = repJson['nom'] + " " + repJson['prenom'];
    listeUl.appendChild(newLi);
}