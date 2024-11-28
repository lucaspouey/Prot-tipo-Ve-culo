import { IVeiculo } from "./interface";

export class Veiculo implements IVeiculo {
    protected marca: string;
    protected modelo: string;
    protected potencia: string;
    protected numeroMarchas: number;
    protected marchaAtual: number;
    protected neutro: boolean;
    protected velocidadeAtual: number;
    protected combustivelRestante: number;
    protected historicoOperacoes: string[];
    protected limitesVelocidade: number[];
    

    constructor(marca: string, modelo: string, potencia: string, numeroMarchas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.numeroMarchas = numeroMarchas;
        this.marchaAtual = 0;
        this.neutro = true;
        this.velocidadeAtual = 0;
        this.combustivelRestante = 100;
        this.historicoOperacoes = [];
        this.limitesVelocidade = this.definirLimitesVelocidade();
    }

    protected definirLimitesVelocidade(): number[] {
        const limites: number[] = [0];
        for (let i = 1; i <= this.numeroMarchas; i++) {
            limites.push(i * 20); 
        }
        return limites;
    }

    acelerar() {
        if (this.neutro) {
            console.log('Não é possível acelerar, o veículo está em neutro.');
        } else {
            const incremento = this.marchaAtual * 5;
            const limiteAtual = this.limitesVelocidade[this.marchaAtual];
            if (this.combustivelRestante > 0) {
                const novaVelocidade = this.velocidadeAtual + incremento;
                if (novaVelocidade > limiteAtual) {
                    this.velocidadeAtual = limiteAtual;
                    console.log(`Acelerando... Velocidade limitada ao máximo da marcha ${this.marchaAtual}: ${this.velocidadeAtual} km/h.`);
                } else {
                    this.velocidadeAtual = novaVelocidade;
                    console.log(`Acelerando... Velocidade atual: ${this.velocidadeAtual} km/h.`);
                }
                this.combustivelRestante -= this.marchaAtual * 0.5;
                console.log (`Combustivel Restante: ${this.combustivelRestante}`)
                this.historicoOperacoes.push(`Acelerou para ${this.velocidadeAtual} km/h.`);
                if (this.combustivelRestante <= 10) {
                    console.log('Atenção: Nível de combustível muito baixo!');
                }
            } else {
                console.log('Sem combustível! Não é possível acelerar.');
            }
        }
    }

    frear() {
        const decremento = this.velocidadeAtual >= 10 ? 10 : this.velocidadeAtual;
        this.velocidadeAtual -= decremento;
        console.log(`Freando... Velocidade atual: ${this.velocidadeAtual} km/h.`);
        this.historicoOperacoes.push(`Freou para ${this.velocidadeAtual} km/h.`);
    }

    subirMarcha() {
        if (this.marchaAtual < this.numeroMarchas - 1) {
            this.marchaAtual++;
            this.neutro = false;
            console.log(`Subiu para a marcha ${this.marchaAtual}.`);
            this.historicoOperacoes.push(`Subiu para a marcha ${this.marchaAtual}.`);
        } else {
            console.log('Já está na marcha máxima.');
        }
    }

    reduzirMarcha() {
        if (this.marchaAtual > 0) {
            this.marchaAtual--;
            if (this.marchaAtual === 0) {
                this.neutro = true;
            }
            console.log(`Reduziu para a marcha ${this.marchaAtual}.`);
            this.historicoOperacoes.push(`Reduziu para a marcha ${this.marchaAtual}.`);
        } else {
            console.log('Já está na marcha mínima (neutro).');
        }
    }

    imprimir() {
        console.table({
            Marca: this.marca,
            Modelo: this.modelo,
            Potência: this.potencia,
            "Número de Marchas": this.numeroMarchas,
            "Marcha Atual": this.marchaAtual,
            "Velocidade Atual (km/h)": this.velocidadeAtual,
            "Combustível Restante (%)": this.combustivelRestante.toFixed(2),
            "Neutro": this.neutro ? "Sim" : "Não",
            "Limite de Velocidade (km/h)": this.limitesVelocidade[this.marchaAtual]
        });
        console.log("Histórico de Operações:", this.historicoOperacoes.join(" | "));
    }
}
