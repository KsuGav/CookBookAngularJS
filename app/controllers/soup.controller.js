var receiptes = [
{
    name: "Cream soup",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi" +
    " quia quod temporibus velit voluptates.",
    date: '2015-01-05'
},
    {
        name: "Soup with salmon",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
        "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
        "quia quod temporibus velit voluptates.",
        date: '2016-07-12'
    },
{
    name: "Soup with beef",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    date: '2014-11-25'
},
{
    name: "Green soup",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    date: '2016-04-15'
}
    ];

localStorage.setItem('receipt', JSON.stringify(receiptes));

angular.module('Controllers')
    .controller('soupCtrl',[function(){
    var self = this;
    self.book = JSON.parse(localStorage.getItem('receipt'));
    self.hide = 'hidden';
    self.delDiv = function(e){
        var index = self.book.indexOf(e);
        if (index != -1) {
            self.book.splice(index, 1);
        }
    };
     self.editDiv = function(e){
          $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $("#addEdit").css({display: "block"});
        $("#addEdit").animate({top: "0px",opacity: "1"}, 1000);
//        self.hide = "visible"
        var index = self.book.indexOf(e);
        if (index != -1) {
        self.newName =self.book[index].name;
        self.newDescription=self.book[index].description;
        self.saveEdit = function(){
             $(".background").animate({opacity: "0"});
        $("#addEdit").animate({opacity: "0"});
        setTimeout(function () {
            $("#addEdit").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
            self.addName = self.newName; 
            self.addDescription =self.newDescription;
            self.addDate = new Date();
            self.hide = 'hidden';
            self.book[index]=({name:self.addName, description:self.addDescription, date:self.addDate, done:false});
            self.newName='';
            self.newDescription='';
        };
        }
    };
    
    self.saveDiv =  function() {
        self.addName = self.newName;
        self.addDescription = self.newDescription;
        self.addDate = new Date();
        self.book.push({name:self.addName, description:self.addDescription, date:self.addDate, done:false});
        self.newName='';
        self.newDescription='';
    };
    self.addEdit = function(){
        $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $("#addEdit").css({display: "block"});
        $("#addEdit").animate({top: "0px",opacity: "1"}, 1000);
    };
    self.close = function(){
             $(".background").animate({opacity: "0"});
            $("#addEdit").animate({opacity: "0"});
            setTimeout(function () {
                $("#addEdit").css({display: "none"});
                $(".background").css({display: "none"});
            }, 1000);
        }
}]);