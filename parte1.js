//funcion calculo para Tornar Tamanho em String

function tornarTamanhoEmString() {
    var tamanhos = ["B", "KB", "MB", "GB", "TB"]
    var valueArquivo = window.document.getElementById('valueArquivo')
    var res = window.document.getElementById('res')
    var n = Number(valueArquivo.value)
    var contador = 0
    while (n / 1024 >= 1) {
        n = n / 1024
        contador++
    }
    return res.innerHTML = Math.round(n * 100) / 100 + ' ' + tamanhos[contador]
}
