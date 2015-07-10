var checklistApp = angular.module('checklistApp', []);

checklistApp.controller('checklistController', function($scope) {

	$scope.checklistItems  = [
							{title: 'Meeting', date: '2015-07-04', description: 'Meeting to do the briefing for the new client, decide about use AngularJS or JQuery' },
							{title: 'Laundry', date: '2015-07-06', description: 'Pick-up laundry at Cleanex Laundromat before 7pm Wednesday' },
							{title: 'Deliver Midterm Site', date: '2015-07-08', description: 'Don\'t forget to finish the site till Monday Night!' }
						 ]

	$scope.addChecklist = function( new_checklist ){
		$scope.checklistItems.push(new_checklist);
		$scope.adding_checklist = [ ];

		$('.modal').modal('hide');

	}					 
});