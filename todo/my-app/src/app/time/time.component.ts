import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  message: string;
  items = ['one', 'two', 'three', 'four', 'five']
  constructor() {
    setInterval(() => {
      this.message = new Date().toTimeString()
    }, 1000)
  }
  ngOnInit(): void {
  }

}
