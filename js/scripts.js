// function Order(size, crusts, toppings){
//     this.size=size;
//     this.crusts=crusts;
//     this.toppings=toppings;

// }


$(document).ready(function(){

    $("input#yes").click(function(){

        $(".address").show();
        $(".address-summary").show(); //bug 1: address summary showing immediately 
        alert("Delivery charge: 200 Ksh");
        alert("Your order will be delivered to your location");


    });

    $("input#no").click(function(){
        
        $(".address").hide();
        $(".address-summary").hide();
        $(".delivery-fee").hide();


    });

    function calculatePizza(size,quantity,crusts,toppings,delivery){

        var total= size * quantity;
        var result =(total + crusts + toppings+ delivery);

        
        return result;    
    
    }

    

   $("form#pizza-form").submit(function(event){
            event.preventDefault();

            var type=$(".type").val();   //bug 4: Type of pizza not displaying correctly in summary
            var size=parseInt($(".size").val());
            var crusts=parseInt($(".crusts").val());
            var toppings=parseInt($(".toppings").val());
            var quantity=parseInt($("input#quantity").val());

            var delivery=parseInt(200); //bug 3:  delivery fee not included in calculation
                                        //    3.1 delivery fee persists even when no delivery is required

            var total= size * quantity;
            var result =(total + crusts + toppings);

            var city=$(".city").val();
            var estate=$(".estate").val();
            var street=$(".street").val();
            var housenumber=parseInt($(".housenumber").val());

            calculatePizza(size,quantity,crusts,toppings);

            $(".show-order").show(); //bug 2:Order summary does not show names of order items


            $(".pizza-type").text(type);
            $(".order-size").text(size);
            $(".order-quantity").text(quantity);
            $(".order-crusts").text(crusts);
            $(".order-toppings").text(toppings);
            $(".delivery-fee").text(delivery);
            $(".order-total").text(result);

            $(".address-city").text(city);
            $(".address-estate").text(estate);
            $(".address-street").text(street);
            $(".address-housenumber").text(housenumber);

           
            
            

            // var smallpizza=parseInt($("input#small").val());
            // var mediumpizza=parseInt($("input#medium").val());
            // var largepizza=parseInt($("input#large").val());

            // var crispycrust=parseInt($("input#crispy").val());
            // var stuffedcrust=parseInt($("input#stuffed").val());
            // var glutenfreecrust=parseInt($("input#glutenfree").val());

            // var meattoppings=parseInt($("input#meat").val());
            // var vegetabletoppings=parseInt($("input#vegetable").val());
            // var mixedtoppings=parseInt($("input#mixed").val());

        
            

            // var yes=$("input#yes");
            // alert(yes);
            
            
  });

  

});
// function calculate(){

// var size=document.querySelector('input[name="size"]:checked').value;

// if(size==1){
//     alert("small");
//     var small=300;
// }

// var crust=document.querySelector('input[name="crust"]:checked').value;
// if(crust==1){
//     alert("crispy");
//     var crispy = 200;
// }

// var toppings=document.querySelector('input[name="toppings"]:checked').value;
// if(toppings==1){
//     alert("meat");
//     var meat=200;
// }

// }

