var receiptes3 = [
{
    name: "Steak with potatos",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi" +
    " quia quod temporibus velit voluptates.",
    date: '2015-05-05'
},
    {
        name: "Chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
        "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
        "quia quod temporibus velit voluptates.",
        date: '2015-10-24'
    },
{
    name: "Veal medallions",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    date: '2016-04-07'
},
    ];
localStorage.setItem('receipt3', JSON.stringify(receiptes3));

angular.module('Controllers')
    .controller('meatCtrl',[function(){
    var self = this;
    self.book = JSON.parse(localStorage.getItem('receipt3'));
    self.hide = 'hidden';
    self.delDiv = function(e){
        self.book.splice(e,1);
        
    };
    self.editDiv = function(e){
        self.hide = "visible";
      $('#newName').val(self.book[e].name);
        $('#newDescription').val(self.book[e].description);
        self.saveEdit = function(){
            self.addName = self.book[e].name; 
            self.addDescription =self.book[e].description;
            self.addDate = new Date();
            self.hide = 'hidden';
            self.book[e]=({name:self.addName, description:self.addDescription, date:self.addDate, done:false});
            $('#newName').val('');
            $('#newDescription').val('');
        };
    }
    self.saveDiv =  function() {
        self.addName = $('#newName').val();
        self.addDescription = $('#newDescription').val();
        self.addDate = new Date();
        self.book.push({name:self.addName, description:self.addDescription, date:self.addDate, done:false});
        $('#newName').val('');
        $('#newDescription').val('');
    };
    self.addEdit = function(){
        self.hide = "visible"
    };
    self.close = function(){
        self.hide = 'hidden'; 
    }

}]);