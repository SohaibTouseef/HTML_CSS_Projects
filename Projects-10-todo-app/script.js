// // var parent = document.getElementById('parent')
// // console.log(parent)
// // var h1 = document.createElement('h1')
// // var h1Txt = document.createTextNode("hello world")
// // h1.appendChild(h1Txt)
// // parent.appendChild(h1)
// // console.log(h1)

// var parent = document.getElementById("parent");
// let h1 = document.createElement("h1");
// let h1Text = document.createTextNode("Hello Sohaib")
// h1.appendChild(h1Text)
// parent.appendChild(h1)
// console.log(parent);

// // Todo App

// var input = document.getElementById('inp')
// var parent = document.getElementById('parent')
// console.log(parent, input)
const input = document.getElementById("inp")
const parent = document.getElementById("parent")
function addTodo(){


    if(!input.value){
        alert("fields are required")
        return
    }

    const li = document.createElement("li")
    li.setAttribute("class" , " bg-dark text-white text-lg list-group-item d-flex justify-content-between align-items-center")

    const liText = document.createTextNode(input.value)
    li.appendChild(liText)
    parent.appendChild(li)


    const div = document.createElement("div")
    div.setAttribute("class", "d-flex gap-4")

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-info")
    editBtn.setAttribute("onclick" , "editTodo(this)")
    const editBtnTxt =  document.createTextNode("Edit Todo")
    editBtn.appendChild(editBtnTxt)
    div.appendChild(editBtn)
    li.appendChild(div)

    const delBtn = document.createElement("button")
    delBtn.setAttribute("class" , "btn btn-danger")
    delBtn.setAttribute("onclick" , "delBtnTxt(this)")
    const delBtnTxt = document.createTextNode("Delet Todo")
    delBtn.appendChild(delBtnTxt)
    div.appendChild(delBtn)
   

}

function allDeletTodo(){
    parent.remove()
}


function delBtnTxt(e){
    const liRemove = e.parentNode.parentNode
    liRemove.remove()
}

function editTodo(ele){
    let liValue = ele.parentNode.parentNode.firstChild.nodeValue
    console.log(liValue);
    // console.log("run");
    let editValue = prompt("Enter a new value" ,liValue)
    console.log(editValue);
    console.log(ele.parentNode.parentNode.firstChild.nodeValue)
    ele.parentNode.parentNode.firstChild.nodeValue = editValue


}

// function editTodo(ele){
    //     var liValue = ele.parentNode.parentNode.firstChild.nodeValue
    //     console.log(liValue)
    //     console.log('run')
    //     // console.log('edit')
    //     var editValue = prompt('Enter New Value', liValue)
    //     console.log(editValue)
    //     console.log(ele.parentNode.parentNode.firstChild.nodeValue)
    //     ele.parentNode.parentNode.firstChild.nodeValue = editValue
    // }
    

// function addTodo(){
//    console.log(input.value)

// //    if(input.value == ""){
// //     alert("fields are required")
// //     return
// //    }

// if(!input.value){
//     alert('required field are missing')
//     return
// }

//    // create li element
//    var li = document.createElement('li')
//    //create li text
//    var liTxt = document.createTextNode(input.value)
//    //set class li
//    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
//    // relation li parent to li text
//    li.appendChild(liTxt)

//    var div = document.createElement('div')
//    div.setAttribute('class', 'd-flex gap-4')

//    //create edit button
//    var editBtn = document.createElement('button')
//    //create edit button text
//    var editBtnTxt = document.createTextNode('Edit Todo')

//    editBtn.setAttribute('class', "btn btn-info")
//    editBtn.setAttribute('onclick', "editTodo(this)")

//    editBtn.appendChild(editBtnTxt)

//    div.appendChild(editBtn)

//    var delBtn = document.createElement('button')
//    var delBtnTxt = document.createTextNode("Delete todo")
//    delBtn.setAttribute('class', 'btn btn-danger')
//    delBtn.setAttribute('onclick', "deleteTodo(this)")
//    delBtn.appendChild(delBtnTxt)

//    div.appendChild(delBtn)
  


//    li.appendChild(div)
//    parent.appendChild(li)

//    input.value = ""
//    console.log(parent)

// }

// function deleteAll(){
//     parent.remove()
// }

// function deleteTodo(ele){
//     var liRem = ele.parentNode.parentNode
//     console.log(liRem)
//     liRem.remove()
// }

// function editTodo(ele){
//     var liValue = ele.parentNode.parentNode.firstChild.nodeValue
//     console.log(liValue)
//     console.log('run')
//     // console.log('edit')
//     var editValue = prompt('Enter New Value', liValue)
//     console.log(editValue)
//     console.log(ele.parentNode.parentNode.firstChild.nodeValue)
//     ele.parentNode.parentNode.firstChild.nodeValue = editValue
// }



// var input = document.getElementById('inp')
// console.log(input, "input")
// // hasAttribute return boolean
// console.log(input.hasAttribute('class'))
// // input.setAttribute('class', 'bgBlue')
// // input.className += ' bgBlue'

// input.classList.add('bgBlue')

// //remove attribut remove karwata he attributes
// input.removeAttribute('class')

// let input = document.getElementById("inp");
// let parent = document.getElementById("parent");
