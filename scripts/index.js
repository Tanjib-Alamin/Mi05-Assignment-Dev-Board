
let  taskAssign = document.getElementById("task_assign");
let  addNumber = document.getElementById("add23");
let historyContainer = document.getElementById("history_container");



const completeBtns = document.querySelectorAll(".complate_btn");

for (let i = 0; i < completeBtns.length; i++) {
  const btn = completeBtns[i];

    btn.addEventListener("click", function (event) {

    alert("board Update  successful");
    if (i === completeBtns.length - 1) {
      alert("Task finished");
    }
    
    event.target.setAttribute("disabled", true);

    let  convertTaskAssign = parseInt(taskAssign.innerText);
    let convertAddNumber = parseInt(addNumber.innerText);
    convertTaskAssign--;
    convertAddNumber++;
    taskAssign.innerText = convertTaskAssign;
    addNumber.innerText = convertAddNumber;

    const currentDate = new Date();
    let text = currentDate.toLocaleDateString();
    document.getElementById("curentdate").innerText = text;

   

    const titleHeader = document.querySelectorAll(".title").innerText;
    

    const tranContainer = document.getElementById("history_container");
    const div = document.createElement("div");
    div.classList.add("bg-blue-50", "p-3");
    div.innerHTML = `
    <p class="text-gray-600 para" >You have Complete The Task ${titleHeader}  at ${text} PM</p>
    `
    tranContainer.appendChild(div);
   

    

  })
  

  // redirect  to blog page
  document.getElementById("blogpage").addEventListener("click", function () {
    window.location.href = "blog.html";
  })


  // redirect to index page

  // document.getElementById("redirctindex").addEventListener("click", function () {
  //   window.location.href = "index.html";
  // });
  
  
  const clearHistory = document.getElementById("clearhistorybtn");
  clearHistory.addEventListener('click', function () {
    document.getElementById("history_container").innerText = '';
  })

  
  
}

