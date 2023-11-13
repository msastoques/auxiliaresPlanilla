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