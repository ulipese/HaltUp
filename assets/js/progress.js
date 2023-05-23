function calcIMC() {
  const masc = document.getElementById("btn-sexo-masc");
  const fem = document.getElementById("btn-sexo-fem");
  const pesoInput = document.querySelector(".txt-peso");
  const alturaInput = document.querySelector(".txt-altura");
  const resultInput = document.querySelector(".result-imc");

  if (pesoInput.value && alturaInput.value && (fem || masc)) {
    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value) / 100;
    let result = peso / (altura * altura);
    if (masc.checked == true && fem.checked == false) {
      if (result > 43) {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Obesidade Morbida`;
      } else if (result >= 30) {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Obesidade Moderada`;
      } else if (result >= 25) {
        resultInput.textContent = `IMC: ${result.toFixed(1)} - Obesidade leve`;
      } else if (result >= 20) {
        resultInput.textContent = `IMC: ${result.toFixed(1)} - Normal`;
      } else {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Abaixo do Normal`;
      }
    } else {
      if (result > 39) {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Obesidade Morbida`;
      } else if (result >= 29) {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Obesidade Moderada`;
      } else if (result >= 24) {
        resultInput.textContent = `IMC: ${result.toFixed(1)} - Obesidade leve`;
      } else if (result >= 19) {
        resultInput.textContent = `IMC: ${result.toFixed(1)} - Normal`;
      } else {
        resultInput.textContent = `IMC: ${result.toFixed(
          1
        )} - Abaixo do Normal`;
      }
    }
  } else {
    resultInput.textContent = "Preencha os campos corretamente!";
    pesoInput.value ? alturaInput.focus() : pesoInput.focus();
  }
}

function calcRM() {
  const hiperInput = document.getElementById("btn-objetivo_1");
  const forcaInput = document.getElementById("btn-objetivo_2");
  const resisInput = document.getElementById("btn-objetivo_3");
  const cargaInput = document.querySelector(".txt-carga");
  const repsInput = document.querySelector(".txt-reps");
  const resultInput = document.querySelector(".result-rm");

  if (
    cargaInput.value &&
    repsInput.value &&
    (hiperInput || forcaInput || resisInput)
  ) {
    let carga = Number(cargaInput.value);
    let reps = Number(repsInput.value);
    let rm = 0.033 * carga * reps + carga;
    let result = 0;

    if (hiperInput.checked == true) {
      result = rm * 0.7;
      resultInput.textContent = `RM: ${rm} - Carga de trabalho: ${result}`;
    } else if (forcaInput.checked == true) {
      result = rm * 0.85;
      resultInput.textContent = `RM: ${rm} - Carga de trabalho: ${result}`;
    } else {
      result = rm * 0.4;
      resultInput.textContent = `RM: ${rm} - Carga de trabalho: ${result}`;
    }
  } else {
    resultInput.textContent = "Preencha os campos corretamente!";
    cargaInput.value ? repsInput.focus() : cargaInput.focus();
  }
}