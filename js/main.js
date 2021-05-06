let onChange = function(url,colo)  {
    document.querySelector('.starbucks').src=url;
    document.querySelector('.circle').style.backgroundColor= colo;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}