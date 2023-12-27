//for login
function sublogin(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    //reset error messages
    document.getElementById('usernameError').innerHTML='';
    document.getElementById('passwordError').innerHTML='';
    //using regex patterns
    var usernamePattern=/^[a-zA-Z0-9_@.]{3,}$/;//atleast 3 characters
    var passwordPattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //validate username password
    if(!usernamePattern.test(username)){
        document.getElementById("usernameError").innerHTML='invalid username';
        return false;
    }
    if(!passwordPattern.test(password)){
        document.getElementById('passwordError').innerHTML='Invalid password';
        return false;
    }
    return true;
}

//for liking the gallery
function like(){
    document.getElementById('like').style.color='red';
    alert('Thank you for liking Dining Tables.')
}function like1(){
    document.getElementById('like1').style.color='red';
    alert('Thank you for liking K and Q Chairs.')
}function like2(){
    document.getElementById('like2').style.color='red';
    alert('Thank you for liking Sofa Sets.')
}function like3(){
    document.getElementById('like3').style.color='red';
    alert('Thank you for liking TV Units.')
}function like4(){
    document.getElementById('like4').style.color='red';
    alert('Thank you for liking Reading Room.')
}function like5(){
    document.getElementById('like5').style.color='red';
    alert('Thank you for liking Bed Room.')
}function like6(){
    document.getElementById('like6').style.color='red';
    alert('Thank you for liking Kitchen.')
}function like7(){
    document.getElementById('like7').style.color='red';
    alert('Thank you for liking Party Room.')
}
//for sharing gallery 
function Share(){
    alert('You have no access to share.')
}
//for contact form
function subForm(){
    var cnm=document.getElementById("cusname").value;
    document.getElementById('cnmError').innerHTML='';
    var cnmPattern=/^[a-zA-Z]{3,16}$/;
    var epn=document.getElementById("emph").value;
    document.getElementById('epnError').innerHTML='';
    var epnPattern=/^[a-zA-Z0-9_]{3,16}$/;
    if(!cnmPattern.test(cnm)){
        document.getElementById("cnmError").innerHTML='invalid customer name';
        return false;
    }    
    if(!epnPattern.test(epn)){
        document.getElementById("epnError").innerHTML='invalid email or number';
        return false;
    }
    return true;    
}

//for more content about the products
function morecontent(){
    alert(`For more products suitable for living room visit our site by following. http://anrfurniture.com/livingroom`)
}
function morecontent1(){
    alert(`For more products suitable for kitchen visit our site by following link. http://anrfurniture.com/kitchen`)
}
function morecontent2(){
    alert(`For more products suitable for bed room room visit our site by following. http://anrfurniture.com/bedroom`)
}
function morecontent3(){
    alert(`For more products suitable for party room visit our site by following. http://anrfurniture.com/partyroom`)
}