import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-elements',
  templateUrl: './position-elements.component.html',
  styleUrls: ['./position-elements.component.css']
})
export class PositionElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cambiarClase(clase:string){
    switch(clase){
      case 'left':
        var elemnt= document.getElementsByClassName(clase);
        elemnt[0].getElementsByTagName('img')[0].classList.add('transform_left');
        console.log(elemnt[0].getElementsByTagName('img')[0])
        break;
      case 'right':
        var elemnt= document.getElementsByClassName(clase);
        elemnt[0].getElementsByTagName('img')[0].classList.add('transform_right');
        break;
      case 'center':
        var elemnt= document.getElementsByClassName(clase);
        elemnt[0].getElementsByTagName('img')[0].classList.add('transform_left');
        console.log(elemnt[0].getElementsByTagName('img')[0])
        break;
    }
    
  }

}

