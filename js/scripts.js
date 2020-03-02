var price , crustPrice, toppingPrice ;
let total = 0;

//constructor for ordering a pizza
function Orderpizza( size,crust,topping, total ){
  
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){

    $("button.proceed").click(function(event){

        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            pizzaTopping.push($(this).val());
        });
        console.log(pizzaTopping.join(", "));

        switch(pizzaSize){
            case "0":
            price =0;
            break;
            case "large":
            price = 800;
            console.log(price);
            break;
            case "medium":
            price = 600;
            console.log("The price is: "+price);
            break;
            case "small":
            price = 400;
            console.log(price);
            default:
            console.log("Select Pizza size"); 
        }
        switch(pizzaCrust){
            case "0":
                crustPrice = 0;
            break;
            case "Crispy":
                crustPrice = 200;
            break;
            case "Stuffed":
                crustPrice = 250;
            break;
            case "Gluten-free":
                crustPrice = 180;
            break;
            default:
                console.log("Select Pizza Crust"); 
        }
        let topping_value = pizzaTopping.length*100;
        console.log("topping value" + topping_value);

        if((pizzaSize == "0") && (pizzaCrust == "0")){
            console.log("nothing selected");
            $("button.proceed").show();
            $("#information").show();
            $("div.choise").hide();
            alert("Please select pizza size and crust"); 
        }else{
            $("button.proceed").hide();
            $("#information").hide();
            $("div.choise").slideDown(1000);
        }

        total = price + crustPrice + topping_value;
        console.log(total);
        let checkoutTotal =0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html( $("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(pizzaTopping.join(", "));
        $("#totals").html(total);

        // Adding a pizza 
        $("button.addPizza").click(function(){
            let pizzaName = $(".name option:selected").val();
            let pizzaSize = $("#size option:selected").val();
            let pizzaCrust = $("#crust option:selected").val();
            let pizzaTopping = [];
            $.each($("input[name='toppings']:checked"), function(){            
                pizzaTopping.push($(this).val());
            });
            console.log(pizzaTopping.join(", "));
        
            switch(pizzaSize){
            case "0":
                price =0;
            break;
            case "large":
                price = 800;
                console.log(price);
            break;
            case "medium":
                price = 600;
                console.log("The price is: "+price);
            break;
            case "small":
                price = 400;
                console.log(price);
            default:
                console.log("Select Pizza size"); 
            }
  
            switch(pizzaCrust){
                case "0":
                crustPrice = 0;
                break;
                case "Crispy":
                crustPrice = 200;
                break;
                case "Stuffed":
                crustPrice = 150;
                break;
                case "Gluten-free":
                crustPrice = 180;
                break;
                default:
                console.log("Select Pizza Crust"); 
            }
  
            let topping_value = pizzaTopping.length*100;
            console.log("Pizza Toppings value :" + topping_value);
            total = price + crustPrice + topping_value;
            console.log(total);
    
            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);
  
            // new Object
            var newOrder = new Orderpizza(pizzaSize, pizzaCrust,pizzaTopping,total);
  
            $("#ordersmade").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
            console.log(newOrder);
      
        });

        // Checkout 
        $("button#checkout").click(function(){ 
            $("button#checkout").hide();
            $("button.addPizza").hide();
            $("button.deliver").slideDown(1000);
            $("#addedprice").slideDown(1000);
            console.log("Your total bills is sh. "+checkoutTotal);
            $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
        });


    })



})