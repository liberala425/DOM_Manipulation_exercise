//1.Select the section with an id of container without using querySelector.
document.getElementById("container");

//2.Select the section with an id of container using querySelector.
document.querySelector("#container");

//3.Select all of the list items with a class of “second”.
document.getElementsByClassName("second");

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
// separated by space. first select <ol>, inside <ol>, select class third.
document.querySelector("ol .third"); 

//5. Give the section with an id of container the text “Hello!”.
const section = document.querySelector("#container");
section.innerText = "Hello";

//6. Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");

//7. Remove the class main on the div with a class of footer.
const footer2 = document.querySelector(".footer");
footer2.classList.remove("main");

//8. Create a new li element.
const newli = document.createElement("li");

//9. Give the li the text “four”.
newli.innerText = "four";

//10. Append the li to the ul element.
const list = document.querySelector("ul");
list.appendChild(newli);

//11.Loop over all of the lis inside the ol tag and give them a background color of “green”.
let ol_list = document.querySelectorAll("ol > li");

for(let li of ol_list){
    li.style.backgroundColor = "green";
}

//12.Remove the div with a class of footer
const div = document.querySelector('div.footer');
div.remove();