import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  visability: boolean = true;
  toggle() {
    this.visability = !this.visability
  }
  constructor() { }

  ngOnInit(): void {
  }

}
