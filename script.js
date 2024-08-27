function criptografar() {
    let text = document.getElementById("inputText").value;
        text = text.toLowerCase();
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let textoCodificado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoCodificado;
    document.getElementById("imagemCopiar").style.display = "none";
    document.getElementById("outText").style.display = "block";
    if (document.getElementById("copiado").style.display == "block") {
        document.getElementById("copiado").style.display = "none"
        document.getElementById("copiar").style.display = "block";
    }

}

function descriptografar() {
    let text = document.getElementById("inputText").value;
        text = text.toLowerCase();
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let textoDecodificado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDecodificado;
    document.getElementById("imagemCopiar").style.display = "none";
    document.getElementById("outText").style.display = "block";
    if (document.getElementById("copiado").style.display == "block") {
        document.getElementById("copiado").style.display = "none"
        document.getElementById("copiar").style.display = "block";
    }
}

function copiar() {
    let textoParaCopiar = document.getElementById("outputText").value;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        document.getElementById("copiar").style.display = "none";
        document.getElementById("copiado").style.display = "block";
    }, function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}