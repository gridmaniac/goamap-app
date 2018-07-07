import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'content-drawer',
  templateUrl: 'content-drawer.html'
})
export class ContentDrawerComponent {

  @Input('options') options: any;
  handleHeight: number = 30;
  bounceBack: boolean = true;
  thresholdTop: number = 450;
  thresholdBottom: number = 450;
  positionTop: number = 250;
  screenHeight: any

  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController, public platform: Platform) {
    const tabFooterHeight = 70
    this.screenHeight = platform.height() - tabFooterHeight + 5 //TODO refactor magic number
    // this magick number sets drawer content on smaller screns
  }

  ngAfterViewInit() {

    if (this.options) {
      if(this.options.handleHeight){
        this.handleHeight = this.options.handleHeight;
      }
  
      if(this.options.bounceBack){
        this.bounceBack = this.options.bounceBack;
      }
  
      if(this.options.thresholdFromBottom){
        this.thresholdBottom = this.options.thresholdFromBottom;
      }
  
      if(this.options.thresholdFromTop){
        this.thresholdTop = this.options.thresholdFromTop;
      }
  
      if(this.options.positionTop){
        this.positionTop = this.options.positionTop;
      }
    }

    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.screenHeight - this.handleHeight + 'px');
    // this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev){

    let newTop = ev.center.y;

    let bounceToBottom = false;
    let bounceToTop = false;

    if(this.bounceBack && ev.isFinal){

      let topDiff = newTop - this.thresholdTop;
      let bottomDiff = (this.screenHeight - this.thresholdBottom) - newTop;      

      topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;

    }

    if((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop){

      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', `${this.positionTop}px`);
      });

    } else if(((this.screenHeight - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom){

      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.screenHeight - this.handleHeight + 'px');
      });

    } else {
    
      this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');

      if(newTop > 0 && newTop < (this.screenHeight - this.handleHeight)) {

        if(ev.additionalEvent === "panup" || ev.additionalEvent === "pandown"){

          this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
          });

        }

      }

    }

  }

}