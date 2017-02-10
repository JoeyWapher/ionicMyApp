angular.module('guidePage.controller', [])
	.controller('GuidePageCtrl', function($scope) {
		var mySwiper = new Swiper('.swiper-container', {
			autoplayDisableOnInteraction: false,
			autoplay : 5000,
//			setWrapperSize :true,

			//pagination : '#swiper-pagination1',
		})
	})