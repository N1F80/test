// Script JavaScript pour le site de tutoriels méta jeux vidéo

// Exemple de fonction pour afficher un message lors du clic sur un lien
function showMessage() {
    alert("Cliquez sur un tutoriel pour en savoir plus !");
}

// Exemple de fonction pour changer la couleur de fond au survol d'un article
function changeBackground(element) {
    element.style.backgroundColor = "#ffc107";
}

// Exemple de fonction pour restaurer la couleur de fond après le survol d'un article
function restoreBackground(element) {
    element.style.backgroundColor = "#f9f9f9";
}

// Exemple d'utilisation d'événements pour appeler les fonctions ci-dessus
document.addEventListener("DOMContentLoaded", function() {
    // Ajoute un gestionnaire d'événement au clic sur les liens du menu de navigation
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", showMessage);
    });

    // Ajoute des gestionnaires d'événements pour le survol des articles
    var articles = document.querySelectorAll("article");
    articles.forEach(function(article) {
        article.addEventListener("mouseover", function() {
            changeBackground(article);
        });
        article.addEventListener("mouseout", function() {
            restoreBackground(article);
        });
    });
});
