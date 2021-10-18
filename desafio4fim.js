window.onload = function(){
    
    let mercadoria = [
        {descricao: 'abacaxi', preco: 5.43},
        {descricao: 'amora', preco: 4.70},
        {descricao: 'banana', preco: 3.99},
        {descricao: 'goiaba', preco: 2.95},
        {descricao: 'uva', preco: 3.95}
    ]   
    let frutaAdd = [];
        const feira = document.querySelector("#produtos");
        const pagar = document.querySelector("#mostraTotalCompra");
        const carrinho = document.querySelector("#cestaDoCliente");
    (() =>{
        mercadoria.forEach(produto =>{
        let li = document.createElement("li");
            li.textContent = produto.descricao;  
            li.dataset.preco = produto.preco;  
            li.addEventListener('click', function(){
            if(frutaAdd.indexOf(this.textContent) !=-1){
                alert(`Você já tem ${this.textContent} na sua cesta!!`);
            }else{
                frutaAdd.push(this.textContent);
                let li = document.createElement("li");
                    li.textContent = this.textContent;  
                    carrinho.appendChild(li);  
                    const total = Number(pagar.value) + Number(this.dataset.preco);
                    pagar.value = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                } 
            });
            feira.appendChild(li);  
        });
        }
    )()
} 
