import { Veiculo } from "./veiculo";
import { Moto } from "./moto";
import { Carro } from "./carro";
import { Onibus } from "./onibus";
import { Caminhao } from "./caminhao";
import prompt from 'prompt-sync';

const teclado = prompt();

function criaVeiculo(): Veiculo {
    const tipoVeiculo = teclado('Qual tipo de veículo você deseja criar? (carro/moto/caminhao/onibus): ').toLowerCase();
    const marca = teclado('Digite a marca do veículo: ');
    const modelo = teclado('Digite o modelo do veículo: ');
    const potencia = teclado('Digite a potência do veículo: ');

    if (tipoVeiculo === 'carro') {
        const numeroPortas = +teclado('Digite o número de portas do carro: ');
        return new Carro(marca, modelo, potencia, numeroPortas); 
    } else if (tipoVeiculo === 'moto') {
        const tipoMoto = teclado('Digite o tipo da moto: ');
        return new Moto(marca, modelo, potencia, tipoMoto); 
    } else if (tipoVeiculo === 'caminhao') {
        const capacidadeCarga = +teclado('Digite a capacidade de carga do caminhão (em toneladas): ');
        return new Caminhao(marca, modelo, potencia, capacidadeCarga);
    } else if (tipoVeiculo === 'onibus') {
        const capacidadePassageiros = +teclado('Digite a capacidade de passageiros do ônibus: ');
        return new Onibus(marca, modelo, potencia, capacidadePassageiros);
    } else {
        console.log('Tipo de veículo inválido. Criando um veículo padrão.');
        return new Veiculo(marca, modelo, potencia, 5);
    }
}

console.log('######### Criação de Veículo #########');
const veiculo: Veiculo = criaVeiculo();

while (true) {
    console.log("############ MENU ############");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir Marcha");
    console.log("4 - Reduzir marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            veiculo.acelerar();
            break;
        case 2:
            veiculo.frear();
            break;
        case 3:
            veiculo.subirMarcha();
            break;
        case 4:
            veiculo.reduzirMarcha();
            break;
        case 5:
            veiculo.imprimir();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
}