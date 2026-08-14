// ============================================================
// GOOGLE APPS SCRIPT - Formulario de leads para Sulma Marte
// ============================================================
//
// INSTRUCCIONES PASO A PASO PARA CONFIGURARLO:
//
// 1. Abre Google Sheets en https://sheets.google.com
//    - Crea una hoja de calculo nueva
//    - Renombra la primera pestana (abajo) como "Leads" (exacto, con L mayuscula)
//    - En la fila 1, escribe estos encabezados:
//      A1: Timestamp
//      B1: Nombre
//      C1: Correo
//      D1: WhatsApp
//
// 2. Ve al menu Extensiones > Apps Script
//    - Se abre un editor de codigo
//    - Borra todo el contenido que aparezca
//    - Copia y pega TODO el codigo de abajo (desde "function doPost" hasta el final)
//    - Haz clic en el icono de guardar (o Ctrl+S)
//
// 3. Despliega como Web App:
//    - Haz clic en "Implementar" > "Nueva implementacion"
//    - En "Tipo", selecciona "Aplicacion web"
//    - En "Descripcion", escribe: "Formulario leads Sulma"
//    - En "Ejecutar como", selecciona: "Yo" (tu cuenta)
//    - En "Quien tiene acceso", selecciona: "Cualquier persona"
//    - Haz clic en "Implementar"
//    - Google te pedira permisos. Acepta todos.
//      (Si aparece "Esta app no esta verificada", haz clic en
//       "Avanzado" > "Ir a ... (no seguro)")
//    - Copia la URL que aparece. Es algo como:
//      https://script.google.com/macros/s/AKfycbx.../exec
//
// 4. Pega esa URL en landing_sulma.html:
//    - Abre landing_sulma.html en un editor de texto
//    - Busca: REEMPLAZAR_CON_URL_DEL_APPS_SCRIPT
//    - Reemplazalo con la URL que copiaste
//
// 5. Para probar:
//    - Abre landing_sulma.html en el navegador
//    - Llena el formulario con datos de prueba
//    - Envia el formulario
//    - Ve a tu Google Sheet y verifica que aparezca una fila nueva
//      con la fecha, el nombre y el correo
//
// NOTA IMPORTANTE:
// Si modificas este codigo despues de desplegarlo, debes crear
// una NUEVA implementacion (no editar la existente) para que
// los cambios se apliquen. Ve a Implementar > Gestionar
// implementaciones > Nueva implementacion.
//
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet()
                              .getSheetByName("Leads");
    var nombre, correo, whatsapp;

    if (e.postData && e.postData.type === "application/x-www-form-urlencoded") {
      var params = e.parameter;
      nombre   = params.nombre   || "";
      correo   = params.correo   || "";
      whatsapp = params.whatsapp || "";
    } else if (e.postData && e.postData.contents) {
      var data = JSON.parse(e.postData.contents);
      nombre   = data.nombre   || "";
      correo   = data.correo   || "";
      whatsapp = data.whatsapp || "";
    }

    sheet.appendRow([new Date(), nombre, correo, whatsapp]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "El script esta funcionando correctamente" }))
    .setMimeType(ContentService.MimeType.JSON);
}
