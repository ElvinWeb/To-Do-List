document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
  } else {
    document.querySelector("#tasks").innerHTML += `
             <div class="task">
                 <span id="taskname">
                    E-mail: 
                     ${document.querySelector("#newtask #email").value}
                 </span>
                 <button class="delete">
                     <i class="far fa-trash-alt"></i>
                 </button>
             </div>
         `;
    document.querySelector("#tasks").innerHTML += `
     
         <div class="task">
             <span id="taskname">
               Password:
                 ${document.querySelector("#newtask #password").value}
             </span>
             <button class="delete">
                 <i class="far fa-trash-alt"></i>
             </button>
         </div>
          `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};
