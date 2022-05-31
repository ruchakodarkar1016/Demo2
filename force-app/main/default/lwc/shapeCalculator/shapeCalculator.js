import { LightningElement, track } from 'lwc';



export default class ShapeCalculator extends LightningElement {
@track currentoutput;
side;
width;
height;
digonal1;
digonal2;
sidechangehandler(event) 
{
    this.side=event.target.value
}

widthchangehandler(event)
{
    this.width=event.target.value
}
heightchangehandler(event)
{
  this.height=event.target.value
}
digonal1changehandler(event)
{
   this.digonal1=event.target.value
}
digonal2changehandler(event)
{
  this.digonal2=event.target.value
}

calculatesquareareahandler()
{
  const s=parseInt(this.side);
  this.currentoutput= 'Area of square is:'+(s*s);
}
calculaterectangleareahandler()
{
   const w=parseInt(this.width);
   const h=parseInt(this.height);
   this.currentoutput='Area of Rectangle is:'+(w*h);
}
calculaterhombusareahandler()
{
    const d1=parseInt(this.digonal1);
    const d2=parseInt(this.digonal2);
    this.currentoutput='Area of Rombus is:'+(d1*d2)/2;

}


}