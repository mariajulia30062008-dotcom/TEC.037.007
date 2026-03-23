
class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        // verificar se tem mana/energia
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
                alvo.hp -= habilidade.dano;
                //Debitar mana
                if (habilidade.custo > 0) {
                    this.mana -= habilidade.custo;
                    this.energia += 50;
                }
                //esvaziar energia
                if (habilidade.energia > 0) {
                    this.energia = 0;
                }
                return `${this.nome} usou ${habilidade.nome}`;
        } else {
            return `Sem mana para usar ${habilidade.nome}`;
        }

    }
    boss_atacar(alvo){
        if (this.energia == 100){
            alvo.hp -= 15;
            this.energia = 0;
        } else{
            this.energia += 50;
        }
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
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
document.getElementById("titulo-boss").textContent = `👹💧${boss.titulo}`;
// atualizar as barras de vida
const atualizarInterface = (mensagem) => {
    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("en-boss").value = boss.energia;
}

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
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab);
        atualizarInterface(mensagem);
        boss.boss_atacar(hero);
    }
});











