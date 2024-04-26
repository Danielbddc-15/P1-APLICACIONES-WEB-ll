"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//////////////////////////////// CLIENTES ////////////////////////
const cliente = [{
        ID: 1,
        NOMBRE: "Pedro Zapata",
        IDENTIFICACION: "1351618878"
    },
    {
        ID: 2,
        NOMBRE: "Pico Reyes",
        IDENTIFICACION: "1351619968"
    },
    {
        ID: 3,
        NOMBRE: "Alan Macías",
        IDENTIFICACION: "1351611067"
    },
    {
        ID: 4,
        NOMBRE: "Ariel Play",
        IDENTIFICACION: "1316177678"
    },
    {
        ID: 5,
        NOMBRE: "Rul Calderón",
        IDENTIFICACION: "1351614467"
    }
];
////////////////////////// CONCEPTOS ///////////////////////////////////
const concepto = [{
        ID: 1,
        DESCRIPCION: "Compra de un generador para prender el router en los apagones"
    },
    {
        ID: 2,
        DESCRIPCION: "Compra de un generador para operar su cyber en los apagones"
    },
    {
        ID: 3,
        DESCRIPCION: "Compra de una bomba de agua"
    },
    {
        ID: 4,
        DESCRIPCION: "Compra de una bateria portatil para celulares"
    },
    {
        ID: 5,
        DESCRIPCION: "Compra de un tanque de gas para la otra"
    }
];
/////////////////////// GASTOS //////////////////////////
const gastos = [
    {
        IDGASTOS: 1,
        IDCLIENTE: [{
                ID: 1,
                NOMBRE: "Pedro Zapata",
                IDENTIFICACION: "1351618878"
            }],
        IDCONCEPTO: [{
                ID: 1,
                DESCRIPCION: "Compra de un generador para prender el router en los apagones"
            }],
        FECHA: "10/08/2023",
        HORA: "05:23:56 ",
        VALORGASTO: 258.50
    },
    {
        IDGASTOS: 2,
        IDCLIENTE: [{
                ID: 2,
                NOMBRE: "Pico Reyes",
                IDENTIFICACION: "1351619968"
            }],
        IDCONCEPTO: [{
                ID: 2,
                DESCRIPCION: "Compra de un generador para operar su cyber en los apagones"
            }],
        FECHA: "24/08/2023",
        HORA: "10:20:06 ",
        VALORGASTO: 598.50
    },
    {
        IDGASTOS: 3,
        IDCLIENTE: [{
                ID: 3,
                NOMBRE: "Alan Macías",
                IDENTIFICACION: "1351611067"
            }],
        IDCONCEPTO: [{
                ID: 3,
                DESCRIPCION: "Compra de una bomba de agua"
            }],
        FECHA: "15/10/2023",
        HORA: "15:45:56 ",
        VALORGASTO: 180
    },
    {
        IDGASTOS: 4,
        IDCLIENTE: [{
                ID: 4,
                NOMBRE: "Ariel Play",
                IDENTIFICACION: "1316177678"
            }],
        IDCONCEPTO: [{
                ID: 4,
                DESCRIPCION: "Compra de una bateria portatil para celulares"
            }],
        FECHA: "03/05/2023",
        HORA: "19:30:56 ",
        VALORGASTO: 120.85
    },
    {
        IDGASTOS: 5,
        IDCLIENTE: [{
                ID: 5,
                NOMBRE: "Rul Calderón",
                IDENTIFICACION: "1351614467"
            }],
        IDCONCEPTO: [{
                ID: 5,
                DESCRIPCION: "Compra de un tanque de gas para la otra"
            }],
        FECHA: "12/02/2023",
        HORA: "12:45:20 ",
        VALORGASTO: 40.50
    }
];
/////////////////// FOR EACH /////////////////////////
console.log("////////////// CLIENTES /////////////");
cliente.forEach(cliente => {
    console.log("ID:", cliente.ID);
    console.log("Nombre:", cliente.NOMBRE);
    console.log("Identificación:", cliente.IDENTIFICACION);
    console.log("");
});
console.log("///////////// CONCEPTOS ////////////");
concepto.forEach(concepto => {
    console.log("ID:", concepto.ID);
    console.log("Descripción:", concepto.DESCRIPCION);
    console.log("");
});
console.log("//////////// GASTOS ////////////////");
gastos.forEach(gastos => {
    console.log("ID:", gastos.IDGASTOS);
    console.log("ID Cliente:", gastos.IDCLIENTE[0].ID);
    console.log("ID Concepto:", gastos.IDCONCEPTO[0].ID);
    console.log("Fecha:", gastos.FECHA);
    console.log("Hora:", gastos.HORA);
    console.log("Valor Gasto:", gastos.VALORGASTO);
    console.log("");
});
/////////////////////// CALL BACK ////////////////////////
function buscarGastoPorID(ID, callback) {
    const gastoEncontrado = gastos.find(gasto => gasto.IDGASTOS === ID);
    callback(undefined, gastoEncontrado);
}
const ID = 3; // Cambié el tipo de ID a number para que coincida con el tipo de ID en los datos de gastos
if (ID > 5) {
    console.log("Gasto no encontrado.");
}
else {
    buscarGastoPorID(ID, (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Gasto encontrado:");
            console.log(res);
        }
    });
}
/////////////////////// REST ////////////////////////////
function obtenerUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    });
}
// Llamada a la función con async/await
function consumirServicio() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield obtenerUsuarios();
            console.log('Usuarios obtenidos:', usuarios);
            // Aquí puedes procesar los datos como lo necesites
        }
        catch (error) {
            console.error('Error al consumir el servicio:', error);
        }
    });
}
// Llamada a la función principal
consumirServicio();
