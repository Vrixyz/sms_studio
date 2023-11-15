/*
Moi:
Bonjour bébé … tu voudrais pas venir chez moi là maintenant ? 😜

Mon ex:
Coucou ma puce ! Pourquoi ? Qu’est ce qu’il se passe ? 

Moi: 
Rien de grave mais j’me reveille là et j’crois que j’ai une fuite💧… il me faudrait un tuyau bien ajustée. 

Mon ex: 
Ah beh tu sais que je ne suis pas très bricolo. Tu ferais mieux d’appeler un plombier. 🔧

Moi: 
Mais non ! 😅 Je suis toujours au lit … 

Mon ex: 
Habille-toi et appelle un professionnel ça sera mieux. 

Mon ex: 
Faut pas laisser trainer ce genre de fuite après ça peut faire des infiltrations. 

Moi: 
Tu comprends rien, je crois …. 😓

Mon ex: 
Peut-être mais je te l’ai dit je ne suis pas très bricolo. 

Moi: 
Pas très malin non plus … 😑

Mon ex: 
Ok sympa ! j’peux pas être doué dans tout, désolé ! 

Moi : 
🤦‍♀️
*/
export class data {
    public static recipient = "Anton";
    public static default_delay = 5;
    public static all_data = [{
        text: "Bonjour bébé … tu voudrais pas venir chez moi là maintenant ? 😜",
        from_me: true,
        time: 1,
        delay: 1,
        typing_duration: 2,
        is_neutral: false
    }, {
        text: "Coucou ma puce ! Pourquoi ? Qu’est ce qu’il se passe ?",
        from_me: false,
    }, {
        text: "Rien de grave mais j’me reveille là et j’crois que j’ai une fuite💧… il me faudrait un tuyau bien ajusté.",
        from_me: true,
    }, {
        text: "Ah beh tu sais que je ne suis pas très bricolo. Tu ferais mieux d’appeler un plombier. 🔧",
        from_me: false,
        delay: 5.5,
    }, {
        text: "Mais non ! 😅 Je suis toujours au lit …",
        from_me: true,
        delay: 5,
    }, {
        text: "Habille-toi et appelle un professionnel ça sera mieux.",
        from_me: false,
        delay: 5.5,
    }, {
        text: "Tu comprends rien, je crois …. 😓",
        from_me: true,
        delay: 5,
    }, {
        text: "Peut-être mais je te l’ai dit, je ne suis pas très bricolo.",
        from_me: false,
        delay: 5,
    }, {
        text: "Pas très malin non plus … 😑",
        from_me: true,
    }, {
        text: "Ok sympa ! j’peux pas être doué dans tout, désolé !",
        from_me: false,
        delay: 4,
    }, {
        text: "🤦‍♀️",
        typing_duration: 1,
        from_me: true,
        delay: 3,
    }, {
        text: "T'as raison je vais appeler quelqu'un d'autre 🍆",
        from_me: true,
        delay: 3,
    }];
}