import angular from 'angular';
import ngRouter from 'angular-route';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import './style/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/open-iconic-bootstrap.scss';
import 'popper.js';
import homeCtrl from './home/home.controller.js';
import artistsCtrl from './artists/artists.controller.js';



const app = angular.module('App', [
    uiRouter,
    ngRouter,
    ngAnimate
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    const homeState = {
        name: 'home',
        url: '/',
        templateUrl: './home/home.html',
        controller: homeCtrl,
        params: {
            loadName: "flume"
        }
    }

    const artistsState = {
        name: 'artists',
        url: '/artists',
        templateUrl: './artists/artists.html',
        controller: artistsCtrl,
        params: {
            loadArtistName: "flume"
        }
    }

    const aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: './about/about.html'

    }

    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(artistsState);

    $urlRouterProvider.otherwise('/');
}]);