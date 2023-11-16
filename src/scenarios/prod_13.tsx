/*
Mon mari:
Tu rentres pas ce soir ? 😔

Moi: 
Je ne sais pas encore … 

Mon mari: 
Tu fais encore la tête pour ce qu’il s’est passé hier soir ? 🫤

Moi: 
Je « fais pas la tête » mais je ne te fais plus confiance  

Mon mari: 
Oui j’ai un peu dépassé les bornes, je m’excuse. 

Moi : 
Un peu ? 😦

Mon mari : 
Pardon ! J’avais bu 2-3 bières avec Jo avant de rentrer et t’as commencé direct en m’engueulant quand je suis rentré. T’as cherché aussi…

Moi : 
J’ai cherché à me faire encore frapper parce que je t’ai demandé pourquoi tu rentrais à cette heure-ci ? 

Mon mari :  
C’est pas ce que j’ai dit. 😤 Allez arrête ! J’tai dit pardon tu veux quoi de plus ? 

Moi : 
Je veux être sûre que plus jamais ça ne se reproduira

Mon mari : 
Je te le promets ! 💕 Allez rentre maintenant. 

Moi : 
Bon ok 🙄… j’arrive dans 15 min

Mon mari : 
Ok, on mangera quoi ?

*/
export class data {
    public static recipient = "Mon mari ❤️";
    public static default_delay = 4;
    public static all_data = [{
        text: "Tu rentres pas ce soir ? 😔",
        from_me: false,
        time: 1,
        delay: 1,
        typing_duration: 1,
        is_neutral: false
    }, {
        text: "Je ne sais pas encore …",
        typing_duration: 2,
        delay: 3.5,
        from_me: true,
    }, {
        text: "Tu fais encore la tête pour ce qu’il s’est passé hier soir ? 🫤",
        typing_duration: 2,
        delay: 3.5,
        from_me: false,
    }, {
        text: "Je « fais pas la tête » mais je ne te fais plus confiance",
        from_me: true,
    }, {
        text: "Oui j’ai un peu dépassé les bornes, je m’excuse.",
        from_me: false,
    }, {
        text: "Un peu ? 😦",
        from_me: true,
    }, {
        text: "Pardon ! J’avais bu 2-3 bières avec Jo avant de rentrer et t’as commencé direct en m’engueulant quand je suis rentré. T’as cherché aussi…",
        from_me: false,
    }, {
        text: "J’ai cherché à me refaire frapper parce que je t’ai demandé pourquoi tu rentrais à cette heure-ci ?",
        from_me: true,
        delay: 6,
    }, {
        text: "C’est pas ce que j’ai dit. 😤 Allez arrête ! J’tai dit pardon tu veux quoi de plus ?",
        from_me: false,
        delay: 5.5,
    }, {
        text: "Je veux être sûre que plus jamais ça ne se reproduira",
        from_me: true,
    }, {
        text: "Je te le promets ! 💕 Allez rentre maintenant.",
        from_me: false,
    }, {
        text: "Bon ok 🙄… j’arrive dans 15 min",
        delay: 5.5,
        from_me: true,
    }, {
        text: "Ok, on mangera quoi ?",
        from_me: false,
    }];
}