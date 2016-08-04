/**
 * Created by Ksu on 03.08.2016.
 */
var receiptes = [
{
    name: "Soup",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi" +
    " quia quod temporibus velit voluptates.",
    photo:"img/soup.jpg",
    date: '2015-01-05'
},
    {
        name: "Steak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
        "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
        "quia quod temporibus velit voluptates.",
        photo:"img/steak.jpg",
        date: '2015-07-12'
    },
{
    name: "Salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    photo:"img/salad.jpeg",
    date: '2015-11-25'
},
{
    name: "Desert",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    photo:"img/dessert.jpg",
    date: '2016-04-15'
}
    ];
localStorage.setItem('receipt', JSON.stringify(receiptes));
var book = JSON.parse(localStorage.getItem('receipt'));

//console.log(book);

var app = angular.module('myApp', []);
app.controller('myCtrl',function($scope){
    $scope.book = book;
    $scope.delDiv = function(e){
        //$(e.target).parent().parent().remove();
        $scope.book.splice(e,1);
        console.log(book);
    };
    $scope.editDiv = function(e){//oткрывается для редактироания с текстом выбраного дива
        $('#addEdit').show();
        $scope.show = true;
      $('#newName').val($scope.book[e].name);
        $('#newDescription').val($scope.book[e].description);

    };
    $scope.saveEdit = function(e){ //сохраняется измененная инфа
        $scope.addName = $('#newName').val();
        $scope.addDescription = $('#newDescription').val();
        $scope.addDate = new Date();
        $scope.hide = true;
        $scope.book[e]=({name:$scope.addName, description:$scope.addDescription, date:$scope.addDate, done:false});
    };
    $scope.saveDiv =  function() {
        $scope.addName = $('#newName').val();
        $scope.addDescription = $('#newDescription').val();
        $scope.addDate = new Date();
        $scope.hide = true;
        $scope.book.push({name:$scope.addName, description:$scope.addDescription, date:$scope.addDate, done:false});
        //$scope.add = function(){
        //    var reader = new FileReader();
        //    reader.onloadend = function() {
        //        var res = this.result
        //        return res ;
        //    };
        //    $scope.book.push({photo:res});
        //}
    };

    //for Edit
    //$scope.now = new Date();
});

//как подключиться к отдельному файлу json
//загрузить картинку в новый див
//страница загружается с задержкой