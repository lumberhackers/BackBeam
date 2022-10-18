"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/photos").build();

document.getElementById("controlSessionButton").addEventListener(
    "click",
    function (event) {
        connection.invoke("ControlSession", "abcdef")
            .catch(function (err) {
                return console.error(err.toString());
            });
        event.preventDefault();
    });

document.getElementById("sendButton").addEventListener(
    "click",
    function (event) {
        connection.invoke("SendPhoto", "OMG A CAT")
            .catch(function (err) {
                return console.error(err.toString());
            });
        event.preventDefault();
    }
)

connection.start();