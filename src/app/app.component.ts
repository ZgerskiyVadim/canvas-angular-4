import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  someArray = [];
  batch = 2 ;
  finished = false;

  onScroll () {
    if (this.batch < 10) {
      this.batch = this.batch + 2;
    } else {
      this.finished = true;
    }
    this.someArray = Array(this.batch).fill(1);
  }
  ngOnInit() {
    this.someArray = Array(2).fill(1);
  }
}

