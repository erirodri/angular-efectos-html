import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-full',
  templateUrl: './map-full.component.html',
  styleUrls: ['./map-full.component.css']
})
export class MapFullComponent implements OnInit {
  lat = 19.290950;
  lng = -99.653015;
  zoom = 9;
  constructor() { }

  ngOnInit(): void {
  }

}
