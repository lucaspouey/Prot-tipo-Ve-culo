import { Veiculo } from "./veiculo";
import { IVeiculo } from "./interface";

export class Onibus extends Veiculo implements IVeiculo {
    private capacidadePassageiros: number; 

    constructor(marca: string, modelo: string, potencia: string, capacidadePassageiros: number) {
        super(marca, modelo, potencia, 6); 
        this.capacidadePassageiros = capacidadePassageiros;
    }

    imprimir() {
        super.imprimir();
        console.log(`Capacidade de passageiros: ${this.capacidadePassageiros}`);
    }
}