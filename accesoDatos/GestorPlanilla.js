/**
 * Clase que genera el auxiliar de planilla.
 */

class GestorPlanilla {
    constructor() {
        this._hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }

    fillPlanilla(data, periodo) {
        //Borrar datos
        this._hojaActual.getRange('B' + 5 + ':F' + 40).clearContent();
        
        let datos = [];
        data.forEach(element => {
            datos.push([element[6], element[8], element[9], element[10]])
        });
        Logger.log(datos);

        const rango = this._hojaActual.getRange('B' + 5 + ':E' + (datos.length + 4));
        rango.setValues(datos);

        
    }

    fillPlanillaUnoAUno(datos, periodo) {
        const rango = this._hojaActual.getRange('B' + 5 + ':F' + 40);

        let contador = 1;
        datos.forEach(element => {
            rango.getCell(contador, 1).setValue(element[6]);
            contador++;
        });
    }
}