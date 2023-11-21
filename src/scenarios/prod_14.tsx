/*
A: Salut B! Comment s'est passé ton week-end?

B: Salut A! Rien de spécial, juste un peu de repos. Et toi?

A: Pareil, tranquille. J'ai regardé quelques films.

B: Ah, sympa. J'ai fait une randonnée en montagne samedi, 20 km!

A: Wow, vraiment? Moi, j'ai marché jusqu'au parc, c'était bien aussi.

B: Le soir, j'ai dîné dans un restaurant étoilé, cuisine fusion.

A: Ah ouais? Moi, j'ai fait des pâtes à la maison.

B: Dimanche, j'ai fait du parachutisme. Adrénaline à fond!

A: Sérieux? Moi, j'ai fait une sieste l'après-midi.

B: Après le saut, j'ai rencontré une tribu amazonienne, expérience incroyable!

A: Haha, tu plaisantes, j'espère. J'ai joué à des jeux vidéo.

B: Non, vraiment. Ils m'ont initié à des rituels ancestraux.

A: Intéressant... J'ai fait du jardinage.

B: Ensuite, j'ai piloté un jet privé au-dessus des chutes du Niagara.

A: Tu me charries, là. J'ai juste lu un livre.

B: Le livre m'a inspiré à organiser une expédition sur l'Everest.

A: OK, là, tu forces un peu. J'ai fait du shopping.

B: J'ai acheté une île privée. On pourrait s'y retrouver cet été?

A: Arrête de plaisanter, B. Je vais à la salle de sport maintenant.

B: Cool. Moi, je construis ma propre salle de sport sur mon île.

A: Bon, j'arrête de te croire. À plus tard!

B: OK, à plus! Je m'en vais piloter mon hélicoptère.
*/
export class data {
    public static recipient = "Mec cool";
    public static default_delay = 4;
    public static all_data = [{
        text: "Salut ! Faut que je te raconte mon week-end !!!",
        from_me: false,
        time: 1,
        delay: 1,
        typing_duration: 1,
        is_neutral: false
    }, {
        text: "Yo ! Moi j'ai rien fait de spécial... Raconte !",
        typing_duration: 2,
        from_me: true,
    }, {
        text: "J'ai fait une randonnée en montagne samedi, 70 km ! Mais attends j'ai pas fini !",
        from_me: false,
    }, {
        text: "C'est tout ? Moi, j'ai marché jusqu'au parc, c'était bien aussi.",
        delay: 5.5,
        from_me: true,
    }, {
        text: "Le soir, j'ai dîné dans un restaurant étoilé, cuisine fusion. Et le Chef c'est ton voisin 🤯!",
        from_me: false,
    }, {
        text: "Ah ouais 🤣 ? Moi, j'ai fait des pâtes à la maison.",
        from_me: true,
    }, {
        text: "Dimanche, j'ai fait du parachutisme au dessus d'une île paradisiaque. Adrénaline à fond!",
        from_me: false,
    }, {
        text: "Sérieux ? Tu vends du rêve là 🤩 !",
        from_me: true,
    }, {
        text: "Après le saut, j'ai rencontré une tribu, expérience incroyable!",
        from_me: false,
    }, {
        text: "Haha, tu plaisantes j'espère. Moi j'ai joué à des jeux vidéo...",
        from_me: true,
    }, {
        text: "Non, vraiment. ca m'a plu alors j'ai acheté l'île. On pourrait s'y retrouver cet été ?",
        from_me: false,
    }, {
        text: "C'est trop là... Je vais à la salle de sport maintenant.",
        delay: 5.5,
        from_me: true,
    }, {
        text: "Cool. Moi, je construis ma propre salle de sport sur mon île.",
        from_me: false,
    }];
}