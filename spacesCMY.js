window.addEventListener("load", function() {
    var magentaslide = document.getElementById("magentaslider");
    var yellowslide = document.getElementById("yellowslider");
    var cyanslide = document.getElementById("cyanslider");

    var valmagenta = document.getElementById('magentaval');
    var valyellow = document.getElementById("yellowval");
    var valcyan = document.getElementById("cyanval");

	process();

    magentaslide.addEventListener("input",process);
    yellowslide.addEventListener("input",process);
    cyanslide.addEventListener("input",process);

    function process(){

        valmagenta.innerHTML = magentaslide.value;
        valyellow.innerHTML = yellowslide.value;
        valcyan.innerHTML = cyanslide.value;

        var k1 = parseInt(magentaslide.value*255);
        var k2 = parseInt(yellowslide.value*255);
        var k3 = parseInt(cyanslide.value*255);

        var colors = cmyToRgb([k1,k2,k3]);

        document.getElementById("k1val").innerHTML = magentaslide.value;
        document.getElementById("k2val").innerHTML = yellowslide.value;
        document.getElementById("k3val").innerHTML = cyanslide.value;

        document.getElementById("k1c").innerHTML = magentaslide.value;
        document.getElementById("k2c").innerHTML = yellowslide.value;
        document.getElementById("k3c").innerHTML = cyanslide.value;

        document.getElementById("bigcircle").style.backgroundColor = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";

    }
	
	function cmyToRgb(color){
		return [255 - color[0],255 - color[1],255 - color[2]];
	}
	
	
});



