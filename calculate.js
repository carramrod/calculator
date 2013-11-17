var keys = document.querySelectorAll("#calculator span");
var operations = ["+", "-", "*", "/"];
var addDecimal = false;

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(calculate) {
		var input = document.querySelector(".input_box");
		var inputValue = input.innerHTML;
		var btnValue = this.innerHTML;
		
		if(btnValue == "C") {
			input.innerHTML = "";
			addDecimal = false;
		}
		
		else if(btnValue == "=") {
			var equation = inputValue;
			var lastNumber = equation[equation.length - 1];
			
			if(operations.indexOf(lastNumber) > -1 || lastNumber == ".")
				equation = equation.replace(/.$/, "");
				
			if(equation)
				input.innerHTML = eval(equation);
				
			addDecimal = false;
		}
		else if(operations.indexOf(btnValue) > -1) {
			var lastNumber = inputValue[inputValue.length - 1];
			
			if(inputValue != "" && operations.indexOf(lastNumber) == -1)
				input.innerHTML += btnValue;
			else if(inputValue == "" && btnValue == "-")
				input.innerHTML += btnValue;
			if(operation.indexOf(lastNumber) > -1 && inputValue.length > 1) {
				inputinnerHTML = inputValue.replace(/.$/, btnValue);
			}
			
			addDecimal = false;
		}
		
		else if(btnValue == ".") {
			if(!addDecimal) {
				input.innerHTML += btnValue;
				addDecimal = true;
			}
		}
		
		else {
			input.innerHTML += btnValue;
		}
		
		calculate.preventDefault();
	}
}
			
		
