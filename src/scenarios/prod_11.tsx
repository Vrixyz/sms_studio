/*
Elle : 
Tout va bien ?

Lui : 
Oui ca va mais.. j'ai fait un tâche sur ton coussin chat...

Elle :
Ah je te laisse 2 jours et voilà... comment t'as fait ton compte ?

Lui :
Oui je suis bon à rien sans toi ! Je voulais rattraper le chat qui courait après un cafard...

Elle : 
Un cafard ? mais c'est dégeu...

Lui :
Oui bref... On en a plus maintenant, tu sais Madeleine m'a prêté ses crapauds ils ont tout bouffé.

Elle :
Quoi ? Je t'avais dit de plus la voir elle !

Lui : 
Oh t'inquiètes elle partira quand tu reviens :D

Elle :
Mais t'es sérieux elle dort chez nous là ?

Lui : 
Ouai mais c'est OK J'ai changé nos draps quand même :)

Elle : 
Dans NOTRE LIT ?

*/
export class data {
    public static recipient = "Tom";
    public static default_delay = 4.5;
    public static all_data = [{
        text: "Ca va mon coeur ton week-end solo à la maison sans moi?",
        from_me: true,
        time: 1,
        delay: 1,
        typing_duration: 1,
        is_neutral: false
    }, {
        text: "Oui ca va mais.. 😕 j'ai fait une tâche sur ton coussin préféré...",
        from_me: false,
    }, {
        text: "oh non...",
        delay: 4.5,
        typing_duration: 2,
        from_me: true,
    }, {
        text: "je te laisse 2 jours et voilà... comment t'as fait ton compte ?",
        from_me: true,
        delay: 2.5,
        typing_duration: 2.5,
    }, {
        text: "Oui je suis bon à rien sans toi ! ❤️",
        from_me: false,
    }, {
        text: "Je voulais rattraper le chat qui courait après un cafard...",
        from_me: false,
        delay: 4,
    }, {
        text: "Un cafard ? 🤮 C'est dégueu!!",
        from_me: true,
    }, {
        text: "Oui bref... On en a plus maintenant, tu sais Madeleine m'a prêté ses crapauds ils ont tout bouffé.",
        from_me: false,
    }, {
        text: "Quoi ? 😠 Je t'avais dit de plus la voir cette allumeuse !",
        from_me: true,
        delay: 5.5,
    }, {
        text: "Oh t'inquiètes elle partira quand tu reviens 👍",
        from_me: false,
    }, {
        text: "Mais t'es sérieux elle dort chez nous là ???",
        from_me: true,
    }, {
        text: "Ouai mais c'est OK J'ai changé nos draps quand même 😊",
        from_me: false,
    }, {
        text: "😡 Dans NOTRE LIT ?",
        from_me: true,
    }];
}