// $(".toggle").click(function () {
//     $('ul').slideToggle('fast', function () {
//         if ($(this).is(':visible'))
//             $(this).css('display', 'flex');
//     });
// });

// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     var count = document.getElementById("counter");
//     count.innerHTML = ++upto;
//     if (upto === 1000) {
//         clearInterval(counts);
//     }
// }

setInterval(function () {
    var d = new Date();
    var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet 00:00 to seconds for easier caculation
    var fiveMin = 60 * 15; //five minutes is 300 seconds!
    var timeleft = fiveMin - seconds % fiveMin; // let's say 01:30, then current seconds is 90, 90%300 = 90, then 300-90 = 210. That's the time left!
    var result = parseInt(timeleft / 60) + "m" + ':' + timeleft % 60 + "s"; //formart seconds into 00:00 
    document.getElementById('test').innerHTML = result;

}, 500) //calling it every 0.5 second to do a count down