let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value', data.color);
});

/*function to parse info and store it
(but for now, we will just use some fake info)
btw this is just a framework for the paresr i thought would work, feel free to delete if needed
*/
const renderAssignments = () => {
	var assignments = [
		{
			name: "Essay",
			due: "05/24/2020"
		},
		{
			name: "Math Exercises",
			due: "05/25/2020"
		},
		{
			name: "Lab Report",
			due: "05/26/2020"
		},
		{
			name: "History Worksheet",
			due: "05/27/2020"
		},
		{
			name: "Read chapter 1",
			due: "05/28/2020"
		}
	];
	
	var table = document.getElementById("dTable");
	for (var i = 0; i < assignments.length; i++) {
		let newRow = table.insertRow(-1); 
		for (let property in assignments[i]) {
			let newCell = newRow.insertCell(0);
			let text = assignments[i][property];
			let textNode = document.createTextNode(text);
			newCell.appendChild(textNode);
		}
	}
} 
renderAssignments();
