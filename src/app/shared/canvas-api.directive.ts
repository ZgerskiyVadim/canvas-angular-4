import { Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[canvas-api]'
})
export class CanvasApiDirective implements OnInit {
  x;
  y;
  x2;
  y2;
  r;
  g;
  b;
  angle;
element;
someFunc;

  constructor(private el: ElementRef) {

    this.element = el.nativeElement.getContext('2d');
    this.someFunc = () => {
      let x = this.x;
      let y = this.y;
      let x2 = this.x2;
      let y2 = this.y2;
      let r = this.r;
      let g = this.g;
      let b = this.b;
      let angle = this.angle;
      x = Math.floor(Math.random() * 390) + Math.floor(Math.random() * 390);
      y = Math.floor(Math.random() * 390) + Math.floor(Math.random() * 390);
      x2 = Math.floor(Math.random() * 190) + Math.floor(Math.random() * 190);
      y2 = Math.floor(Math.random() * 190) + Math.floor(Math.random() * 190);
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      angle = Math.floor(Math.random() * 180);


      const randomNumber = Math.floor(Math.random() * 4);
      const figuresArray = ['square', 'circle', 'line', 'triangle'];

      if (figuresArray[randomNumber] === 'square') {
        this.element.beginPath();
        this.element.fillRect(x, y, x2, y2);
        this.element.closePath();
        this.element.rotate(y * Math.PI / angle);
        this.element.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      } else if (figuresArray[randomNumber] === 'circle') {
        this.element.beginPath();
        this.element.arc(x, y, x2, y2, Math.PI * 2, true);
        this.element.fill();
        this.element.rotate(y * Math.PI / angle);
        this.element.closePath();
        this.element.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.element.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';

      } else if (figuresArray[randomNumber] === 'line') {
        this.element.beginPath();
        this.element.moveTo(x, y);
        this.element.lineTo(x2, y2);
        this.element.rotate(y * Math.PI / angle);
        this.element.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.element.closePath();
        this.element.lineWidth = Math.floor(Math.random() * 20);
      } else if (figuresArray[randomNumber] === 'triangle') {
        this.element.beginPath();
        this.element.moveTo(x, x);
        this.element.lineTo(x, y);
        this.element.lineTo(y, x);
        this.element.closePath();
      }
      this.element.globalAlpha = Math.random() + 0.3;
      this.element.stroke();
      this.element.restore();
    };
  }

  ngOnInit() {
    setInterval(this.someFunc, 1000);
  }

}
