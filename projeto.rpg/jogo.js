
class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        
    }
}

class Habilidade{
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instanciar (CRIAR) os objetos
let hero = new Personagem("Astrid", "Heroina", 100, 100, 0);
let boss = new Personagem("Water demon", "Boss", 100, 0, 50);

// Preencher Status
document.getElementById("nome-heroina").textContent = `${hero.nome}`;
document.getElementById("titulo-heroina").textContent = `✨⚔️${hero.titulo}`;
document.getElementById("nome-boss").textContent = `${boss.nome}`;
document.getElementById("titulo-boss").textContent= `👹💧${boss.titulo}`;

let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "ATAQUE", 4, 0, 0),
    new Habilidade(2, "SKILL", 8, 10, 0),
    new Habilidade(3, "ULTIMATE", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-info");
    container.appendChild(btn);
}) 









