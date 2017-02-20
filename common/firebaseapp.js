/**
 * Created by ruiz- on 20/02/2017.
 */
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyC5nlmhm_nbmKxCUKYiTxzC3WuDIjAXG7k",
    authDomain: "suggestor-67a05.firebaseapp.com",
    databaseURL: "https://suggestor-67a05.firebaseio.com",
    storageBucket: "suggestor-67a05.appspot.com",
    messagingSenderId: "284752051609"
};
var firebaseApp = firebase.initializeApp(config);

module.exports = firebaseApp;