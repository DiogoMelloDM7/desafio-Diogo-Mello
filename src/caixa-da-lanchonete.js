

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valor_compra = 0;
        let chantily_add = false;
        let queijo_add = false;
        let cafe = false;
        let sanduiche = false;
        if(itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }
        if(!metodoDePagamento || (metodoDePagamento!=="dinheiro" && metodoDePagamento!=="debito" && metodoDePagamento!=="credito")){
            return "Forma de pagamento inválida!";
        }
        for(let i=0; i < itens.length; i++ ){
            let pedido = itens[i];
            let tupla = pedido.split(',');
            let codigo = tupla[0];
            let quantidade = Number(tupla[1]);
            if (quantidade === 0){
                return "Quantidade inválida!";
            }
            if (codigo !== 'cafe' && codigo !== "chantily" && codigo !== "suco" && codigo !== "sanduiche" && codigo !== "queijo" && codigo !== "salgado" && codigo !== "combo1" && codigo !== "combo2"){
                return "Item inválido!";
            }
            let valor_do_item = this.CalculaItens(codigo, quantidade);
            valor_compra += valor_do_item;
            if (codigo === "chantily"){
                chantily_add=true;
            }if (codigo === "cafe"){
                cafe=true;
            }if (codigo === "queijo"){
                queijo_add=true;
            }if (codigo === "sanduiche"){
                sanduiche=true;
            }

        }
        if (chantily_add && !cafe){
            return "Item extra não pode ser pedido sem o principal";
        }
        if (queijo_add && !sanduiche){
            return "Item extra não pode ser pedido sem o principal";
        }

        if (metodoDePagamento==="dinheiro"){
            valor_compra = valor_compra * 0.95;
        }
        if (metodoDePagamento==="credito"){
            valor_compra = valor_compra * 1.03;
        }
        //valor_compra = valor_compra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        valor_compra = valor_compra.toFixed(2);
        return "R$ " + valor_compra.replace('.',',');


    }

    CalculaItens(item, quantidade){
        switch(item){
            case "cafe":
                return quantidade * 3;
            case "chantily":
                return quantidade * 1.5;
            case "suco":
                return quantidade * 6.2;
            case "sanduiche":
                return quantidade * 6.5;
            case "queijo":
                return quantidade * 2;
            case "salgado":
                return quantidade * 7.25;
            case "combo1":
                return quantidade * 9.5;
            case "combo2":
                return quantidade * 7.5;
    }
    }


}

export { CaixaDaLanchonete };


