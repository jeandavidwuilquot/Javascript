
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