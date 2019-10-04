// function Order(size, crusts, toppings){
//     this.size=size;
//     this.crusts=crusts;
//     this.toppings=toppings;

// }


$(document).ready(function(){

    $("input#yes").click(function(){
        
        $(".address").show();

    });

    $("input#no").click(function(){
        
        $(".address").hide();


    });

    function calculatePizza(size,quantity,crusts,toppings){

        var total= size * quantity;
        var result =(total + crusts + toppings);

        console.log(result);
        return result;    
    
    }

   $("form#pizza-form").submit(function(event){
            event.preventDefault();

            var size=parseInt($(".size").val());
            var crusts=parseInt($(".crusts").val());
            var toppings=parseInt($(".toppings").val());
            var quantity=parseInt($("input#quantity").val());
            
            calculatePizza(size,quantity,crusts,toppings);

            

            

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

