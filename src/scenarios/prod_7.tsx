/*
Moi:
Y’a un truc qu’on a pas réglé.

Mon ex:
Quoi encore ? Arrête de chercher des excuses pour continuer à m’écrire. 

Moi: 
J'ai réfléchi, je veux la garde du chat. Il sera mieux avec moi. 🐱

Mon ex: 
Bien sûr, tu penses toujours tout savoir. 😤 Le chat est autant à moi qu'à toi, et tu le sais.

Moi: 
C'est moi qui m'en suis toujours occupé. C’est évident qu'il doit rester avec moi.

Mon ex: 
Tu n'es pas la seule à t'en être occupée. Tu ne peux pas simplement décider de tout.😡 On partagera la garde, point.

Moi: 
Non, c'est hors de question. 🙅‍♀️ Tu ne faisais que le câliner de temps en temps. Il a besoin de stabilité.

Mon ex: 
Stabilité ? C'est marrant venant de toi. 😂 Tu veux juste me priver du chat par pure rancœur.

Moi: 
Écoute, c'est moi qui prends les décisions maintenant. Adieu. 👋

Mon ex: 
Va te faire voir. J'irai devant le juge s'il le faut. On verra qui gagnera. 😠

*/
export class data {
    public static recipient = "Mon ex";
    public static default_delay = 5;
    public static all_data = [{
        text: "Y’a un truc qu’on a pas réglé.",
        from_me: true,
        time: 1,
        delay: 1,
        typing_duration: 2,
        is_neutral: false
    }, {
        text: "Quoi encore ? Arrête de chercher des excuses pour continuer à m’écrire.",
        from_me: false,
    }, {
        text: "J'ai réfléchi, je veux la garde du chat. Il sera mieux avec moi. 🐱",
        from_me: true,
    }, {
        text: "Bien sûr, tu penses toujours tout savoir. 😤 Le chat est autant à moi qu'à toi, et tu le sais.",
        from_me: false,
    }, {
        text: "C'est moi qui m'en suis toujours occupé. C’est évident qu'il doit rester avec moi.",
        from_me: true,
    }, {
        text: "Tu n'es pas la seule à t'en être occupée. Tu ne peux pas simplement décider de tout.😡 On partagera la garde, point.",
        from_me: false,
        delay: 5.5,
    }, {
        text: "Non, c'est hors de question. 🙅‍♀️ Tu ne faisais que le câliner de temps en temps. Il a besoin de stabilité.",
        from_me: true,
        delay: 6.5,
    }, {
        text: "Stabilité ? C'est marrant venant de toi. 😂 Tu veux juste me priver du chat par pure rancœur.",
        from_me: false,
        delay: 5.5,
    }, {
        text: "Écoute, c'est moi qui prends les décisions maintenant. Adieu. 👋",
        from_me: true,
    }, {
        text: "Va te faire voir. J'irai devant le juge s'il le faut. On verra qui gagnera. 😠",
        from_me: false,
        delay: 5,
    }];
}