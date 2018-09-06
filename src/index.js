var app = angular.module('app', ['ui.router', 'chart.js', 'ui.bootstrap', 'toaster']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $uibModalProvider) {
    $httpProvider.defaults.headers.post = { 'Content-Type': 'application/x-www-form-urlencoded' };
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }

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
        
        .state('inventory', {
            url: '/inventory',
            templateUrl: 'src/views/inventory.html',
            controller: 'InventoryCtrl as vm',
            title: 'Inventory',
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
        
        .state('reports', {
            url: '/reports',
            title: 'Reports',
        })
        
        .state('user-management', {
            url: '/user-management',
            templateUrl: 'src/views/user-management.html',
            controller: 'UserManagementCtrl as vm',
            title: 'User Management',
        })
        
        .state('backup', {
            url: '/backup',
            title: 'Backup',
        })

});
