let count = 0;
const addItem = document.getElementById("input-btn");
addItem.addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  if (inputValue == "") {
    const p = document.getElementById('error');
    p.innerText = "Write description first!";
  } else {

    const p = document.getElementById('error');
    p.innerText = "";

    count += 1;
    const tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${count}</th>
            <td>${inputValue}</td>
            <td>
                <button  class="btn btn-success done">Done</button>
                <button  class="btn btn-danger delete">Delete</button>
            </td>`;

    const tbody = document.getElementById("content-container");
    tbody.appendChild(tr);
    document.getElementById("input-value").value = "";

    const dones = document.querySelectorAll('.done');
    for(let done of dones) {
        done.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.style.background = "#eaeaea";
        });
    }
    
    const dlts = document.querySelectorAll('.delete');
    for(let dlt of dlts) {
        dlt.addEventListener('click', function (e) {
            e.target.parentNode.parentNode.style.display = "none";
        });
    }
   
    const clearBtn = document.querySelector("#clear-btn");
    clearBtn.addEventListener("click", function () {
      tr.innerHTML = "";
      count = 0;
      p.innerText = "";
      document.getElementById("input-value").value = "";
    });
  }
});
