let x=parseInt(prompt("Entrez votre pointure:"));
let y=parseInt(prompt("Entrez votre date naissance:"));

function operation(){
  var resultat=parseInt(x*2 + 5) *50-y +1766;
  return resultat;
}
alert(operation(x,y));