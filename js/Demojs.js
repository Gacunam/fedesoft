/**
 * @argument salon 
 */

/**
 * Boolean
number
string
undefined
null
//operaciones
Boolean
number
 */


var edad = 70;
var peso = 67;
var latitud = 4.648913;

var listanombres = [
    'juan',
    'mario',
    'sofia',
    'giovanni',
    'david'
];

var listaedad = [
    23, 65, 23, 64, 34
];

var direccion = [
    'calle falsa 123',
    'calle siempre viva',
    'calle cartucho',
    'calle bronx'

];
var apellido = [
    'gonzalez',
    'piedrahita',
    'acuña',
    'martinez'
];

var malestudiante = [
    nombre = 'giovanni',
    apellido = 'acuña',
    edad = 28,
    casa = [
        {
            direccion: "calle falsa 123",
            viveaqui: false
        },
        {
            direccion: "avenida siempre viva",
            viveaqui: true
        },
        {
            direccion: "calle el cartucho",
            viveaqui: !false
        },
        {
            direccion: "calle bronx",
            viveaqui: !true
        }

    ]
];
//Operaciones con MATH

var aleatorio = Math.random() * 100;
var portencia = Math.pow(10, 3);
var logaritmo = Math.log10(1000);

console.log(aleatorio, portencia);
console.log(logaritmo);
//alert("logaritmo de 1000" + logaritmo);
console.log("NO se està verificando");

//for (var i = 0; i < direccion.length; i++) { console.log(direccion[i]); }

/**for (var i = 0; i <= 50; i = i + 2)
    {console.log(i);
} */
/*
for ( var indice in listanombres) {
    console.log(indice)
}
*/
for (var valor of listanombres) {
    console.log(valor)
}

var mifuncion = function (arg1, arg2, arg3) { return arg1 + arg2 + arg3; }
console.log(mifuncion(1, 2, 4));
console.log(mifuncion("a", 2, 4));

var espalidrome = function (palabra) { return palabra; }
var resultado= true;{

    var resultado1= espalidrome.split('');
    console.log(resultado1);
    
    
}

var listaPalindrome=["Somos",
"Ligar es ser agil",
"Oso",
"Arañara",
"Reconocer",
"Sometemos",
"Aibofobia",
"Oro",
"Se es o no se es",
"Se laminan animales",
"Anita la gorda lagartona no traga la droga latina",
"Odio la luz azul al oido",
"Amo la pacifica paloma",
"O rey  o joyero",
"Oiras orar a Rosario",
"Sor Rebecca hace berros",
"Anna",
"Yo de lo minimo le doy",
"A ti no  bonita",
"Anita lava la tina",
"Oi lo de mama  me dolio",
"Sometamos o matemos",
"La ruta natural",
"Isaac no ronca asi",
"Aman a Panama",
"82228 (un numero que es palindromo  pero tambien representa el numero de palindromos dados por el pianista Victor Carbajo)",
"¿Acaso comi mocos aca?",
"Asi le follo Felisa",
"A ser prosa ¡sorpresa!",
"No di eso  Poseidon",
"¡Otro coito  tio corto!",
"¡a babor! Ojete jorobaba",
"Nazi: ni vida divinizan",
"“A Dubai cedere” decia Buda",
"A mi monogamo mago no mima",
"Arroz a la dama da la zorra",
"Ajos alojaba bajo la soja",
"Anais repuso su persiana",
"Amaba la rosa a sor Alabama",
"Soñare arte de traer años",
"A la jirafa sana  safari jala",
"Alli  ni cocina ni cocinilla",
"Anularemos a la somera luna",
"Asi rimara poeta ateo para mi risa",
"O partes ese culo  o luces ese trapo",
"A tu padre le traere arte  lerda puta",
"Romano cagado coloco daga con amor",
"Se va su sonoro mozo moro  no sus aves",
"Siete melones al glase no le meteis",
"Su rival fuma cosas o camufla virus",
"Adan no catara banana barata con nada",
"Amigo no gima",
"Alli ves  Sevilla",
"Ali tomo tila",
"Arde ya la yedra",
"Alla cae diagrama y amarga idea calla",
"Ana  ilusa  atara la mala rata a su liana",
"Asi  Maria  raparas a Sara para ir a misa",
"La ruta nos aplica facil paso natural",
"No era mareo ni era marein  o era mareon",
"Oca pedorra jodio roido jarro de Paco",
"Sere ya soledad abobada de los ayeres",
"Yo he dado mala lana anal a la moda de hoy",
"Abajo mortecina madama ni cetro mojaba",
"Da del osado tocologo loco toda soledad",
"Adan no cebara alli racana vacia lusa rapaza para su laica vana carilla arabe con nada",
"Note como solo con amor la osa pelada mamada le paso al romano coloso moceton",
"Anote como Jose  de sobarles el rabo  se desojo  mocetona",
"Ella te dara detalle",
"Edipo lo pide",
"echele leche",
"Atar a la rata",
"Abuson  aca no suba",
"Adan no calla con nada",
"animo Romina",
"Odiosa  ¿has oido?",
"¿Subo tu auto o tu autobus?",
"Si  le dare una lanosa medalla de mason a la nuera de Lis",
"O sea  ¡¿ese peon azul  alado  no da la luz a Noe pese a eso?!",
"Reviver",
"Arenera",
"Recocer",
"Rapar",
"¡A la gorda drogala!",
"No deseo yo ese don",
"No traces en ese carton",
"La tomo como tal",
"atale  demoniaco Cain  o me delata",
"Anas uso tu auto Susana",
"Eso lo dira mi marido  lo se",
"Sarita Sosa es idonea odiseas o satiras",
"¡Y el alababa la ley!",
"Yo soy augur uruguayo  voy alla  alla voy. Augur uruguayo soy",
"Alli ceso tu sed  ¿Oyes eso  Jair amada? ¿Has oido a la odiosa hada Maria Jose? Se yo de su tosecilla",
"Sorbi libros",
"Somos asomos",
"A la luna dañad  anulala",
"Oso come cena  mas amanece mocoso",
"La turba brutal",
"A la ruda mona  tal platano  madurala",
"Nace por otoño  toro pecan",
"agil ligar  fragil liga.",
"Aire bisoño terso os retoño Siberia.",
"Raido sea mi cutis si tu cima es odiar.",
"A Jorge no da ese dogo deseado negro  ¡ja!",
"Salome  me molas.",
"Soborno con robos.",
"Amo idiota  mato idioma.",
"Al amar  aporto otro par ¡Amala!",
"O bebo lo vivo o vivo lo bebo.",
"Ame o poema."];
/**for(frace of listaPalindrome){
  console.log(esPalindrome(frace));
}*/
