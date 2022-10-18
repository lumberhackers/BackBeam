"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/photos").build();

connection.on("ReceivePhoto", function(status) {
    const li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `Received status ${status}`
})

document.getElementById("openSessionButton").addEventListener(
    "click",
    function (event) {
        connection.invoke("OpenSession", "abcdef")
            .catch(function (err) {
                return console.error(err.toString());
            });
        event.preventDefault();
    });

connection.start();