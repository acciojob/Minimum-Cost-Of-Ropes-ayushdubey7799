function calculateMinCost() {
  //your code here
  var inputValue = document.getElementById("rope-lengths").value;
  var arr = inputValue.split(",");
	arr.sort(function (a,b) {return a-b;})
    var cost = 0;
	while(arr.length>1){
		var res = Number(arr[0]) + Number(arr[1]);
		arr.splice(0,2);
		arr.push(res);
		cost+=res;
		arr.sort(function (a,b){return a-b;})
	}
   document.getElementById("result").innerHTML = cost;
}  
