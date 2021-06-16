
var n = localStorage.getItem('on_load_counter');
        
if (n === null) {
  n = 0;
}
n++;


localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);

document.getElementById('CounterVisitor').innerHTML = '';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';

};
console.log(nums)
module.exports = { nums }

