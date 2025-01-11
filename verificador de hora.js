let Agora = new Date()
let hora = Agora.getHours()
    console.log(`Agora estamos por volta das ${hora} horas`)
if (hora < 12){
    console.log('bom dia')
}
else if( hora <=18 ){
    console.log('boa tarde')
}
else{
    console.log('boa noite')
}
