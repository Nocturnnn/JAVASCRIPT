class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 2;
    }
    DiminuirVolume(){
        this.volume -= 2;
    }
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 4));