
function learnjs(lang, callback){
    setTimeout(function(){ 
        console.log("я учу" + lang);
    callback()},2000 );
}

learnjs("javascript", function(){
    console.log("я прошел 3й урок!")
});
