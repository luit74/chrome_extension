let myLeads = []

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}