let tipo = document.getElementById("gasto")
let monto = document.getElementById("monto")
let presupuestos = []
function agregar(){
    let tipo_valor = tipo.value;
    let monto_valor = monto.value;
    if(tipo_valor=="" || monto_valor==""){
        alert("Contiene campos vacios");
        return;
    }
    let informacion = tipo_valor + ": $"+monto_valor;
    presupuestos.push(informacion)
    console.log(presupuestos)
}