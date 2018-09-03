var app = angular.module('app', ['ui.router', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'src/views/login.html',
            controller: 'MainCtrl as vm',
            title: 'Login'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'src/views/dashboard.html',
            controller: 'DashboardCtrl as vm',
            title: 'Dashboard',
        })

        .state('sales', {
            url: '/sales',
            templateUrl: 'src/views/sales.html',
            controller: 'SalesCtrl as vm',
            title: 'Sales',
        })
        
        .state('expenses', {
            url: '/expenses',
            title: 'Expenses',
        })
        
        .state('inventory', {
            url: '/inventory',
            title: 'Inventory',
        })
        
        .state('reports', {
            url: '/reports',
            title: 'Reports',
        })
        
        .state('user-management', {
            url: '/user-management',
            title: 'User Management',
        })
        
        .state('backup', {
            url: '/backup',
            title: 'Backup',
        })

});
