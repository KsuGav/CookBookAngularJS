var receiptes2 = [
{
    name: "Spring salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi" +
    " quia quod temporibus velit voluptates.",
    date: '2015-02-13'
},
    {
        name: "Salad-granat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
        "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
        "quia quod temporibus velit voluptates.",
        date: '2014-06-24'
    },
{
    name: "Olivie",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    date: '2016-07-15'
},
    ];
localStorage.setItem('receipt2', JSON.stringify(receiptes2));

angular.module('Controllers')
    .controller('saladCtrl',[function(){
    var self = this;
    self.book = JSON.parse(localStorage.getItem('receipt2'));
    self.delDiv = function(e){
        var index = self.book.indexOf(e);
        if (index != -1) {
            self.book.splice(index, 1);
        } 
    };
    self.editDiv = function(e){
        $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $("#addEdit").css({display: "block"})
            .animate({top: "0px",opacity: "1"}, 1000);
         var index = self.book.indexOf(e);
        if (index != -1) {
            self.newName = self.book[index].name;
            self.newDescription = self.book[index].description;
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
                self.book[index]=({name:self.addName, description:self.addDescription,date:self.addDate, done:false});
                self.newName='';
                self.newDescription = '';
            }
        };
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
        $("#addEdit").css({display: "block"})
        .animate({top: "0px",opacity: "1"}, 1000);
    };
    self.close = function(){
        $(".background").animate({opacity: "0"});
        $("#addEdit").animate({opacity: "0"});
        setTimeout(function () {
            $("#addEdit").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
        self.newName='';
        self.newDescription='';
        self.newName='';
        self.newDescription = '';
    }
}]);