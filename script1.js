// project -search 

var ul = document.querySelector("ul");

// ************add item
document.getElementById("add-btn").addEventListener("click", function (e) {
    e.preventDefault();


    var addInput = document.getElementById("add-input");
    if (addInput.value !== "") {
        var li = document.createElement("li");
        var firstpar = document.createElement("p");
        var secondpar = document.createElement("p");
        var firstIcon = document.createElement("i");
        var secondIcon = document.createElement("i");
        var input = document.createElement("input");

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute("type", "text");
        firstpar.textContent = addInput.value;

        secondpar.appendChild(firstIcon);
        secondpar.appendChild(secondIcon);
        li.appendChild(firstpar);
        li.appendChild(secondpar);
        li.appendChild(input);
        ul.appendChild(li);
        addInput.value = "";
    }
});
// // **********hide item

var hideItem = document.getElementById("hide");
hideItem.addEventListener("click", function () {
    var label = document.querySelector("label");

    if (hideItem.checked) {
        label.textContent = "unhide-note";
        ul.style.display = "none";
    } else {
        label.textContent = "hide-note";
        ul.style.display = "block";
    }
});
// // ***********edit and delete item
ul.addEventListener("click", function (e) {
    // console.log(this);
    // console.log(e.target);
    console.log(e.target.classList[1]);
    if (e.target.classList[1] === "fa-pencil-square-o") {
        // console.log("hello");
        var parentpar = e.target.parentNode;
        // console.log(parentpar);
        parentpar.style.display = "none";
        var note = parentpar.previousElementSibling;
        var input = parentpar.nextElementSibling;
        // console.log(note,input);

        input.style.display = "block";
        
        input.value = note.textContent;

        input.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                if (input.value !== '') {
                    note.textContent = input.value;
                    parentpar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
    } else if (e.target.classList[1] === 'fa-times') {
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list); 
        
    }
});

// // *****search input
var searchInput = document.querySelector("#search-note input");

searchInput.addEventListener('keyup', function (e) {
    
    var searchChar = e.target.value.toUpperCase();
    // console.log(searchChar);
    var notes = ul.getElementsByTagName("li");


    Array.from(notes).forEach(function (note) {
        var parText = note.firstElementChild.textContent;

        if (parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
});



// // list.addEventListener("click", function (e) {
// //     if (e.target.classList[1] === "fa fa-pencil-square-o"){
// //     var parentpar = e.target.parentNode;
// //     parentNode.style.display = "None";


// //     var note = parentpar.previousElementSibling;
// //     var input = parentpar.nextElementSibling;

// //     input.style.display = "block";
// //     input.value = note.textContent;

// //     input.addEventListener("keypress", function (e) {
// //         if (e.keycode === 13) {
// //             if (input.value !== '') {
// //                 note.textContent = input.value;
// //                 parentpar.style.display = 'block';
// //                 input.style.display = 'none';
// //             } else {
// //                 var li = input.parentNode;
// //                 li.parentNode.removeChild(li);
// //             }
// //         }
// //     });
// // } else if (e.target.classList[1] === 'fa-times') {
// //     var list = e.target.parentNode.parentNode;
// //     list.parentNode.removeChild(list);
// // }
// // });



// practice


// var ul=document.querySelector("ul");

// document.getElementById("add-btn").addEventListener("click",function(e){
//     e.preventDefault();
//     var addInput=document.getElementById("add-input");
//     if(addInput.value!==" "){
//         var li=document.createElement("li");
//         var firstpar=documen.createElement("p");
//         var secondpar=document.createElement("p");
//         var firstIcon=document.createElement("i");
//         var secondIcon=document.createElement("i");
//         var input=document.getElementById("input");

//         firstIcon.className="fa fa-pencil=sqaure";
//         secondIcon.className="fa fa=times";
//         input.className="edit-Note";
//         input.setAttribute("type","text");

//         firstpar.textcontent=addInput.value;

//         secondpar.appendChild("firstIcon");
//         secondpar.appendChild("secondIcon");
//         li.appendchild("firstpar");
//         li.appendChild("secondpar");
//         li.appendChild("Input");
//         ul.appendchild("li");
//         addInput.value=" ";
    

//     }
// });
