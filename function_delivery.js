function say(word) {
  console.log(word);
}

function execute(someFun, val) {
  someFun(val)
}

execute(say, 'Hello Node.js')
execute(function(prarms) {
  console.log(prarms);
}, 'Hi!')
