var messageThread = [
    {
        person: 2,
        txtMsg: "Welcome to Citoto Helpdesk!"
    },
    {
        person: 1,
        txtMsg: "Hello, this is Binod."
    },
    {
        person: 2,
        txtMsg: "Ok, Binod. How may I help you?"
    },
    {
        person: 1,
        txtMsg: "I've been facing some issues."
    }
]

function scrollToBottom(){
    scrollingElement = document.getElementById('msgs')
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

messageThread.forEach(
    function( message ){

    var obj = document.createElement('div')
    var msg = document.createElement('p')
    var msgcontainer = document.getElementById('msgs')

    switch(message.person){
        case 1:
            obj.className = "col-9 offset-3 d-flex justify-content-end msg"
            msg.className = "text-white bg-primary px-3 pmsg"
            break
        case 2: 
            obj.className = "col-9 d-flex justify-content-start msg"
            msg.className = "text-white px-3 bg-secondary pmsg"
            break
    }
        
    msg.appendChild(document.createTextNode(message.txtMsg))
    obj.appendChild(msg)
    msgcontainer.appendChild(obj)
    scrollToBottom()
}
)


var form = document.getElementById('msgForm');

form.addEventListener('submit', addNote);

class Message{

    constructor(person, msg){
        this.person = person
        this.msg = msg
    }

}

function addNote(event){

    var person = 1
    event.preventDefault()
    var txtMsg = document.getElementById('txtMsg').value
    var obj = document.createElement('div')
    var msg = document.createElement('p')
    var msgcontainer = document.getElementById('msgs')

    messageThread.push(new Message(person, txtMsg))
    
    if(person === 1){
        obj.className = "col-9 offset-3 d-flex justify-content-end msg"
        msg.className = "text-white bg-primary px-3 pmsg"
    }else{
        obj.className = "col-9 d-flex justify-content-start msg"
        msg.className = "text-white px-3 bg-secondary pmsg"
    }      
        
    msg.appendChild(document.createTextNode(txtMsg))  
    document.getElementById('txtMsg').value = null
    obj.appendChild(msg)
    msgcontainer.appendChild(obj)
    scrollToBottom()

}