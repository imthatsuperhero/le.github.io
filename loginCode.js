function checkCreds(){
    // place to store first name
    var firstName = document.getElementById("fName").value;
    //place to store last name
    var lastName = document.getElementById("lName").value; 
    //place to store badge numbers
    var badgeNumber = document.getElementById("badgeID").value;
    //show full name result
    var fullName = firstName + " " + lastName;

    if(fullName.length > 20 || fullName.length == 1){
        //if true
        document.getElementById("loginStatus").innerHTML = "invalid full name!";
    }else if(badgeNumber > 999 || badgeNumber < 1){
        //if true
        document.getElementById("loginStatus").innerHTML = "invalid badge number!";
    }else {
        //when correct
        alert("access granted! Welcome!" + fullName);
        location.replace("index.html");
    }
    
}