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

function generarPlanilla(asignatura, sede, grado) {
    if(asignatura == "" ||sede == "" || grado == "")
    {
        return{};
    }
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Generador de planillas. Pulsa Si para continuar', ui.ButtonSet.YES_NO);
    if (respuesta == ui.Button.YES) {
    } else {
        ui.alert('Se ha cancelado la generación de planillas')
    }
    return{};
}