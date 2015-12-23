$(function() {

    var $firstName = $("#firstname");
    $firstName.on("mouseover", function(){
        var $title = $firstName.attr("title");
        $(".main__firstname label").append('<p class="tittle__main__firstname">' + $title + '</p>');
    });
    $firstName.on("mouseout", function(){
        $(".tittle__main__firstname").remove();
    });

    var $lastName = $("#lastname");
    $lastName.on("mouseover", function(){
        var $title = $lastName.attr("title");
        $(".main__lastname label").append('<p class="tittle__main__lastname">' + $title + '</p>');
    });
    $lastName.on("mouseout", function(){
        $('.tittle__main__lastname').remove();
    });


    var $address = $("#address");
    $address.on("mouseover", function(){
        var $title = $address.attr("title");
        $(".main__address label").append('<p class="tittle__main__address">' + $title + '</p>');
    });
    $address.on("mouseout", function(){
        $('.tittle__main__address').remove();
    });


  });