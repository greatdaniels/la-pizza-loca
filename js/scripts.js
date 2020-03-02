var price , crustPrice, toppingPrice ;
let total = 0;

//constructor for ordering a pizza
function Orderpizza( size,crust,topping, total ){
  
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}