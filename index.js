function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        console.log('Bom dia')
        img.src= 'manha.png'
        document.body.style.backgroundColor= '#ffcf59'

    } else{
        if(hora >= 12 && hora < 18){
            console.log('Boa tarde')
            img.src= 'tarde1.png'
        }
        else if(hora >= 18){
            console.log('Boa noite')
            img.src= 'noite1.png'
            document.body.style.backgroundColor= '#111111'

        }
    }
}