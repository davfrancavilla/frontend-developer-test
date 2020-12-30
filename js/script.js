$(document).ready(function() {

	automatedMovement();
    $(".carousel i").on("click", moveCarousel);
    
    $(".add-product").on("click", addProduct);
	$(".remove-product").on("click", removeProduct);

    $(".list>.title").on("click", controlProductMenu);


});

// FUNCTIONS

// function to open and close a product's menu
function controlProductMenu(){
	$(this).parent(".list").children(".container").slideToggle();
	if ($(this).find(".control-arrow").hasClass("open")) {
		$(this).find(".control-arrow").rotate(-90);
		$(this).find(".control-arrow").removeClass("open");
	} else {
		$(this).find(".control-arrow").rotate(0);
		$(this).find(".control-arrow").addClass("open");
	}
}

// function to rotate arrow when closing and opening a product's menu
jQuery.fn.rotate = function (degrees) {
	$(this).css({
		"-webkit-transform": "rotate(" + degrees + "deg)",
		"-moz-transform": "rotate(" + degrees + "deg)",
		"-ms-transform": "rotate(" + degrees + "deg)",
		transform: "rotate(" + degrees + "deg)",
		"-webkit-transition": "0.3s ease-out",
		"-moz-transition": "0.3s ease-out",
		"-o-transition": "0.3s ease-out",
	});
	return $(this);
};

// function to automate the carousel
function automatedMovement(){
    var imagesQuantity = $(".carousel img").length;
    var n = 0;
    setInterval(function(){
        
		var activeImage = $(".carousel img.active");
		var activeCircle = $(".carousel i.active");

		activeImage.removeClass("active");
		activeCircle.removeClass("active");

		selectedImage = $(".carousel img").eq(n);
        selectedImage.addClass("active");
        selectedCircle = $(".carousel i").eq(n);
        selectedCircle.addClass("active");
        if (n == imagesQuantity-1) {
            n = 0;
		} else {
            n++;
        }
    }, 1500, n);
}

// function to change carousel image clicking on a dot
function moveCarousel(){
    var circleIndex = $(this).index();
	var activeImage = $(".carousel img.active");
	var activeCircle = $(".carousel i.active");

	activeImage.removeClass("active");
	activeCircle.removeClass("active");

	selectedImage = $(".carousel img").eq(circleIndex);
	selectedImage.addClass("active");
	$(this).addClass("active");
}

// function to increase products' quantity
function addProduct(){
    if (!$(this).siblings("input").val()) {
        $(this).siblings("input").val(1);
	} else {
        $(this)
			.siblings("input")
			.val(parseInt($(this).siblings("input").val().toString()) + 1);
    }
}

// function to decrease products' quantity
function removeProduct() {
    if (!$(this).siblings("input").val() || $(this).siblings("input").val()<=1) {
		$(this).siblings("input").val('');
	} else {
		$(this)
			.siblings("input")
			.val(parseInt($(this).siblings("input").val().toString()) - 1);
	}
}