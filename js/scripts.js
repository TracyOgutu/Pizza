$(document).ready(function(){
    function Order(size, toppings, crust, quantity, type){
        this.Size = size;
        this.Toppings = toppings;
        this.Crust = crust;
        this.Quantity = quantity;
        this.Type = type;
    }
    // Order.prototype.Address = function(city,estate,street,housenumber){
    //     this.City = city;
    //     this.Estate = estate;
    //     this.Street = street;
    //     this.Housenumber = housenumber;
    // }

    $("input#yes").click(function(){
        $(".address").show();
        
        alert("Delivery charge: 200 Ksh");
        alert("Your order will be delivered to your location");
    });

    $("input#no").click(function(){
        
        $(".address").hide();
        $(".address-summary").hide();
    });

    function calculatePizza(sizePrice,quantity,crustPrice,toppingsPrice,test)
    {

        var total= sizePrice * quantity;

        var result =(total + crustPrice + toppingsPrice+ test);

        
        return result;    
    
    }

    function deliveryFee()
    {
        var deli=$('input[name=delivery]:checked').val();
        var delivery;
        if (deli=="1")
        {
            delivery = 200;
            $(".address-summary").show();
           
            return delivery;
            
        }
        else
        {
            delivery = 0;
            return delivery;
        }

    }

    

   $("form#pizza-form").submit(function(event)
   {
            event.preventDefault();

            var type=$('input[name=type]:checked').val();  

            var size =$(".size").val();
            var sizeSplit = size.split(", ");
            var sizePrice = parseInt(sizeSplit[1]);
            

            var crusts=$(".crusts").val();
            var crustSplit = crusts.split(", ");
            var crustPrice=parseInt(crustSplit[1]);


            var toppings=$(".toppings").val();
            var toppingsSplit=toppings.split(", ");
            var toppingsPrice=parseInt(toppingsSplit[1]);

            var quantity=parseInt($("input#quantity").val());                         

            var test = deliveryFee();    

            var city=$(".city").val();
            var estate=$(".estate").val();
            var street=$(".street").val();
            var housenumber=parseInt($(".housenumber").val());

            var orderamount = calculatePizza(sizePrice,quantity,crustPrice,toppingsPrice,test);

            var newOrder = new Order(sizeSplit, toppingsSplit, crustSplit, quantity, type);
            console.log(newOrder);

            // var newAddress = new newOrder.Address(city,estate,street,housenumber);

            $(".show-order").show(); 

            $(".pizza-types").text(type);
            $(".order-size").text(newOrder.Size[0] + " Ksh: " + newOrder.Size[1]);
            $(".order-quantity").text(newOrder.Quantity);
            $(".order-crusts").text(newOrder.Crust[0] + " Ksh: " + newOrder.Crust[1]);
            $(".order-toppings").text(newOrder.Toppings[0] + " Ksh: " + newOrder.Toppings[1]);
            $(".delivery-fee").text(test);
            $(".order-total").text(orderamount);

            $(".address-city").text(city);
            $(".address-estate").text(estate);
            $(".address-street").text(street);
            $(".address-housenumber").text(housenumber);         
            
  });

});

