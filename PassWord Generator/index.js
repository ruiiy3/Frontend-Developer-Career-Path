const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let messageone = ""
let messagetwo = ""

const buttonP = document.getElementById("passwordG")
let newpone = document.getElementById("one")
let newptwo = document.getElementById("two")
buttonP.addEventListener("click", function() {
    getPassword()
    newpone.textContent = messageone
    newptwo.textContent = messagetwo
})



function getPassword() {
    messageone = ""
    messagetwo = ""
    for(let i = 0; i < 15; i++) {
        let indf = Math.floor(Math.random()*characters.length)
        messageone += characters[indf]
        let inds = Math.floor(Math.random()*characters.length)
        messagetwo += characters[inds]
    }
}