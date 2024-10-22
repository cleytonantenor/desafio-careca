// tarefinha de casa
//  # Exercicio de numero 2️ Calculadora de partidas Rankeadas

 
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;

        case vitorias >= 10 && vitorias <= 20:
            nivel = "Bronze";
            break;

        case vitorias > 20 && vitorias <= 50:
            nivel = "Prata";
            break;

        case vitorias > 50 && vitorias <= 80:
            nivel = "Ouro";
            break;

        case vitorias > 80 && vitorias <= 90:
            nivel = "Diamante";
            break;

        case vitorias > 90 && vitorias <= 100:
            nivel = "Lendário";
            break;

        default:
            nivel = "Imortal";
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

calcularNivel(15, 5);
calcularNivel(80, 20); 
calcularNivel(105, 20); 
