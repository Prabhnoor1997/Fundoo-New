module.exports = {
    url: 'mongodb://localhost:27017/chatapp'
}



// app.controller('title', function ($scope,$http,$window,$timeout) {  
          
//     var socket = io(); //making Socket.io object

//     var TypeTimer;                
//     var TypingInterval = 1000;
//     var data_server;

//     $scope.keyup = function() {
//         $timeout.cancel(TypeTimer);
//         TypeTimer=$timeout( function(){
//             data_server={
//                 data_name:$scope.name,
//                 data_val:"Socket.io"
//               }
//             socket.emit('get msg',data_server); //sending data to server
//          }, TypingInterval);
//     };



//     $scope.keydown = function(){
//         $timeout.cancel(TypeTimer);
//     };


//     $scope.change = function() {
//         $scope.counter++;
//         data_server={
//              data_name:$scope.name,
//              data_val:$scope.name+" is typing"
//         }
//         $timeout.cancel(TypeTimer); 
//         socket.emit('get msg',data_server); //sending data to server
//     };

//     $scope.blur = function(){
//         $timeout.cancel(TypeTimer);
//         data_server={
//              data_name:$scope.name,
//              data_val:"Socket.io"
//         }
//         socket.emit('get msg',data_server); //sending data to server
//     };
    
//     //Getting data from server and applying in client side
//     socket.on('set msg',function(data){
//         data=JSON.parse(data);
//        data=JSON.parse(data);
//         if($scope.name!=data.data_name){
//           document.title = data.data_val;
//         } 
//     });   
// });