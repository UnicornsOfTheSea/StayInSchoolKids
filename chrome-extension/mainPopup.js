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
			due: "05/24/2020",
			name: "Essay"
		},
		{
			due: "05/25/2020",
			name: "Math Exercises"
		},
		{
			due: "05/26/2020",
			name: "Lab Report"
		},
		{
			due: "05/27/2020",
			name: "History Worksheet"
		},
		{
			due: "05/28/2020",
			name: "Read chapter 1"
		}
	];
	
	var table = document.getElementById("dTable");
	for (let i = 0; i < assignments.length + 1; i++) {
		let newRow = table.insertRow(-1); 
		if(i >= 1) {
			for (let property in assignments[i-1]) {
				let newCell = newRow.insertCell(-1);
				let text = assignments[i-1][property];
				let textNode = document.createTextNode(text);
				newCell.appendChild(textNode);
			}
		}
		
		if (i >= 1 ) {
			var check = document.createElement('input');
			var label = document.createElement('label');
				check.setAttribute('type', 'checkbox');
				check.setAttribute('value', '0');
				check.setAttribute('id', 'assignCheck' + i);

				label.setAttribute('for', 'assignCheck' + i);
				label.appendChild(document.createTextNode(''));

				let newCell = newRow.insertCell(-1);
				newCell.appendChild(check);
				newCell.appendChild(label);
		}
	}
	// for (let i=0; i = assignments.length; i++) {
	// 	let newRow = table.insertRow(-1); 
	// 	let newCell = newRow.insertCell(0);
	// 	var check = document.createElement("input");
	// 	var label = document.createElement("label");

	// 	check.setAttribute('type', 'checkbox');
	// 	check.setAttribute('value', 'no');
	// 	check.setAttribute('id', 'assignmentCheck' + i);

	// 	label.setAttribute('for', 'assignmentCheck' + i);
    // 	label.appendChild(document.createTextNode('Yes'));

	// 	newCell.appendChild(check);
    // 	newCell.appendChild(label);
	// }
} 
renderAssignments();
