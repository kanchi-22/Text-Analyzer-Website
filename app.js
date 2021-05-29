console.log("Welcome to the console of Text Analyzer Website");
let text_entered;
text_entered = document.getElementById("input-text");
let text = "";
let clear_button = document.getElementById("clear-button");
let go_button = document.getElementById("go-button");
let search_button = document.getElementById("search-button");
let wordCount = document.getElementById("word-count");
let sentenceCount = document.getElementById("sentence-count");
let punctuationCount = document.getElementById("punctuation-count");
let cletterCount = document.getElementById("cLetter-count");
let searchResult = document.getElementById("search-result");
let searchInput = document.getElementById("keyword");
go_button.addEventListener('click',function(){
    text = text_entered.value;
    let l = text.length;
    let prev = '/';
    let words = 1;
    let sentences = 0;
    let punctuations = 0;
    let cLetter = 0;
    let i;
    for(i = 0 ; i < l ; i++){
        if(text[i]==' ' && prev != ' '){
            words++;
        }
        if((text[i]=='.' || text[i]=='?'||text[i]=='!') && (prev!='.' || prev!='?' || prev!='!')){
            sentences++;
        }
        if(text[i]=='.' || text[i]=='?'||text[i]=='!'||text[i]==','){
            punctuations++;
        }
        if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
            cLetter++;
        }
        prev = text[i];
    }
    wordCount.innerText = `${words} words.`;
    sentenceCount.innerText = `${sentences} sentences.`;
    punctuationCount.innerText = `${punctuations} punctuations.`;
    cletterCount.innerText = `${cLetter} capital letters.`;
})
clear_button.addEventListener('click',function(){

    text_entered.value="";
    wordCount.innerText = "";
    sentenceCount.innerText = "";
    punctuationCount.innerText = "";
    cletterCount.innerText = "";

})
search_button.addEventListener('click',function(){
    let text = text_entered.value;
    let keyword = searchInput.value;
    if(text == ""){
        return;
    }
    let arr = text.split(' ');
    let count = 0;
    let i;
    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] == keyword){
            count++;
        }
    }
    if(count == 0){
        searchResult.innerText = `This text does not contain the word'${keyword}'.`;
    }
    else{
        searchResult.innerText = `This text contains '${keyword}' ${count} times.`;
    }
    searchInput.value = "";
})