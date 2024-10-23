// tarefinha de casa numero 3️ Escrevendo as classes de um Jogo

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;

            case "guerreiro":
                ataque = "usou espada";
                break;

            case "monge":
                ataque = "usou artes marciais";
                break;

            case "ninja":
                ataque = "usou shuriken";
                break;

            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Merlin", 35, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");

mago.atacar();
guerreiro.atacar(); 
