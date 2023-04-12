 class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já esta ligado`);
            return;
        }
        this.ligado = true;
        }
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} esta desligado`);
            return; 
        }
        this.ligado = false;
    }
 }

 class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor
        this.modelo = modelo;
    }
 }
 class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Alterou o metodo ligar.');
    }
 }
 

 const s1 = new Smartphone('iphone', 'Preto', 'X');
 const t1 = new Tablet('Ipad', true);
 t1.ligar();
 console.log(s1);
