$(".black-color").on("click",function(){   
    $(".black-color").css({'border': '3px solid #fff',"box-shadow":"0 0 0 1px #888"});
    $(".blue-color").css({'box-shadow': 'none',"border":"none"});
})

$(".blue-color").on("click",function(){   
    $(".blue-color").css({'border': '3px solid #fff',"box-shadow":"0 0 0 1px #888"});
    $(".black-color").css({'box-shadow': 'none',"border":"none"});
})

$(".small-size").on("click",function(){
    $(".small-size").css({"background-color": "black", "color": "white"});
    $(".medium-size").css({"background-color": "white", "color": "black"});
    $(".large-size").css({"background-color": "white", "color": "black"});   
})

$(".medium-size").on("click",function(){
    $(".small-size").css({"background-color": "white", "color": "black"});
    $(".medium-size").css({"background-color": "black", "color": "white"});
    $(".large-size").css({"background-color": "white", "color": "black"});   
})

$(".large-size").on("click",function(){
    $(".small-size").css({"background-color": "white", "color": "black"});
    $(".medium-size").css({"background-color": "white", "color": "black"});
    $(".large-size").css({"background-color": "black", "color": "white"});   
})

$("#heart").on("click",function(){
    $(this).toggleClass('redHeart');   
})

var i = 1;
$(".footer").ready(function(){
    $("#addItem").on("click",function(){
        var addCart = `
        <div class="footer justify-content-center" style="height: 60px; background-color: black; color: white;">
            <div class="plus-minus d-flex align-items-center gap-4">
                <i id="minus" class="fa-solid fa-minus fa-lg plus-minus-icon"></i>
                <span class="counter">1</span>
                <i id="plus" class="fa-solid fa-plus fa-lg plus-minus-icon"></i>
            </div>
        </div>
        `
        $(".cart-counter").addClass("d-block")
        $(".footer").replaceWith(addCart)

        $("#plus").click(function(){
            i++;
            $(".counter").text(i);
            $(".cart-counter").text(i);
            $("#subPrice").text("$"+i*120)
        })
        $("#minus").click(function(){
            i--;
            $(".counter").text(i);
            $(".cart-counter").text(i);
            $("#subPrice").text("$"+i*120)
        })  

        $("#plusCart").click(function(){
            i++;
            $(".counter").text(i);
            $(".cart-counter").text(i);
            $("#subPrice").text("$"+i*120)
        })

        $("#minusCart").click(function(){
            i--;
            $(".counter").text(i);
            $(".cart-counter").text(i);
            $("#subPrice").text("$"+i*120)
        })  

        $("#Cart").on("click",function(){
            $(".main-parent").addClass("d-none")
            $(".cart-page").addClass("d-block")
               if(i<=0){
            var emptyCart = "<p class='d-flex justify-content-center align-items-center'>You have no items in your shopping Bag.</p>";
            $(".full-cart").replaceWith(emptyCart);
            
        }
        })

        $("#cartExit").on("click",function(){
            $(".main-parent").removeClass("d-none")
            $(".cart-page").removeClass("d-block")
        })
    })


})



$("#cartExit").on("click",function(){
    $(".main-parent").removeClass("d-none")
    $(".cart-page").removeClass("d-block")
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});


$("#Menu").on("click",function(){
    $(".main-parent").addClass("d-none")
    $(".side-bar").addClass("d-block")
})


$("#Exit").on("click",function(){
    $(".main-parent").removeClass("d-none")
    $(".side-bar").removeClass("d-block")
})

