/**
 * Clase que trae los daros de la hoja de cálculo.
 */

class GestorLista {
    constructor() {
        this._hojaActual = getLista();
        this._sede = [];
        this._grado = [];
        this._asignatura = [];
    }

    getAsignaturas() {
        
        const inicio = 2;
        const fin = 20;
        const rango = this._hojaActual.getRange('Z' + inicio + ':Z' + fin);
        this._asignatura = [];

        const hasta = (fin - inicio + 1);
        for (let i = 1; i < hasta; i++) {
            let dato = rango.getCell(i, 1).getValue();
            if(dato == "")break;
            this._asignatura.push(dato);            
        }       
        return this._asignatura;
    }

    getSedes() {
        
        const inicio = 2;
        const fin = 13;
        const rango = this._hojaActual.getRange('AB' + inicio + ':AB' + fin);
        this._sede = [];

        const hasta = (fin - inicio + 1);
        for (let i = 1; i < hasta; i++) {
            let dato = rango.getCell(i, 1).getValue();
            if(dato == "")break;
            this._sede.push(dato);            
        }       
        return this._sede;
    }

    getGrados() {
        
        const inicio = 2;
        const fin = 27;
        const rango = this._hojaActual.getRange('AA' + inicio + ':AA' + fin);
        this._grado = [];

        const hasta = (fin - inicio + 1);
        for (let i = 1; i < hasta; i++) {
            let dato = parseInt(rango.getCell(i, 1).getValue()).toFixed(0);
            if(isNaN(dato))break;
            this._grado.push(dato);            
        }       
        return this._grado;
    }
}

//#region prueba

function prueba() {
    const gestor = new GestorLista();

    let lista = gestor.getGrados();

    Logger.log(lista)
}

//#endregion