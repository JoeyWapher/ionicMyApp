angular.module('config',[])
.config(function($ionicConfigProvider){
	$ionicConfigProvider.platform.android.tabs.position('buttom');
	$ionicConfigProvider.platform.ios.tabs.position('buttom');
})
