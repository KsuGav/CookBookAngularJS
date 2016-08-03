/**
 * Created by Ksu on 03.08.2016.
 */
var receiptes = [
{
    name: "soup",
    ingridients: {1:'ffff',2:'ddddd',3:'ddddd'},
    describe: "sssssssssss",
    date: '2015-01-05'
},
{
    name: "salad",
    ingridients: {1:'uuuuu',2:'eeeee',3:'mmmmmm'},
    describe: "rrrrrrrrrr",
    date: '2015-11-25'
},
{
    name: "desert",
    ingridients:{1:'ffff',2:'aaaaa',3:'zzzzz'},
    describe: "gggggggggggg",
    date: '2016-04-15'
}
    ];
localStorage.setItem('receipt', JSON.stringify(receiptes)); // записати
var book = JSON.parse(localStorage.getItem('receipt')); // отримати

console.log(book[0].ingridients);

var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope){
    $scope.book = book;
    $scope.delDiv = function(e){
        $(e.target).parent().parent().remove();
    };
    $scope.editDiv = function(element,$event){
        $($event).find('input').focus();
    }
    //$scope.addDiv =  function() {
    //    $scope.book.push({name:$scope.todoName, ingridients:$scope.todoMobile, describe:$scope.todoDesc, date:$scope.todoDesc,done:false});
    //    $scope.todoName = '';
    //    $scope.todoMobile = '';
    //    $scope.todoDesc = '';
    //};
    //for Edit
    //$scope.now = new Date();
})