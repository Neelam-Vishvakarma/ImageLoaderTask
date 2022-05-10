import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css']
})
export class DisplayImageComponent  {
  @Input() loader:string='https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif';
  @Input() height:number=500;
  @Input() width:number=500;
  @Input()
  image: string='';
  isLoading: boolean = false;
  

  

  constructor() { 
    console.log("displayed image")
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
  }

  public myfunction(message : string){
    console.log("image clicked")
    alert(message);
}

  
  // ngOnInit(): void {
  //   console.log("display image")
  // }

}
