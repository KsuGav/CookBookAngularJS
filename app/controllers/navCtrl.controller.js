/**
 * Created by Ksu on 05.08.2016.
 */
angular.module('Controllers',[])
    .controller('NavigationCtrl', [function () {
         var vm = this;
        vm.test = 'test';
        vm.arr = [
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
    }]);