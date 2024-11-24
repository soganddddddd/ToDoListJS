// making a array for puting my task in

let ToDoList = [];

//function to add my task by pushin them inside the stack

function addTask(task){
    ToDoList.push(task);
    console.log ('task ${task} added to the list' );
                     }

// function to remove my task (not the pop method cause we arnt going to delete our last task everytime )

function removeTask(index) {

   if (index>=0 && index<ToDoList.length){
    let remove = ToDoList.splice(index , 1);
    console.log('Task ${remove} removed from the list')
   } else{
    console.log('invalid request')
   }

}