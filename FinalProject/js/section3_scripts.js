/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        navbarCollapsible.classList.add('navbar-shrink')
        // if (window.scrollY === 0) {
        //     navbarCollapsible.classList.remove('navbar-shrink')
        // } else {
        //     navbarCollapsible.classList.add('navbar-shrink')
        // }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


let a,b
$(function(){
    loadServerData();
});

function loadServerData(){
    $("#result").empty();
    if(this.value==0) return; 
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="64e9e5a1c99a1e3743233bfc091f6ad2";
    console.log(this.value)


    navigator.geolocation.getCurrentPosition(result)
    console.log(a)
    console.log(b)
}

function result(position){
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="64e9e5a1c99a1e3743233bfc091f6ad2";
    let thisCoords=position.coords;
    a=thisCoords.latitude
    b=thisCoords.longitude
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    $.getJSON(weatherAPI_URL,{
        lat:a,
        lon:b,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    
    .done(function(data) {
        $("#result")
        .append(`<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
        <p>${data.weather[0].description}</p>`)
        $("#result")
        .append(`<h3 style="color: white">氣溫: ${data.main.temp_min}~ ${data.main.temp_max}</h2>`);
        if(data.main.temp_min>25){
            $("#result")
            .append(`<h2 >天氣好熱!適合來杯果汁!</h2>`);
            $("#result")
            .append(`<img src='./assets/img/juice.png'>`);

        }
        else if(data.main.temp_min<20){
            $("#result")
            .append(`<h2>好冷哇!快喝熱呼呼的鮮奶茶~</h2>`);
            $("#result")
            .append(`<img src='./assets/img/milktea.png'>`);
        }
        else{
            $("#result")
            .append(`<h2>不冷不熱剛剛好，喝杯珍珠奶茶!</h2>`);
            $("#result")
            .append(`<img src='./assets/img/bubbletea.png'>`);
        }
        ;
    })
    .fail(function(){ console.log("Error");})
    .always(function(){ console.log("Always");});
    // window.location.href=`https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}
function error(err){
    alert(err);
}