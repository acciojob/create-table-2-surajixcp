document.getElementById('createTableBtn').addEventListener('click', createTable);

function createTable() {
    // Get user input for rows and columns
    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    // Validate user input
    const rn = parseInt(rows);
    const cn = parseInt(columns);

    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear existing table content

    // Create the table dynamically
    for (let i = 0; i < rn; i++) {
        const row = document.createElement('tr'); // Create a new row
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement('td'); // Create a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell content
            row.appendChild(cell); // Append cell to row
        }
        table.appendChild(row); // Append row to table
    }
}
