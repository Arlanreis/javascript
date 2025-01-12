    function carregar(){
        let msg= document.getElementById('msg')
        let img = document.getElementById('foto')
        let data = new Date()
        let hora = data.getHours()
        
            msg.innerHTML = `Agora são ${hora} horas.`
            if( hora >=0 && hora < 12){
                
                img.src = 'dia.webp'
                document.body.style.background ='#f2860a'
                
            }
            else if (hora >=12 && hora <= 18){
                
                img.src ='tarde.jpeg'
                document.body.style.background = '#62859e'
            }
            else{
                
                img.src = 'noite.webp'
                document.body.style.background ='#30445c'
            }

    }


    