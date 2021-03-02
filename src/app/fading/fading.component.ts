import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fading',
  templateUrl: './fading.component.html',
  styleUrls: ['./fading.component.css']
})
export class FadingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    /* Manejo basico de efecto fadin
    window.addEventListener('scroll',function(){ //Escuchar eventos de HTML
      var pageHeigth = window.innerHeight; // Tamaño interno de la pantalla
      pageHeigth = pageHeigth/1.3 //Condicion para lanzar el evento fade
      var imageElement = document.querySelectorAll('.fade_up')[0]; //Busca todos los elementos que tengan esa clase pero solo seleccionamos el primero que aparece
      var imgToPageTop = imageElement.getBoundingClientRect().top //Distancia entre la parte superior de la imagen y la pantalla
      console.log("Distancia entre imagen y top de pantalla: "+ imgToPageTop);
      
      imageElement.classList.add('transform_right');

      if(imgToPageTop<= pageHeigth){
         console.log("LO LOGRAMOS");
         imageElement.classList.add('show');
      }else{
        imageElement.classList.remove('show');
      }
    });
    */

    this.efectosFading();
    
  }

  efectosFading(){
    window.addEventListener('scroll',function(){
      var pgHeigth = window.innerHeight/1.3;
      var imgElemnt = document.getElementsByTagName('img');
      for(var i=0; i<imgElemnt.length; i++ ){
        var imgClassInicial= imgElemnt[i].className;
        var imgClass=imgClassInicial;
        var imgToPageTop = imgElemnt[i].getBoundingClientRect().top;
        switch (imgClass){
          case 'fade_up':
            imgElemnt[i].classList.replace('fade_up','transform_up');
            break;
          case 'fade_down':
            imgElemnt[i].classList.replace('fade_down','transform_down');
            break;
          case 'fade_left':
            imgElemnt[i].classList.replace('fade_left','transform_left');
            break;
          case 'fade_right':
            imgElemnt[i].classList.replace('fade_right','transform_right');
            break;
        }
        console.log("CLASE CAMBIANTE DESPUES DE FOR: "+imgClass);
        imgClass=imgElemnt[i].className;

        if(imgToPageTop<= pgHeigth){
          console.log("LO LOGRAMOS: "+imgClass);
          if(imgClass == 'transform_left'){
            imgElemnt[i].classList.add('showLeft');
           }else{
            imgElemnt[i].classList.add('show');
           }
        }else{
          imgElemnt[i].classList.remove('showLeft');
          imgElemnt[i].classList.remove('show');
        }
      }
    });
  }

}
