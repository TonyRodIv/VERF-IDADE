function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res') //só pra variar
        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO - 001] verifique os dados e tente novamente!')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.getAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'homem'
                if (idade >=0 && idade < 10){
                    img.setAttribute('src', 'bebem.png')
                } else if (idade < 21){
                    img.setAttribute('src', 'adolescentem.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'adultom.png')
                } else {
                    img.setAttribute('src', 'idosom.png')
                }
            } else if (fsex[1].checked){
                gênero = 'mulher'
                if (idade >=0 && idade < 10){
                    img.setAttribute('src', 'bebef.png')
                } else if (idade < 21){
                    img.setAttribute('src', 'adolescentef.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'adultof.png')
                } else {
                    img.setAttribute('src', 'idosaf.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
}