import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

users:any;
countBasic:any;
countAdvance:any;
basicUser:any;
advanceUser:any;
constructor() { }

ngOnInit() {
this.getUsers();
this.search();
}

getUsers(){
$.ajax({
url:"http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
type:'GET',
success:(response) => {
console.log("UserList",response);
this.users=response.data.data;
//this.basicUSer=this.users;
//this.advanceUser=this.users;
this.basicUser=this.users.filter(function(user){
  return user.service=="basic" || user.service=="Basic";
})


this.advanceUser=this.users.filter(function(user){
  return user.service=="advance" || user.service=="Advance";
})
var users_data="";
$.each(this.users,(key,value) =>{
users_data+='<tr>';
users_data+='<td>'+value.firstName+'</td>';
users_data+='<td>'+value.lastName+'</td>';
users_data+='<td>'+value.email+'</td>';
users_data+='<td>'+value.service+'</td>';
users_data+='</tr>'
});
$('#usersTable').html(users_data);
this.countBasic=this.users.filter(function (check) {
return check.service==('basic')||check.service==('Basic')
}).length;
console.log(this.countBasic)
$('#basicData').html(this.countBasic);

this.countAdvance=this.users.filter( function (check){
return check.service==('advance')
}).length;
console.log(this.countAdvance);
$('#advanceData').html(this.countAdvance);
}
})
$('#dataTable').DataTable();
}
getBasicUser(){
  console.log("sbasic in",this.basicUser)
  var users_data="";
  $.each(this.basicUser,(key,value) =>{
  users_data+='<tr>';
  users_data+='<td>'+value.firstName+'</td>';
  users_data+='<td>'+value.lastName+'</td>';
  users_data+='<td>'+value.email+'</td>';
  users_data+='<td>'+value.service+'</td>';
  users_data+='</tr>'
  });
  $('#usersTable').html(users_data);
}
search(){
$("#myInput").on("keyup", function() {
var value = $(this).val().toLowerCase();
console.log(value)
$("#usersTable tr").filter(function() {
$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
});
});
}

getAdvanceUser(){

  var users_data="";
  $.each(this.advanceUser,(key,value) =>{
  users_data+='<tr>';
  users_data+='<td>'+value.firstName+'</td>';
  users_data+='<td>'+value.lastName+'</td>';
  users_data+='<td>'+value.email+'</td>';
  users_data+='<td>'+value.service+'</td>';
  users_data+='</tr>'
  });
  $('#usersTable').html(users_data);
}
}