import { Veiculo } from "./veiculo";
import { IVeiculo } from "./interface";

export class Moto extends Veiculo implements IVeiculo {
    private tipo: string;

    constructor(marca: string, modelo: string, potencia: string, tipo: string) {
        super(marca, modelo, potencia, 6);
        this.tipo = tipo;
    }

    imprimir() {
        super.imprimir();
        console.log(`Tipo de moto: ${this.tipo}`);
    }
}