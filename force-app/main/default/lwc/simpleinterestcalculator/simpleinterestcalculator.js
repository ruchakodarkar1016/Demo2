import { LightningElement,track } from 'lwc';

export default class Simpleinterestcalculator extends LightningElement {
@track currentoutput;
principal;
rateofinterest;
noofyears;

principalchangeHandler(event)
{
this.principal=pareseInt(event.target.value)
}

timechangeHandler(event)
{
  this.noofyears=parseInt(event.target.value)
}
ratechangeHandler(event)
{
    this.rateofinterest=pareseInt(event.target.value)

}
calculateSIHandler()
{
  this.currentoutput='Simple Interest is :' +(this.principal*this.rateofinterest*this.noofyears)/100;
}

}