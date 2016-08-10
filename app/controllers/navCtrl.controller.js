/**
 * Created by Ksu on 05.08.2016.
 */
angular.module('Controllers',[])
    .controller('NavigationCtrl', [function () {
         this.arr = [
            {
                title: 'Main',
                link: '#/'
            },
            {
                title: 'Soups',
                link: '#/soups'
            },
            {
                title: 'Meat',
                link: '#/meat'
            },
            {
                title: 'Salads',
                link: '#/salads'
            }
        ];
    }])
.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, previous) {
    var page = current.$$route;
    $rootScope.page = page;
  });
})
