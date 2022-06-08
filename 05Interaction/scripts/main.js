
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}

setInterval(spin, 16);


// myOtherBox.addEventListener('mouseenter', function(){
// 	rotationSpeed = 0.01;
// 	console.log('mouse enter');
// });
