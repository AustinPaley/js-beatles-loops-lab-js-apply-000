function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
function johnLennonFacts (){
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
var newfacts = [];
var i = 0;
while (newfacts.length < facts.length) {
  newfacts.push('${facts[i]} "!!!");
  i++;
}
return newfacts;
}

function iLoveTheBeatles (num){
  var number=[];
  var i = 0
  do {
   number.push("I love the Beatles!"); 
   num++;
  }
  while (num < 15);
return number
}