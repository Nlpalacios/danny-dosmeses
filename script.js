const frases = [
    "Quiero acompañarte y verte cumplir todas tus metas",
    "Mereces todo el amor del mundo",
    "Siempre te extrañoo",
    "El momento mas bonito de mi dia es cuando estamos juntos",
    "Quiero esforzarme siempre por hacerte feliz",
    "Espero cumplas todo lo que te propones eres muuuy capaz",
    "Eres la mejor",
    "La mas bonita",
    "La mas inteligente",
    "La mas graciosa",
    "Nunca pense tener algo asi, ni mucho menos sentir tanto como lo que siento por ti",
    "Te amooooooo",
    "Se que tenemos mucho que mejorar, pero quisiera hacerlo junto a ti",
    "Gracias por permitirme estar contigo estos dos meses",
    "Amor si tu no me odiaras, que te gustaria hacer?",
    "Amo tu rostro",
    "Amo tu lunar",
    "Amo tus ojos",
    "Amo tus labios",
    "Amo tus manos",
    "Amo lo inteligente que eres",
    "Amo que me expliques tus pensamientos, tu forma de ver la vida",
    "Amo tu risa",
    "Amo tu sonrisa",
    "Amo escuchar tu voz",
    "60 mensajitos por nuestros 60 dias juntos",
    "Quiero que veas estos mensajes para que nunca dudes de lo que siento por ti",
    "Amo lo reciproco que somos",
    "Amo como cantas",
    "Cada dia te amo mas",
    "Haria todo una y mil veces mas solo por tener la oportunidad de tenerte",
    "Me siento tan amado con tus comentarios, con tus miradas, que espero sientas lo mismo al verme",
    "Gracias por enseñarme tanto",
    "Gracias por apoyarme tanto",
    "Amo tus abrazos",
    "Amo tus besos",
    "Amo tus caricias",
    "Amo tu energia",
    "Amo tus frases",
    "Amo los escenarios hipoteticos que siempre nos hacemos",
    "Amo tus mensajes",
    "Amo hacer llamada contigo",
    "Amo que para nosotros nunca es suficiente el tiempo que nos vemos",
    "Amo cuando me dices que estas brava y consentirte",
    "Gracias por motivarme cada dia",
    "Gracias por siempre hacer de los momentos malos, algo mucho mejor",
    "Amo tus chistes",
    "Amo tu creatividad",
    "Gracias por ser atenta conmigo",
    "Amo como nos coqueteamos",
    "Amo reir contigo",
    "Amo estar contigo y decir techo techo techo",
    "Amo tu cabello",
    "Amo tu gusto por los musicales",
    "Amo cuando me hablas de lo que te apasiona",
    "Gracias por tanto",
    "Eres la mejor y espero siempre estes segura de que lo eres",
    "Eres perfecta",
    "Eres mas que suficiente",
    "Solo espero si algun dia no estoy a tu lado nunca esperes ni aceptes menos de alguien, porque mereces que alguien se esfuerce porque eres lo mejor que le va a pasar",  
]

const fotos = [
    "img/04d7abbd-d44e-4422-95b0-84b68fc06f5f.jpg",
    "img/1c99bfbc-f633-4b6e-94ea-d92a71cbba90.jpg",
    "img/20251211_154206.jpg",
    "img/20251211_183541.jpg",
    "img/20251221_235427.jpg",
    "img/20260106_185651.jpg",
    "img/59570f23-0344-418c-8d96-4a6a8678c843.jpg",
    "img/8513b543-d52f-457a-b67b-597a57e3d2d7.jpg",
    "img/8f25e8ff-c994-4d53-ba6b-bcfe5f4f040c.jpg",
    "img/c8a20eda-cb34-44bb-8a00-1df6a1fe97d4.jpg",
    "img/IMG_0198.jpg",
    "img/IMG_0390.jpg",
    "img/IMG_1473.jpg",
    "img/IMG_1483.jpg",
    "img/IMG_1484.jpg",
    "img/IMG_1512.jpg",
    "img/IMG_1517.jpg",
    "img/IMG_1520.jpg",
    "img/IMG_1560.jpg",
    "img/IMG_1566.jpg",
    "img/IMG_1570.jpg",
    "img/IMG_1572.jpg",
    "img/IMG_1785.jpg",
    "img/IMG_1788.jpg",
    "img/IMG_1789.jpg",
    "img/IMG_1842.jpg",
    "img/IMG_1861.jpg",
    "img/IMG_1891.jpg",
    "img/IMG_1909.jpg",
    "img/IMG_1910.jpg",
    "img/IMG_1928.jpg",
    "img/IMG_1932.jpg",
    "img/IMG_1936.jpg",
    "img/IMG_1952.jpg",
    "img/IMG_1989.jpg",
    "img/IMG_1990.jpg",
    "img/IMG_1992.jpg",
    "img/IMG_1993.jpg",
    "img/IMG_1994.jpg",
    "img/IMG_2027.jpg",
    "img/IMG_2163.jpg",
    "img/IMG_2236.jpg",
    "img/IMG_2237.jpg",
    "img/IMG_2240.jpg",
    "img/IMG_2432.jpg",
    "img/IMG_2433.jpg",
    "img/IMG_2434.jpg",
    "img/IMG_2444.jpg",
    "img/IMG_2445.jpg",
    "img/IMG_2465.jpg",
    "img/IMG_2467.jpg"
];

const frasesIniciales = [
    "Te amo muchoooo mucho amor",
    "Felices dos meses, espero sean muchos mas",
    "Al amor de mi vida"
]

const content = document.getElementById("content");

let photosIndex = 0;
let initialIndex = 0;

let probabilityText = 60;
let initialPhrases = false;

let frasesMezcladas = [...frases].sort(() => Math.random() - 0.5);
let indiceFrase = 0;

function showItem()
{
    if (!initialPhrases)
    {
        const item = frasesIniciales[initialIndex];
        content.innerHTML = `<p>${item}</p>`;
        return
    }

    let probability = Math.floor(Math.random() * 100);

    if (probability < probabilityText)
        {
            const item = frasesMezcladas[indiceFrase];
            content.innerHTML = `<p>${item}</p>`;

            indiceFrase++;

            if (indiceFrase >= frasesMezcladas.length) {
        frasesMezcladas = [...frases].sort(() => Math.random() - 0.5);
        indiceFrase = 0;}
    }
    else
    {
        const foto = fotos[photosIndex];
        content.innerHTML = `<img src="${foto}">`;
        photosIndex++;

        if (photosIndex >= fotos.length)
        {
                photosIndex = 0;
        }
    }
}

showItem();

document.body.addEventListener("click",()=>{
    showItem();

    if (!initialPhrases){
        initialIndex++

        if (initialIndex >= frasesIniciales.length)
            initialPhrases = true;
    }
});