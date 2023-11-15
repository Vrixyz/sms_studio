/*
Elle : 
Tu m'invites jamais au resto!

Lui : 
Ok on y va ce soir! Tu veux aller où?

Elle :
Enfin! Je pensais à un endroit romantique..?

Lui :
Ah j'annule le macdo 😉, Le Comptoir des mers on a jamais testé?

Elle : 
Des fruits de mer t'es sérieux je suis allergique...

Lui :
Ah oui euh La Bidoche ?

Elle :
Sympa mais avec les fêtes qui approchent ca fait pas un peu trop de viande?

Lui : 
Bon tu veux pas aller à la Tour d'Argent quand même..?

Elle
T'es gentil mais t'as pas autant d'argent!

Lui : 
T'as raison mais tu vaux tout l'or du monde, bon allez viens chez moi je te ferai une surprise

Elle : 
Du coup c'est encore pas un resto :o

*/
export class data {
    public static recipient = "Églantine";
    public static default_delay = 4;
    public static all_data = [{
        text: "😭 Tu m'invites jamais au resto!",
        from_me: false,
        time: 1,
        delay: 1,
        typing_duration: 2,
        is_neutral: false
    }, {
        text: "Ok on y va ce soir! Tu veux aller où?",
        from_me: true,
    }, {
        text: "Enfin! Je pensais à un endroit romantique ❤️..?",
        from_me: false,
    }, {
        text: "Ah j'annule le macdo 😉, Le Comptoir des mers on a jamais testé?",
        from_me: true,
        delay: 5.5,
    }, {
        text: "😡 Des fruits de mer t'es sérieux je suis allergique...",
        from_me: false,
        delay: 5,
    }, {
        text: "Ah oui euh La Bidoche ?",
        from_me: true,
        delay: 5.5,
    }, {
        text: "Sympa mais avec les fêtes qui approchent ca fait pas un peu trop de viande?",
        from_me: false,
        delay: 5,
    }, {
        text: "Bon tu veux pas aller à la Tour d'Argent quand même..?",
        from_me: true,
    }, {
        text: "T'es gentil mais t'as pas autant d'argent!",
        from_me: false,
    }, {
        text: "Tu vaux tout l'or du monde!",
        from_me: true,
        delay: 5,
    }, {
        text: "Mais t'as raison... allez viens chez moi je te ferai une surprise",
        from_me: true,
    }, {
        text: "Du coup c'est encore pas un resto 🫤",
        from_me: false,
    }];
}