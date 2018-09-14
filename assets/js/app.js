var codeapp = angular.module('codeapp', ['nya.bootstrap.select']);

codeapp.run(function($http){
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
  });


codeapp.controller('homeController', function($scope, $http){

  $scope.popup = 0;
  $scope.email = null;
  $scope.pass = null;

  //Poppup
  $scope.change= function(){
    if($scope.popup == 0){
      $scope.popup = 1;
      console.log($scope.popup)
    }
    else{
      $scope.popup = 0;
      console.log($scope.popup)
    }

  }
  
  //Login Firebase
  var config = {
    apiKey: "AIzaSyB0d7KpX5qBdjByP98zH59sUKZY7qrjXJc",
    authDomain: "app-login-6ea15.firebaseapp.com",
    databaseURL: "https://app-login-6ea15.firebaseio.com",
    storageBucket: "app-login-6ea15.appspot.com",
    messagingSenderId: "909869376531",
  };
  firebase.initializeApp(config)

  $scope.loging_firebase = function(){
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.pass)
    .then(function(firebaseUser){
      console.log(firebaseUser)
      
    })    
    .catch(function(error){
      var errorCode = error.code;
      var errorMEssage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Usuário/Senha incorreto');
        
      } else {
        alert(errorMessage);
        
      }
      console.log(error);
      
    });
    
  }

});