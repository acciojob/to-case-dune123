function toCase(text) {
  // write your code here
	let ans="";
	let upp=text.toUpperCase();
	let low=text.toLowerCase();
	ans+=low;
	ans+="-";
	ans+=upp;
	return ans;
	
}

// DO not change the code below

const text = prompt("Enter text:"); 
alert(toCase(text));
