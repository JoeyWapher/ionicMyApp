angular.module('guidePage.controller', [])
	.controller('GuidePageCtrl',['$scope','$state','$ionicHistory', function($scope,$state,$ionicHistory) {
		var mySwiper = new Swiper('.swiper-container', {
			// autoplayDisableOnInteraction: false,
			// autoplay : 5000,
//			setWrapperSize :true,
      onSlideChangeEnd: function(swiper){

        var index = swiper.activeIndex+1;
        // alert(index); //切换结束时，告诉我现在是第几个slide
        if(index==2 || index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      },
			pagination : '.swiper-pagination'
		});
    $scope.onclose = function () {
      $state.go('tab.home');
    }

	}])
