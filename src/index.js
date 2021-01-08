document.addEventListener("DOMContentLoaded", () => {
  // your code here


  // let todoList= document.getElementById("tasks");
  // let number=0
  // let submitButton = document.getElementsByTagName("input")[1]
  // submitButton.addEventListener("click", function(event){
  //   event.preventDefault()
  //   let inputValue = document.getElementById("new-task-description").value;
  //   if (inputValue != '') {
  //   let listItem= document.createElement('li')
  //   listItem.innerText = inputValue
  //   listItem.className=number
  //   let button= document.createElement("button")
  //   button.innerText = "Delete"
  //   button.value=number
  //   button.addEventListener('click', function(e){
  //     listItem.remove()
  //   })
  //   todoList.appendChild(listItem)
  //   listItem.appendChild(button)
  //   number++
  //   }
  // })

  let todoList= document.getElementById("tasks");
  let number=0
  let submitButton = document.getElementsByTagName("input")[1]
  submitButton.addEventListener("click", function(event){
    event.preventDefault()
    let inputValue = document.getElementById("new-task-description").value;
    if (inputValue != '') {
    let listItem= document.createElement('li')
    listItem.innerText = inputValue
    let button= document.createElement("button")
    button.innerText = "Delete"
    button.value=number
    button.addEventListener('click', function(e){
      listItem.remove()
    })
    importance(document.getElementById('importance').value, listItem)
    todoList.appendChild(listItem)
    listItem.appendChild(button)
    number++
    }
  })


  function importance(rating, listItem){
    if (rating == '!!!'){
      listItem.style.color = "red"
      listItem.className='3'
    }
    else if (rating == '!!'){
      listItem.style.color = "yellow"
      listItem.className='2'
    }
    else {
      listItem.style.color = "green"
      listItem.className='1'
    }
  }

  function sortByImportance(collection){
    // for(i=0; i != collection.length; i++){

    //   if(collection[i].style.color == 'red'){
    //     return todoList.appendChild(collection[i])
    // }
    //   if(collection[i].style.color == 'yellow'){
    //   return todoList.appendChild(collection[i])
    // }
    //   if(collection[i].style.color == 'green'){
    //   return todoList.appendChild(collection[i])
    //   }


    // }
  }

let sortButton = document.getElementsByTagName('button')[0]
sortButton.addEventListener('click', function(){
  removeLi()
      let collection=document.getElementsByTagName('li')
      for(i=0; i != collection.length; i++){
      if(collection[i].style.color == 'red'){
         todoList.appendChild(collection[i])
    }
      if(collection[i].style.color == 'yellow'){
       todoList.appendChild(collection[i])
    }
      if(collection[i].style.color == 'green'){
       todoList.appendChild(collection[i])
      }


    }

    console.log("sorted")

})


function removeLi(){
  let li = document.getElementsByTagName('li')
  for(i=0; i != li.length; i++){
    li[i].remove
  }
}


























});
