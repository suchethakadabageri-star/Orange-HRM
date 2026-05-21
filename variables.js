// 1. var -- old way -- function-scoped, can be re-declared and updtaed

var x=10; // global variable
function test()
{
    var y=20; // Function-scoped variable
var y=30;
    console.log(y);
}
test()
console.log(x);
// 2. let
// 3. const     