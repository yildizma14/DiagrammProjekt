// y = 370 - %*10

var werte17 = ["31.5", "26.9", "26.0", "5.3", "4.4", "3.8", "2.3"];
var werte13 = ["24.0", "26.8", "20.5", "5.0", "0", "12.4", "2.0"];



for (var x = 0; x < werte17.length; x++)
{
  if(x==0)
  {
    document.write("  Prozentpunkte 2017 <br /> <ol>");
  }
  document.write('<li>'+werte17[x]+'</li>');
  if (x==werte17.length-1)
  {
    document.write("</ol>");
    for (var i = 0; i < werte13.length; i++)
    {
      if(i==0)
      {
        document.write(" Prozentpunkte 2013 <br /> <ol>");
      }
      document.write('<li>'+werte13[i]+'</li>');
      if (i==werte13.length-1)
      {
        document.write("</ol>");
      }
    };
  }
};


function Show2017() {
  var x = document.getElementById("zahlen2017");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }


};
function Show2013() {
  var x = document.getElementById("zahlen2013");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
      $('#vp2013').attr('y', 370 - werte13[0]*10);
      $('#sp2013').attr('y', 370 - werte13[1]*10);
  $('#fp2013').attr('y', 370 - werte13[2]*10);
  $('#neos2013').attr('y', 370 - werte13[3]*10);
  $('#gruen2013').attr('y', 370 - werte13[5]*10);
  $('#sonstige2013').attr('y', 370 - werte13[6]*10);

$('#vp2013').attr('height', werte13[0]*10);
$('#sp2013').attr('height', werte13[1]*10);
  $('#fp2013').attr('height', werte13[2]*10);
$('#neos2013').attr('height', werte13[3]*10);
$('#gruen2013').attr('height', werte13[5]*10);
$('#sonstige2013').attr('height', werte13[6]*10);
};
function ShowAll() {
  Show2017();
  Show2013();
};
