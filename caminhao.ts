import { Veiculo } from "./veiculo";
import { IVeiculo } from "./interface";

export class Caminhao extends Veiculo implements IVeiculo {
    private capacidadeCarga: number;

    constructor(marca: string, modelo: string, potencia: string, capacidadeCarga: number) {
        super(marca, modelo, potencia, 6); 
        this.capacidadeCarga = capacidadeCarga;
    }

    imprimir() {
        super.imprimir();
        console.log(`Capacidade de carga: ${this.capacidadeCarga} toneladas`);
    }
}