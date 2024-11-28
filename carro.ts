import { Veiculo } from "./veiculo";
import { IVeiculo } from "./interface";

export class Carro extends Veiculo implements IVeiculo {
    private numeroPortas: number;

    constructor(marca: string, modelo: string, potencia: string, numeroPortas: number) {
        super(marca, modelo, potencia, 5);
        this.numeroPortas = numeroPortas;
    }

    imprimir() {
        super.imprimir();
        console.log(`Número de portas: ${this.numeroPortas}`);
    }
}