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
        date: '2015-07-12'
    },
{
    name: "Soup with beef",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
    date: '2015-11-25'
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
    self.delDiv = function(index){
        self.book.splice(index,1);
    
    };
     self.editDiv = function(e){
        self.hide = "visible"
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
    };
    
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