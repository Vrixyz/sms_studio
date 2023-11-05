/*
Personne A (Julie): [16:23]
Salut… t’es la copine de Théo ? 
Personne B (Ana): [16:25]
Heu oui …t’es qui ? 
Personne A (Julie): [16:23]
La copine de Théo … 
Personne B (Ana): [14:30]
Super drôle… t’es qui ? 🙄
Personne A (Julie): [14:32]
La copine de Théo depuis 3 mois, je suis tombée sur ta page insta, c’est là que j’ai capté… 
Personne B (Ana): [14:35]
Tu sors vraiment avec mon mec ? 🤨
Personne A (Julie): [14:38]
Ou toi tu sors avec le mien… 
Personne A (Julie): [14:38]
PHOTO COUPLE 
Personne B (Ana): [22:41]
Je vais péter un plomb … 🤬
Personne A (Julie): [23:20]
J’ai eu la même réaction en découvrant ton compte insta
Personne A (Julie): [10:20]
T’es avec lui depuis combien de temps ?
Personne B (Ana): [23:20]
Ca fait 6 mois
Personne A (Julie): [10:20]
Je le trouvais chelou à cacher son tel quand on était ensemble.
Personne B (Ana): [23:20]
Il fait pareil avec moi… j’ai été trop conne ! 😨
Personne A (Julie): [10:20]
Mais attend … je crois qu’on est pas que toutes les deux. 
Personne A (Julie): [10:20]
J’ai trouvé un autre compte insta d’une fille qui le présente comme son mec
Personne B (Ana): [23:20]
J’hallucine 😱😱😱 … faut le faire payer !!!! 😠
*/
export class data {
    public static recipient = "Inconnu";
    public static all_data = [{
        text: "Salut… t’es la copine de Théo ?",
        from_me: false,
        time: 1,
        delay: 1,
        typing_duration: 1,
        is_neutral: false
    }, {
        text: "Heu oui… t’es qui ?",
        from_me: true,
    }, {
        text: "La copine de Théo…",
        from_me: false,
    }, {
        text: "Super drôle… t’es qui ? 🙄",
        from_me: true,
    }, {
        text: "La copine de Théo depuis 3 mois, je suis tombée sur ta page insta, c’est là que j’ai capté…",
        from_me: false,
    }, {
        text: "Tu sors vraiment avec mon mec ? 🤨",
        from_me: true,
        delay: 5,
    }, {
        text: "Ou toi tu sors avec le mien… ",
        from_me: false,
    }, {
        photo: true,
        from_me: false,
    }, {
        text: "Je vais péter un plomb 🤬",
        from_me: true,
        delay: 5.5,
    }, {
        text: "J’ai eu la même réaction en découvrant ton compte insta",
        from_me: false,
    }, {
        text: "T’es avec lui depuis combien de temps ?",
        from_me: false,
    }, {
        text: "Ca fait 6 mois",
        from_me: true,
    }, {
        text: "Je le trouvais chelou à cacher son tel quand on était ensemble.",
        from_me: false,
    }, {
        text: "Il fait pareil avec moi… j’ai été trop conne ! 😨",
        from_me: true,
    }, {
        text: "Mais attends… je crois qu’on n'est pas que toutes les deux.",
        from_me: false,
    }, {
        text: "J’ai trouvé un autre compte insta d’une fille qui le présente comme son mec",
        from_me: false,
    }, {
        text: "J’hallucine 😱😱😱 … faut le faire payer !!!! 😠",
        from_me: true,
        delay: 5.5
    }];
}