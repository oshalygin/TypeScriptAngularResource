module app.layout{
	"use strict";
	
	interface IHomeController{
		title: string,
		projectName: string,
		copyrightDate: Date;
	}
	
	class HomeController implements IHomeController{
		title: string;
		projectName: string;
		copyrightDate: Date;
		
		constructor(){
			var vm = this;
			vm.title = "Landing Page";
			vm.copyrightDate = new Date(1, 1, 2015);
			vm.projectName = "TypeScript Angular $resource Walkthrough";
		}
		
		
	}
	
	angular.module("app.home")
		.controller("app.home.HomeController", 
		HomeController); 
	
	
}