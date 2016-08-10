var receiptes2 = [
{
    name: "Spring salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi" +
    " quia quod temporibus velit voluptates.",
//    photo:"img/soup.jpg",
    date: '2015-02-13'
},
    {
        name: "Salad-granat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
        "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
        "quia quod temporibus velit voluptates.",
//        photo:"img/steak.jpg",
        date: '2015-06-24'
    },
{
    name: "Olivie",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur " +
    "error est iusto labore possimus tenetur ut voluptatem voluptatum. Culpa excepturi non placeat quasi " +
    "quia quod temporibus velit voluptates.",
//    photo:"img/salad.jpeg",
    date: '2016-07-15'
},
    ];
localStorage.setItem('receipt2', JSON.stringify(receiptes2));

angular.module('Controllers')
    .controller('saladCtrl',[function(){
    var self = this;
    self.book = JSON.parse(localStorage.getItem('receipt2'));
    self.hide = 'hidden';
    self.delDiv = function(e){
        self.book.splice(e,1);
        
    };
    self.editDiv = function(e){
        self.hide = "visible"
        $('#newName').val(self.book[e].name);
        $('#newDescription').val(self.book[e].description);
        self.saveEdit = function(){ 
            self.addName = $('#newName').val(); 
            self.addDescription =$('#newDescription').val();
            self.addDate = new Date();
            self.hide = 'hidden';
            self.book[e]=({name:self.addName, description:self.addDescription,date:self.addDate, done:false});
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