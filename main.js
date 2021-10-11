function daysLeftUntilZelenyaComes() {
    var now = new Date();
    var comeback = new Date(2017, 6, 7, 0);
    var diff = comeback.getTime() - now.getTime();
    var days = diff / 1000 / 60 / 60 / 24;
    var hours = 24 - now.getHours();
    var minutes = 60 -  now.getMinutes();
    var seconds = 60 - now.getSeconds();
    document.getElementById("timer").innerHTML = Math.floor(days) + ' ' + 'days' + ' ' + hours  + ' ' + 'h' + ' ' + minutes + ' '  + 'min'; 
    setTimeout(daysLeftUntilZelenyaComes, 1000);
};  
daysLeftUntilZelenyaComes();