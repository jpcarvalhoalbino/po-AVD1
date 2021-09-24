class numero1{

        private _produto:string;
        private _preco:number;
        private _quantidade:number;


    constructor(produto:string, preco:number,quantidade:number){
        this._produto=produto;
        this._preco=preco;
        this._quantidade=quantidade;
    }

        public get produto(){
          return this._produto
        }

        public get preco(){
            return this._preco
        }

        public get quantidade(){
            return this._quantidade
        }


        public set produto(produto:string){
            if(produto.trim()===""){
                throw new Error('espaço em branco' )
            }
        }

        public set preco(preco:number){
            if(preco===0){
                throw new Error('preco invalido')
            }
        }

        public set quantidade(quantidade:number){
            if(quantidade===0){
                throw new Error('quantidade invalido')
            }
        }

        public calculadesconto(){
            if(this._quantidade=10){
                return this._preco;
            }
        }


        public desconto(): number {
            let desconto = 0;
            if (this.quantidade <= 10) {
              desconto = 0;
              return desconto;
            } else if (this.quantidade >= 11 && this.quantidade <= 20) {
              desconto = 0.1;
              return desconto;
            } else if (this.quantidade >= 21 && this.quantidade <= 50) {
              desconto =  0.20;
              return desconto;
            }
        
            desconto = 0.25;
            return desconto;
          }

          public precoquantidade(): number {
            const precoTotal = this.quantidade * this.preco ;
            if (this.quantidade <= 10) {
              return precoTotal;
            } else if (this.quantidade >= 11 && this.quantidade <= 20) {
              return precoTotal - (precoTotal * this.desconto());
            } else if (this.quantidade >= 21 && this.quantidade <= 50) {
              return precoTotal - (precoTotal * this.desconto())
            }
        
            return precoTotal - (precoTotal * this.desconto());
          }
        
          
}

try {
    const compras = new numero1 ("batata", 40, 40);
  console.log(`O produto ${compras.produto} de preço ${compras.preco}, quantidade comprada de ${compras.quantidade} teve o desconto de ${compras.desconto() * 100}% e o valor pago foi de ${compras. precoquantidade()}`)
  } catch (error) {
    console.log(error)
  }