

function addbutton(){
    const val = document.createElement("p")
    val.innerText = "this is an example"
    document.body.appendChild(val);
}

const tableRows = document.querySelectorAll(".leaderboard-table tbody tr");
if (tableRows.length > 0) {
    tableRows[0].style.backgroundColor = "#ffeaa7"; // highlight top player
}

addbutton();