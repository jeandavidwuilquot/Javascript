/*Exercice 1*/
const nbEnfant= 3;
const nom= "Marie";
const pays= "France";
const metier="développeur";

console.log(`Vous serez ${metier} et habiterez en ${pays} et marié à ${nom} avec ${nbEnfant} enfants`);

/*Exercice2*/
const annee = 2019;
let naissance = 1977;

console.log(annee - naissance);

/*Exercice3*/
let age =41
let ageMax=100
let food="tomates"
let consoFood=2
let b = age*ageMax*consoFood


console.log(`Il vous reste ${b} ${food} avant d'atteindre l'âge de ${ageMax}.`);

/*Exercice Langues*/
let langue =prompt("Quelle est votre langue maternelle?:");
let a="Français";
let b="Espagnol";
let c="Anglais";
if(langue=="Français"){
    alert("Bonjour tout le monde");
}
else if (langue=="Espagnol"){
    alert("Hola, Mundo");
}
else if (langue=="Anglais"){
    alert("Hello World");
}
else
alert("Je ne sais pas quelle langue vous parlez");

/*Exercice Score*/
let resultat =prompt("Quelle est votre score ?:");


if(resultat>=90){
    alert("Vous avez le rang A");
}
else if (resultat<90 && resultat >50){
    alert("Vous avez le rang B");
}
else {
    alert("Vous avez le rang C");
}
/*Exercice pluriel*/
let fruit="pomme";
let nbFruit=prompt("Combien de fruits avez vous?:");
if(nbFruit==1){
    alert(`Vous avez 1 ${fruit}`);
}
else if(nbFruit>1){
    alert(`Vous avez ${nbFruit} ${fruit}s`);
}
else{
    alert('Vas acheter des frites')
}
/*Function*/
var soustraction= function(a,b){
    return a-b;
}
console.log (soustraction(40,2))

var division= function(a,b){
    return a/b;
}
console.log (division(40,2))

var multiplication= function(a,b){
    return a*b;
}
console.log (multiplication(40,2))

function pourcentage(a,b){
    return a/100*b
 }
 console.log(pourcentage (50,10));

 function vitesse(a,b){
    return a/b
 }
 console.log(vitesse (50,10)+"km/h");

 /*Boucle1*/
 for(let i =0; i<20; i++){
    if (i%2 === 0){
        console.log((i) +"est pair");
    }
    else{
        console.log((i) + "est impair");
    }
    }
/*Boucle2*/
const nombre = 9;

console.log(`Table de multiplication de ${nombre}`);


for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}
/*Boucle3*/
for (let i = 0; i <= 100; i++) {
    if(i>90){
        console.log("Le grade est A")
    }
    else if(i>80){
       console.log("Le grade est B") 
    }
     else if(i>70){
       console.log("Le grade est C") 
  }
   else if(i>65){
       console.log("Le grade est D") 
  }
  else{
      console.log("Le grade est F") 
  }
  }
/*Boucle4*/ 
for (let i = 0; i <=5; i++) {
    if(i===0){
        console.log("*")
    }
    else if(i===1){
       console.log("**") 
    }
     else if(i===3){
       console.log("***") 
  }
   else if(i===4){
       console.log("****") 
  }
  else if (i===5){
      console.log("*****") 
  }
  }
/*Pyramide2*/
let etoile;
let etoiles=""
for (let i = 0; i <=5; i++) {
    etoile=etoiles
    etoiles=`${etoile} *`
    
        console.log(etoiles);
}   
  /*Tableau1*/
  let tab= [1,2,3,4,5,6,7,8,9];
let a= tab[0];
for(let i=0; i<tab.length;i++){
    a += tab[i];
    console.log(a);
}
/*Tableau2*/
let acteur= ["Bruce Willis", "Samuel L. Jackson","Robert De Niro"];
let phrase= ["Le premier est","Le deuxième est", "Le troisième est"]

for(let i=0;i<acteur.length;i++){
   console.log(phrase[i]+" "+acteur[i]);
}
/*Tableau3*/
let acteur= ["Mario","Luigi","Peach"];

let acteur2=[...acteur]
console.log(acteur[2])
acteur.push("Bowser");

console.log(acteur[3])

/*Math*/
let a=(Math.min(7, 5, -12, 6, 32, 18, 14, -2));
let b=(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));


console.log(a+b);

/*Math2*/
let floatBateau=10.4
let couleBateau=Math.ceil(floatBateau);
let voleBateau=Math.floor(floatBateau);

console.log(couleBateau);
console.log(voleBateau);

/*Math3*/
let min=O;
let max=100

let random= Math.floor(Math.random() * (max - min)) + min;
    

console.log(random);
/*Math4*/
let min=0;
let max=2;

let random= Math.floor(Math.random() * (max - min)) + min;
    

console.log(random);

/*Math5*/
let min=0;
let max=11;

let random= Math.floor(Math.random() * (max - min)) + min;
    

console.log(random);

/*Math6*/
let tab=["Goro", "Johnny Cage", "Kano", "Liu Kano", "Raiden", "Reptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]

let numRandom = Math.floor(Math.random()*tab.length);
let motRandom = tab[numRandom];
alert(motRandom);

/*Objet1*/
let Character={
    name:"Dax",  
    age: 41,
    items_to_give:["dague","potion de vie","casque"] 
   };
   
   for(let infos in Character){
       console.log(Character[infos]);
   }
   let itemRandom = Character.items_to_give[Math.floor(Math.random()*Character.items_to_give.length)];
    
console.log(itemRandom);

/*Objet2*/
let objetVendre = [{
    title: "Hache de guerre",
    physic: 60,
    magic: 20,
    minLevel: 12,
    available: true
}, {
    title: "Sceptre d'Obsidienne",
    physic: 10,
    magic: 70,
    minLevel: 12,
    available: true,
}, {
    title: "Fourchette de combat",
    physic: 2,
    magic: 1,
    minLevel: 1,
    available: true,
}, {
    title: "Epée du manchot",
    physic: 5,
    magic: 10,
    minLevel: 5,
    available: true
}]

for(let infos in objetVendre){
    console.log(objetVendre[infos]);
}
/*Objet3*/
let objetVendre = [{
    title: "Hache de guerre",
    physic: 60,
    magic: 20,
    minLevel: 12,
    available: true
}, {
    title: "Sceptre d'Obsidienne",
    physic: 10,
    magic: 70,
    minLevel: 12,
    available: true,
}, {
    title: "Fourchette de combat",
    physic: 2,
    magic: 1,
    minLevel: 1,
    available: true,
}, {
    title: "Epée du manchot",
    physic: 5,
    magic: 10,
    minLevel: 5,
    available: false,
}]

function showItemAvailable() {
    for (let i = 0; i < objetVendre.length; i++) {
        if (objetVendre[i].available === true){
            console.log(objetVendre[i]);
        }
    }
}
showItemAvailable();

function showItemlevel() {
    for (let i = 0; i < objetVendre.length; i++) {
        if (objetVendre[i].minLevel <=10){
            console.log(objetVendre[i]);
        }
    }
}
showItemlevel()

/*Objet4*/
let mainCharacter = {
    name: "Aria",
    level: 99,
    life: 455,
    weapon: {
        name: "Aiguille",
        damage: 115,
    },
    attack() {
     return (this.name + "" + this.weapon.name + "" + this.level * this.weapon.damage);
    
    }
    
};
console.log(mainCharacter.attack());

/*Juste prix*/
let min=20;
let max=80;
let nombre = function () {
    let valeur = Math.floor((Math.random() * (max - min + 1) + min));
    return valeur;
    }
let nb = nombre();



let msg="Entrer un chiffre entre 20 et 80:";
let essai="";

function check(nb){
do
{
essai=prompt(msg);
if(essai<nb)
msg="Plus haut";
else
msg="Plus bas";
}


while(essai!=nb)
alert("Tu as gagné")
}
check(nb)