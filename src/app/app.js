/**
 * Created by hieu on 3/14/15.
 */
angular.module( 'angularClientBase', [
    'templates-app',
    'templates-common',
    'angularClientBase.home',
    'ui.router'
])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {

        $stateProvider
            .state('root', {
                url : "/",
                views : {
                    "main" : {
                        templateUrl: 'index.tpl.html'
                    }
                },
                data:{ pageTitle: 'Root' }
            });
    })

    .run( function run () {
    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | SaveO' ;
            }
        });
    })

;

