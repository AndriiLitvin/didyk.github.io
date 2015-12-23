$(document).ready(function (){

   var $mainLinkOne = $(".main__link.one");
   var $mainLinkTwo = $(".main__link.two");
   var $mainLinkThree = $(".main__link.three");
   
   var $mainItemOne = $(".main__item.one");
   var $mainItemTwo = $(".main__item.two");
   var $mainItemThree = $(".main__item.three");


       $mainLinkOne.on('click', function(){
          $mainItemOne.addClass("hide__border");
          $mainItemTwo.removeClass("hide__border");
          $mainItemThree.removeClass("hide__border");

          var $mainTabsAll = $(".main__tabs");
          $mainTabsAll.hide();

          var $mainTabsOne = $(".main__tabs.one");
          $mainTabsOne.toggle();
    });

       $mainLinkTwo.on('click', function(){
          $mainItemOne.removeClass("hide__border");
          $mainItemTwo.addClass("hide__border");
          $mainItemThree.removeClass("hide__border");

          var $mainTabsAll = $(".main__tabs");
          $mainTabsAll.hide();
          var $mainTabsTwo = $(".main__tabs.two");
          $mainTabsTwo.toggle();
    });

       $mainLinkThree.on('click', function(){
          $mainItemOne.removeClass("hide__border");
          $mainItemTwo.removeClass("hide__border");
          $mainItemThree.addClass("hide__border");

          var $mainTabsAll = $(".main__tabs");
          $mainTabsAll.hide();
          var $mainTabsThree = $(".main__tabs.three");
          $mainTabsThree.toggle();
    });

});