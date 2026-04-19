const calcularPrecioFinal = (monto, medioPago) => {
    
    let descuento;
    switch (medioPago) {
        case 'E':
            descuento = 0.3;
            break;
        case 'D':
            descuento = 0.2;
            break;
        case 'C':
            descuento = 0.1;
            break;
        default:
            return "Medio de pago inválido";
    }

    if (monto < 0) {
        return "Monto inválido";
    }

    if (monto >= 200 && monto <= 400) {
        monto -= monto * descuento;
    } else if (monto > 400) {
        monto -= monto * 0.4;
    }

    return monto;

}

console.log(`Monto: ${100} | Pago: D | Monto final: ${calcularPrecioFinal(100, "D")}`);
console.log(`Monto: ${50} | Pago: E | Monto final: ${calcularPrecioFinal(50, "E")}`);
console.log(`Monto: ${200} | Pago: E | Monto final: ${calcularPrecioFinal(200, "E")}`);
console.log(`Monto: ${300} | Pago: C | Monto final: ${calcularPrecioFinal(300, "C")}`);
console.log(`Monto: ${400} | Pago: D | Monto final: ${calcularPrecioFinal(400, "D")}`);
console.log(`Monto: ${1000} | Pago: E | Monto final: ${calcularPrecioFinal(1000, "E")}`);
console.log(`Monto: ${2000} | Pago: C | Monto final: ${calcularPrecioFinal(2000, "C")}`);
console.log(`Monto: ${-300} | Pago: E | Monto final: ${calcularPrecioFinal(-300, "E")}`);
console.log(`Monto: ${1000} | Pago: T | Monto final: ${calcularPrecioFinal(1000, "T")}`);