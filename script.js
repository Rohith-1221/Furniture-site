var swiper=new Swiper(".slide-content",{
    slidesPerView:4,
    spaceBetween:20,
    slidesPerGroup:4,
    loop:true,
    loopFillGroupWithBlank:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

//for liking the gallery
function rate(){
    document.getElementById('like').style.color='red';
    alert('you liked this product.')
}function rate1(){
    document.getElementById('like1').style.color='red';
    alert('you liked this product.')
}function rate2(){
    document.getElementById('like2').style.color='red';
    alert('you liked this product.')
}function rate3(){
    document.getElementById('like3').style.color='red';
    alert('you liked this product.')
}function rate4(){
    document.getElementById('like4').style.color='red';
    alert('you liked this product.')
}function rate5(){
    document.getElementById('like5').style.color='red';
    alert('you liked this product.')
}function rate6(){
    document.getElementById('like6').style.color='red';
    alert('you liked this product.')
}function rate7(){
    document.getElementById('like7').style.color='red';
    alert('you liked this product.')
}
//for sharing gallery 
function Share(){
    alert('You have no access to share.')
}
//for contact form
function subForm(){
//     sub();
//     // alert('Thank you for contacting us. We will be in touch with you very soon.');
// }
// function sub(){
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
