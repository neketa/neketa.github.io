function daysLeftUntilZelenyaComes() {
    var now = new Date();
    var comeback = new Date(2017, 6, 7, 0);
    var diff = comeback.getTime() - now.getTime();
    var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    var years = Math.floor(days / 365);
    var hours = 24 - now.getHours();
    var minutes = 60 -  now.getMinutes();
    var seconds = 60 - now.getSeconds();
    document.getElementById("timer").innerHTML = Math.abs(years) + ' ' + Math.abs(days) + ' ' + 'days' + ' ' + hours  + ' ' + 'h'; 
    setTimeout(daysLeftUntilZelenyaComes, 1000);
};  
daysLeftUntilZelenyaComes();