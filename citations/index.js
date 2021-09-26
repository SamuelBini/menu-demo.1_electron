let citations = [
    {
        auteur : "Robert Lalonde",
        contenu : "Le bonheur est comme un papillon: il vole sans jamais regarder en arrière. "
    },

    {
        auteur : "Peter Drucker",
        contenu : "La meilleure façon de prédire l’avenir est de le créer. "
    },

    {
        auteur : "Robert Lalonde",
        contenu : "Le pessimiste dit : je croirai quand je le verrai. <br>L’optimiste dit : « Je le verrai quand je le croirai. »"
    },

    {
        auteur : "Martin Luther King",
        contenu : "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement."
    },

    {
        auteur : "Proverbe",
        contenu : "Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse."
    },

    {
        auteur : "Confucius",
        contenu : "Vous ne trouverez jamais ce que vous ne cherchez pas."
    },

    {
        auteur : "Michael Aguilar",
        contenu : "Si vous pensez que vous ne valez pas grand-chose, vous ne trouverez personne pour augmenter votre prix."
    },

    {
        auteur : "Francis Scott Fitzgerald",
        contenu : "La sagesse suprême, c’est d’avoir des rêves assez grands pour ne pas les perdre de vue pendant qu’on les poursuit."
    },

    {
        auteur : "François Mauriac",
        contenu : "Notre vie vaut ce qu’elle nous a coûté d’efforts."
    },

    {
        auteur : "Vidal Sassoon",
        contenu : "Le seul endroit où le succès précède le travail est dans le dictionnaire."
    },

    {
        auteur : "Joanne K.Rowling",
        contenu : "Ce sont nos choix qui montrent qui nous sommes, bien  plus que nos capacités."
    },

    {
        auteur : "Marcel Proust",
        contenu : "On peut tout ce qui ne dépende que de notre volonté."
    },

    {
        auteur : "Léon Trotsky",
        contenu : "La persévérance, c’est ce qui rend l’impossible possible, le possible probable et le probable réalisé."
    },

    {
        auteur : "Hegel",
        contenu : "Rien de grand ne s’est accompli sans passion."
    },

    {
        auteur : "Sénèque",
        contenu : "En suivant le chemin qui s’appelle plus tard, nous arrivons sur la place qui s’appelle jamais."
    },

    {
        auteur : "André Maurois",
        contenu : "Le monde n’a progressé que grâce aux choses impossibles qui ont été réalisées."
    },

    {
        auteur : "Charles Darwin",
        contenu : "Les espèces qui survivent ne sont pas les espèces les plus fortes, ni les plus intelligentes, mais celles qui s’adaptent le mieux aux changements."
    },
    
    {
        auteur : "Winston Churchill",
        contenu : "Agissez toujours comme s’il était impossible d’échouer."
    }
];









function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

(function () {
    let nbre = rand(0, citations.length);
    let citation = citations[nbre];

    document.getElementById("citation").innerHTML = "\"\" " + citation["contenu"] + " \"\"";
    document.getElementById("auteur").innerHTML = citation["auteur"];

}) ();

setInterval(function () {
    let nbre = rand(0, citations.length);
    let citation = citations[nbre];

    document.getElementById("citation").innerHTML = "\"\" " + citation["contenu"] + " \"\"";
    document.getElementById("auteur").innerHTML = citation["auteur"];

}, 10000);