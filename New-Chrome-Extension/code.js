const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const lendsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
let myLeads = []; 
inputBtn.addEventListener("click", pushing);
deleteBtn.addEventListener("dblclick", deleteAll);
tabBtn.addEventListener("click", savingUrl )
if(lendsFromLocalStorage){
    myLeads = lendsFromLocalStorage;
    render(myLeads);
}
function render(leads)
{
    let listItems = "";
    for(let i = 0; i < leads.length; i++)
    {
        listItems += "<li> <a href target ='_blank' = '" + leads[i] + "' >" + leads[i] + "</a> </li>";
    }
    ulEl.innerHTML = listItems;
}
function pushing() 
{
    console.log("Saved link");
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    inputEl.value = "";
    render(myLeads);
}
function deleteAll(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}
function savingUrl() 
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
}