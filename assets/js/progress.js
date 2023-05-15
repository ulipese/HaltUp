function imc(){
    let masc = document.getElementById("btn-sexo-masc")
    let fem = document.getElementById("btn-sexo-fem")
    const inputpeso = document.querySelector(".txt-peso");
    let peso = Number(inputpeso.value)
    const inputaltura = document.querySelector(".txt-altura")
    let altura = Number(inputaltura.value) /100
    let p = document.querySelector(".result-imc")
    let resultado = peso / (altura * altura)

    if(masc.checked==true){
        if(resultado > 43){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade Morbida`
        }else if(resultado >= 30){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade Moderada`
        }else if(resultado >= 25){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade leve`
        }else if(resultado >= 20){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Normal`
        }else{
            p.textContent = `IMC: ${resultado.toFixed(1)} - Abaixo do Normal`
        }
    }else{
        if(resultado > 39){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade Morbida`
        }else if(resultado >= 29){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade Moderada`
        }else if(resultado >= 24){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Obesidade leve`
        }else if(resultado >= 19){
            p.textContent = `IMC: ${resultado.toFixed(1)} - Normal`
        }else{
            p.textContent = `IMC: ${resultado.toFixed(1)} - Abaixo do Normal`
        }
    }
}

function clicar(){
    let hiper = document.getElementById("btn-objetivo_1")
    let forca = document.getElementById("btn-objetivo_2")
    let resis = document.getElementById("btn-objetivo_3")
    const inputcarga = document.querySelector(".txt-carga")
    let carga = Number(inputcarga.value)
    const inputreps = document.querySelector(".txt-reps")
    let reps = Number(inputreps.value)
    let rm = (0.033 * carga * reps) + carga
    let p = document.querySelector(".result-rm")
    let resultado = 0

    if(hiper.checked==true){
        resultado = rm * 0.70
        p.textContent = `RM: ${rm} - Carga de trabalho: ${resultado}`
    } else if(forca.checked==true){
        resultado = rm * 0.85
        p.textContent = `RM: ${rm} - Carga de trabalho: ${resultado}`
    }else{
        resultado = rm * 0.40
        p.textContent = `RM: ${rm} - Carga de trabalho: ${resultado}`
    }


}