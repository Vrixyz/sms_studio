/*
Moi:
Hello, ça te dirait un p’tit ciné ? 🎬 

Léa:
Oui carrément ! Voir quoi ? 

Moi: 
Je pensais au dernier Marvel 🦸‍♂️

Léa: 
Roh ouais trop bien ! Qui vient aussi ? 

Moi: 
Heu … pour le moment y’a que toi et moi  😗

Léa: 
Ah … Les autres ont pas encore répondu ? 🤨

Moi : 
Je ne leur ai pas demandé 🙄

Léa : 
Ok … beh j’envoie un message à Julia et Thea de mon côté pour savoir si elles veulent venir

Moi : 
En fait, je pensais qu’on pouvait y aller que nous deux ☺️

Léa :  
Mdr beh pourquoi ? Attends tu m’invites en date là ? 😱

Moi : 
Je sais pas si c’est un date mais juste pour qu’on passe un peu de temps tous les deux 😚

Léa : 
Heu Rafael, je t’arrête tout de suite, on est potes et c’est tout. 🙅‍♀️

Moi : 
Ok 💔 j’envoie un sms aux autres …

*/
export class data {
    public static recipient = "Léa";
    public static default_delay = 4;
    public static all_data = [{
        text: "Hello, ça te dirait un p’tit ciné ? 🎬",
        from_me: true,
        time: 1,
        delay: 1,
        typing_duration: 1,
        is_neutral: false
    }, {
        text: "Oui carrément ! Voir quoi ?",
        typing_duration: 2,
        delay: 3.5,
        from_me: false,
    }, {
        text: "Je pensais au dernier Marvel 🦸‍♂️",
        typing_duration: 2,
        from_me: true,
    }, {
        text: "Roh ouais trop bien ! Qui vient aussi ?",
        from_me: false,
    }, {
        text: "Heu … pour le moment y’a que toi et moi 😗",
        from_me: true,
    }, {
        text: "Ah … Les autres ont pas encore répondu ? 🤨",
        from_me: false,
    }, {
        text: "Je ne leur ai pas demandé 🙄",
        from_me: true,
    }, {
        text: "Ok … beh j’envoie un message à Julia et Thea de mon côté pour savoir si elles veulent venir",
        from_me: false,
    }, {
        text: "En fait, je pensais qu’on pouvait y aller que nous deux ☺️",
        from_me: true,
        delay: 5.5,
    }, {
        text: "Mdr beh pourquoi ? Attends tu m’invites en date là ? 😱",
        from_me: false,
    }, {
        text: "Je sais pas si c’est un date mais juste pour qu’on passe un peu de temps tous les deux 😚",
        from_me: true,
    }, {
        text: "Heu Rafael, je t’arrête tout de suite, on est potes et c’est tout. 🙅‍♀️",
        delay: 5.5,
        from_me: false,
    }, {
        text: "Ok 💔 j’envoie un sms aux autres…",
        from_me: true,
    }];
}