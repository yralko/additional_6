module.exports = function zeros(expression) {
  var factorial = expression.split('*');
  var counter = 0;
  var fives = 0;
  var hasEven = false;

  factorial.forEach (val => {
	var num = parseInt(val);

	if(val.includes('!!')){
	if(num % 2) {
	  fives += Math.round(num / 10) + Math.round(num / 25);

	} else {
	  hasEven = true;
	  counter += Math.floor(num/10);
	}

	} else {
	  var total = Math.floor(num/5) + Math.floor(num/25);
	  counter += total;
	}
})

  if(hasEven && fives){
    counter += fives;
  }

  return counter;
}
