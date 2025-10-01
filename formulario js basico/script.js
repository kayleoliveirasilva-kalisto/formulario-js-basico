function calcPreco(){
    let quantidade = document.getElementById("cQuantidade").value
    let precofinal = quantidade * 1500
    //document.getElementById("cPrecoFinal").value = precofinal

    document.getElementById("cPrecoFinal").innerText = precofinal
}