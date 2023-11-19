/**
 * Clase que genera el auxiliar de planilla.
 * @author msastoque
 */

class GestorPlanilla {
    constructor() {
        this._hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }

    fillPlanilla(data, periodo) {
        //Borrar datos
        this._hojaActual.getRange('B' + 5 + ':F' + 40).clearContent();

        //llenar datos cabecera
        this._hojaActual.getRange('M' + 1).setValue(data[0][7]);
        this._hojaActual.getRange('R' + 1).setValue(`Periodo ${periodo}`);
        this._hojaActual.getRange('AE' + 1).setValue(`Sede ${data[0][5]} - Grado ${data[0][4]}`);
        
        let datos = [];

        if (periodo == "III") {
            data.forEach(element => {
                datos.push([element[6], element[8], element[9], element[10]])
            });
            Logger.log(datos);
    
            const rango = this._hojaActual.getRange('B' + 5 + ':E' + (datos.length + 4));
            rango.setValues(datos);
        } else if (periodo == "II") {
            data.forEach(element => {
                datos.push([element[6], element[8], element[9]])
            });
            Logger.log(datos);
    
            const rango = this._hojaActual.getRange('B' + 5 + ':D' + (datos.length + 4));
            rango.setValues(datos);
        } else if (periodo == "I") {
            data.forEach(element => {
                datos.push([element[6], element[8]])
            });
            Logger.log(datos);
    
            const rango = this._hojaActual.getRange('B' + 5 + ':C' + (datos.length + 4));
            rango.setValues(datos);
        }       
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