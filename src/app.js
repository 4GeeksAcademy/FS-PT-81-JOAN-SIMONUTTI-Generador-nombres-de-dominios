//GENERADOR DE NOMBRES DE DOMINIO
// Listas de pronombres, adjetivos y sustantivos
const pronombre = ["the", "our"];
const adjetivo = ["great", "big"];
const sustantivo = ["jogger", "racoon"];

// Función para generar nombres de dominio
function generateDomains() {
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < sustantivo.length; k++) {
        console.log(`${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${".com"}`);
      }
    }
  }
}
generateDomains();
