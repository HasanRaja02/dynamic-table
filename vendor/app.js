let from = document.getElementById("inputForm");

let tableBody = document.getElementById("tableBody");
let count = 0;

from.addEventListener("submit", (e) => {
    e.preventDefault();

    let p_name = document.getElementById("product_name").value;

    let strok_in = document.getElementById("stock_in").value;
    let strok_out = document.getElementById("stock_out").value;
    let sales = document.getElementById("sales").value;
    

    let row = document.createElement("tr");

    row.innerHTML =`
    <td> ${count}</td>
    <td> ${p_name} </td>
    <td> ${strok_in} </td>
    <td> ${strok_out}</td>
    <td> ${sales} </td>
    <td>
    <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
  </td>
    `;
    count++;
    tableBody.appendChild(row);
    from.reset();

});

function deleteRow(button){
    let row = button.parentElement.parentElement;
    tableBody.removeChild(row);
}
