url = "https://api24h.82.29.175.123.nip.io/api/intra/info/authentification/";

async function Connexion() {
    login = document.getElementById("login").value;
    pwd = document.getElementById("password").value;
    let json = '{"login":"'+login+'","password":"'+pwd+'"}'
    var rep = await fetch(this.url+"Oskour-1c532d49-9ac5",{
        method:"post",
        headers : {
            "Content-type": "application/json"
        },
        body : json
    });
    repJson = await rep.json();
    sessionStorage.setItem('nom') = repJson['nom'];
    sessionStorage.setItem('prenom') = repJson['prenom'];
    sessionStorage.setItem('droit') = repJson['droit'];
}