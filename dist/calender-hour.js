!function(){"use strict";function e(){return{restrict:"E",replace:!0,require:["^ngModel","smTime"],scope:{initialTime:"@",format:"@"},controller:["$scope","$timeout",t],controllerAs:"vm",templateUrl:"picker/calender-hour.html",link:function(e,t,r,i){var o=i[0],n=i[1];n.configureNgModel(o),e.$on("$destroy",function(){t.remove()})}}}var t=function(e,t){var r=this;r.$scope=e,r.$timeout=t,r.initialDate=e.initialDate,r.format=e.format,r.hourCells=[],r.minuteCells=[],r.moveCalenderAnimation="",r.format=angular.isUndefined(r.format)?"HH:mm":r.format,r.initialDate=angular.isUndefined(r.initialDate)?moment():moment(r.initialDate,r.format),r.currentDate=r.initialDate.clone(),r.init(),e.$watch("vm.topIndex",angular.bind(this,function(e){var t=Math.floor(e/1);r.selectedYear=t}))};t.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.ngModelCtrl.$viewValue=t.currentDate}},t.prototype.setNgModelValue=function(e){var t=this;t.ngModelCtrl.$setViewValue(e),t.ngModelCtrl.$render()},t.prototype.init=function(){var e=this;e.buidHourCells(),e.buidMinuteCells(),e.headerDispalyFormat="HH:mm"},t.prototype.buidHourCells=function(){for(var e=this,t=0;23>=t;t++){var r={hour:t,isCurrent:e.initialDate.hour()===t};e.hourCells.push(r)}},t.prototype.buidMinuteCells=function(){for(var e=this,t=0;59>=t;t++){var r={minute:t,isCurrent:e.initialDate.minute()===t};e.minuteCells.push(r)}},t.prototype.selectDate=function(e,t){var r=this;t||(r.currentDate=e,r.$scope.$emit("calender:date-selected"))},t.prototype.setHour=function(e){var t=this;t.currentDate.hour(e),t.setNgModelValue(t.currentDate.format(t.format))},t.prototype.setMinute=function(e){var t=this;t.currentDate.minute(e),t.setNgModelValue(t.currentDate.format(t.format))},t.prototype.selectedDateTime=function(){var e=this;e.setNgModelValue(e.currentDate.format(e.format)),"time"===e.mode?e.view="HOUR":e.view="DATE",e.$scope.$emit("calender:close")};var r=angular.module("dateTimePicker");r.directive("smTime",["$timeout",e])}();