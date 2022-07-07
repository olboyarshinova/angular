import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  isCollapse: boolean = true;

  constructor() { }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  ngOnInit(): void {
  }

}
