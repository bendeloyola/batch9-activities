var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]


var leaugeEl = document.getElementById("league")


for(i = 0; i < justiceLeague.length; i++){
    var newEl = document.createElement("li")
    newEl.textContent = justiceLeague[i].name + ' ' + justiceLeague[i].superpower

    leaugeEl.append(newEl)
    
}
