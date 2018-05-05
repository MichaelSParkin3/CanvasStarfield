// A $( document ).ready() block.
$( document ).ready(function() {
/*
Start of starfield gen
*/
  var width = $( window ).width();
  var height = $( document ).height();


  // Returns width of browser viewport
  $( window ).width();
   console.log("vp "+$( window ).width());
  // Returns width of HTML document
  $( document ).width();
  console.log("html "+$( document ).height());

  var newField = '<canvas id="starfield" width="'+width+'" height="'+height+'"></canvas>'

  $( "#galaxy" ).html(newField);


  var newField2 = '<canvas id="grad" width="'+width+'" height="'+height+'"></canvas>'

  $( "#gradient" ).html(newField2);


  var canvas2 = document.getElementById("grad");
  var context2 = canvas2.getContext("2d");

  gr = context2.createLinearGradient(0, 0, 0, height/2);
  gr.addColorStop(1,"#1b2735");
  gr.addColorStop(0,"black");
  context2.fillStyle = gr;
  context2.fillRect(0, 0, width, height);


  function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  var canvas = document.getElementById("starfield"),
  context = canvas.getContext("2d"),
  stars = 400 * (width / 1000),
  colorrange = [0,60,240];
  for (var i = 0; i < stars; i++) {
      var x = Math.random() * canvas.offsetWidth;
      y = Math.random() * canvas.offsetHeight,
      radius = Math.random() * 3.3,
      hue = colorrange[getRandom(0,colorrange.length - 1)],
      sat = getRandom(50,100);
      context.beginPath();
      //context.arc(x, y, radius, 0, 360);
      context.rect(x,y,radius,radius);
      context.fillStyle = "hsl(" + hue + ", " + sat + "%, 100%)";
      context.fill();
  }
  /*
  End of starfield gen
  */
});
