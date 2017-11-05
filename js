$(document).ready(function(){ 
  var twitchURL = "https://wind-bow.glitch.me/twitch-api/";
  var twitchUsers = ["freecodecamp", "starcraft", "medrybw", "esl_sc2", "terakilobyte"];
  
  //display all users by default
  $("#button-all").click(function(){
    $("#crown1").css("display", "initial");
    $("#crown2").css("display", "none");
    $("#crown3").css("display", "none");
    
    $("#display-area").empty();
    var x;
    for(x = 0; x < twitchUsers.length; x++){
      (function (x){
        var allUsersURL = twitchURL + "users/" + twitchUsers[x];
        $.ajax({
          url: allUsersURL,
          success: function(data){
          //do another ajax all to check user`s online/offline status
            var onUsersURL = twitchURL + "streams/" + twitchUsers[x];
            $.ajax({
              url: onUsersURL,
              success: function(data1){
                        
                            if (data1.stream !== null){ //if there is data, user is online
                              if(data.logo !== null){ // if user has a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='" + data.logo + "' id='user-logo'>" + data.display_name + "<p class='whatson'>" + data1.stream.channel.status + "</p></a></li>");}
                              else{//if user doesn't have a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='https://karinawidyani.files.wordpress.com/2017/11/nologo.png' id='user-logo'>" + data.display_name + "<p class='whatson'>" + data1.stream.channel.status + "</p></a></li>");
                              }
                            }
                            else{//if user is offline
                              if(data.logo !== null){ // if user has a logo
                              $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='" + data.logo + "' id='user-logo'>" + data.display_name + "</a></li>");}
                              else{//if user doesn't have a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='https://karinawidyani.files.wordpress.com/2017/11/nologo.png' id='user-logo'>" + data.display_name + "</a></li>");
                              }
                             
                            }
          }
        });
          }
           });
      })(x);
       }
    }).trigger("click");         
       

  
//display users that are currently online
$("#button-on").click(function(){
  $("#crown1").css("display", "none");
  $("#crown3").css("display", "none");
  $("#crown2").css("display", "initial");
  $("#display-area").empty();
   var x;
    for(x = 0; x < twitchUsers.length; x++){
      (function (x){
        var allUsersURL = twitchURL + "users/" + twitchUsers[x];
        $.ajax({
          url: allUsersURL,
          success: function(data){
            //do an ajax call to find the user's online/offline status
            var onUsersURL = twitchURL + "streams/" + twitchUsers[x];
            $.ajax({
              url: onUsersURL,
              success: function(data1){
                            if (data1.stream !== null){ //if there is data, user is online
                              if(data.logo !== null){ // if user has a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='" + data.logo + "' id='user-logo'>" + data.display_name + "<p class='whatson'>" + data1.stream.channel.status + "</p></a></li>");}
                              else{//if user doesn't have a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='https://karinawidyani.files.wordpress.com/2017/11/nologo.png' id='user-logo'>" + data.display_name + "<p class='whatson'>" + data1.stream.channel.status + "</p></a></li>");}
                              }
                            }
                          });  
                         }     
                           
                   });
      })(x);
    }
});
  

//display users that are currently offline
$("#button-off").click(function(){
   $("#crown1").css("display", "none");
    $("#crown2").css("display", "none");
  $("#crown3").css("display", "initial");
  $("#display-area").empty();
   var x;
    for(x = 0; x < twitchUsers.length; x++){
      (function (x){
        var allUsersURL = twitchURL + "users/" + twitchUsers[x];
        $.ajax({
          url: allUsersURL,
          success: function(data){
            //do an ajax call to find the user's online/offline status
            var onUsersURL = twitchURL + "streams/" + twitchUsers[x];
            $.ajax({
              url: onUsersURL,
              success: function(data1){
                            if (data1.stream == null){ //if there is no data, user is offline
                              if(data.logo !== null){ // if user has a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='" + data.logo + "' id='user-logo'>" + data.display_name + "</a></li>");}
                              else{//if user doesn't have a logo
                                $("#display-area").append("<li><a href='https://twitch.tv/" + twitchUsers[x] + "' target='_blank'><img src='https://karinawidyani.files.wordpress.com/2017/11/nologo.png' id='user-logo'>" + data.display_name + "</a></li>");}
                              }
                            }
        });
          }
                   });
      })(x);
    }
});
  
/*//add a new user to the application
$("#add-user").click(function(){
  var channelname = $("input").val();
  if (twitchUsers.includes(channelname)){
    $("#addremove-user").html("Unable to add an existing user. Please enter another user name.");
    }
  else{
    twitchUsers.push(channelname);
  }
})
  
//remove an new user to the application
$("#remove-user").click(function(){
  var channelname = $("input").val();
  twitchUsers.push(channelname);
})*/

});
