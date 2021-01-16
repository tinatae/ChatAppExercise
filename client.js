const connection = new WebSocket("ws://localhost:8080")
const button = document.querySelector("#send")

connection.onopen = event => {
    console.log("WebSocket is now open")
}

connection.onclose = event => {
    console.log("WebSocket is now closed")
}

connection.onerror = event => {
    console.log("WebSocket error observed")
}

connection.onmessage = event => {
    const chat = document.querySelector("#chat");
    chat.innerHTML += event.data
}

button.addEventListener("click", () => {
    const name = document.querySelector("#name")
    const message = document.querySelector("#message")
    const data = `<p>${name.value}: ${message.value}</p>`

    connection.send(data)

    name.value = "";
    message.value = ""
})