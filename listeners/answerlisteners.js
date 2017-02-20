/**
 * Created by ruiz- on 20/02/2017.
 */
var firebaseApp = require("./../common/firebaseapp");
var firebaseRef = firebaseApp.database().ref();
var answerRef = firebaseRef.child("answers");

var answerSubmittedListener = function () {
    answerRef.on('child_added').then(function(snapshot) {
        var answerKey = snapshot.key;
        var answer = snapshot.val();
        var ratings = answer.ratings;
        var suggestionKey = answer.suggestion_key;
        var updateBracket = {};
        var suggestions = ["suggestion1", "suggestion2", "suggestion3"]

        updateBracket["suggestions/"+suggestionKey] = suggestions;


        firebaseRef.update(updateBracket);
    });
};

