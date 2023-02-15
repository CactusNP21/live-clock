import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasElement') canvasRef!: ElementRef<HTMLCanvasElement>

  constructor(er: ElementRef) {
  }

  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d')!
  }

  test() {
    requestAnimationFrame(this.drawSecondLine.bind(this))
  }
  drawSecondLine(): any {
    const date = new Date()
    const sec = date.getSeconds()
    const ms = date.getMilliseconds() / 1000
    this.ctx.save()
    this.ctx.clearRect(0, 0, 600, 600)
    this.ctx.translate(300, 300)
    this.ctx.rotate((sec + ms) * Math.PI / 30);
    const secondLine = new Path2D()
    secondLine.moveTo(0, 0)
    secondLine.lineTo(250, 0)
    this.ctx.stroke(secondLine);
    this.ctx.restore();
    requestAnimationFrame(this.drawSecondLine.bind(this))
  }




}
