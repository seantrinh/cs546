// CS 546 - Lab 9
// I pledge my honor that I have abided by the Stevens Honor System.

function isPrime(num1) {
	if (num1 === undefined || isNaN(num1) || !Number.isInteger(num1)) throw "Please provide a valid integer!";
	if (num1 <= 1) return false;
	if (num1 <= 3) return true;
        let i = 2;
        for (i; i <= Math.sqrt(num1); i++) {
                if (num1 % i == 0) return false;
        }
        return true;
}

function submitted() {
	const number = document.getElementById("input_number").value;
	if (number) {
		let result = isPrime(number);
		let new_li = document.createElement("li");
		let text_node = document.createTextNode(number);
		new_li.appendChild(text_node);

		if (result) {
			new_li.setAttribute("class", "is-prime");
		} else {
			new_li.setAttribute("class", "not-prime");
		}
		
		document.getElementById("attempts").appendChild(new_li);
	} else {
		alert("Please insert an integer!");
	}
}
