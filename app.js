    function submittedText(){
        $('.js-form').submit(function(event) {
            event.preventDefault();
            var userText = $('#user-text').val();
            // console.log(userText);
            var formatedText = userText.replace(/\r?\n|\r/g, "");
            // console.log(formatedText);
            textFunction(formatedText);
        });
    }

    function Tword(text){
        return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
    }

    function uniquewordfind(submittedWords){
        // var UWords = [];
        // for (var i=0; i<submittedWords.length; i++) {
        //     if (UWords.indexOf(submittedWords[i]) === -1) {
        //     UWords.push(submittedWords[i]);
        //     }
        // }
        // return UWords.length;
        var Uwords = new Set(submittedWords);
        return Uwords.size;
        // console.log(unique.size);
    }

    function getAverageWordLength(submittedWords){
        var totalLength = submittedWords.join("").length;
        return Math.round(totalLength / submittedWords.length);
    }

    function getAverageWordsPerSentence(text){
        var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
        var wordCount = Tword(text).length;
        return Math.round(wordCount / numSentences);
    }

    function textFunction(text){
        var submittedWords =Tword(text);
        var uniqueWords = uniquewordfind(submittedWords);
        var avgWordLength = getAverageWordLength(submittedWords);
        var avgWordsPerSentence = getAverageWordsPerSentence(text);

        console.log(submittedWords.length);
        console.log(uniqueWords);
        console.log(avgWordLength);
        console.log(avgWordsPerSentence);


        // Displaying in DOM
        var textReport = $('.js-report');
        textReport.find('.js-word-count').text(submittedWords.length);
        textReport.find('.js-unique-word').text(uniqueWords);
        textReport.find('.js-average-word-length').text(avgWordLength + " characters");
        textReport.find('.js-average-sentence-length').text(avgWordsPerSentence + " words");
        textReport.removeClass('hidden');
    }

$(function (){
    submittedText();
});