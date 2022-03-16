	class Calculator{
	  constructor()
	  {
		console.log("Calculator loaded");
	  }
	  add(num1 =0,num2 =0){
		return num1 + num2;
	  }
	}
	//required so data is visible externally
	module.exports = Calculator;
