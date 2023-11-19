/**
 * Auxiliar de Planillas
 * @author msastoque
 * @since 13 de noviembre 2023
 */

function onOpen() {
    SpreadsheetApp.getUi().createMenu('Eugenio')
        .addItem('Herramienta Auxiliar de Planillas', 'mostrarBarraLateral')
        .addToUi();
}

function mostrarBarraLateral() {
    let ui = HtmlService.createHtmlOutputFromFile('BarraLaterlal').setTitle('Herramienta Auxiliar de Planillas');
    SpreadsheetApp.getUi().showSidebar(ui);

}

function generarPlanilla(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Generador de planillas. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorLista();
        const listaFiltrada = gestor.getLista(asignatura, sede, grado);

        if (listaFiltrada.length == 0) {
            ui.alert(`No tiene asignada ${asignatura} en ${sede} - ${grado}`)
            return {};
        }

        const planilla = new GestorPlanilla();
        planilla.fillPlanilla(listaFiltrada, periodo);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado la generación de planillas')
    }
    return {};
}

function pruebaFiltrar() {
    const gestor = new GestorLista();

    const listaCompleta = gestor.getListaCompleta();

    let listaFiltrada = listaCompleta.filter(fila => fila[4] == "1002");

    Logger.log(listaFiltrada.length);
}