var num_bottles = prompt("How many bottles of beer can you drink", 5);
var song_line1 = "of beer on the wall";
var song_line2 = "of beer";
var song_line3 = "Take one down and pass it around,"
var song_line4 = "bottles of beer on the wall!";
var valid = true;

//if((typeOf(num_bottles) !== number) || (prompt < 1)) {
//    console.log("Non-negative or non-numbers will not get me drunk. Please input postive integer");
//    valid = false;
//}

while ((num_bottles > 0) && (valid === true)) {
    if (num_bottles === 1) {
       console.log(num_bottles + " bottle " + song_line1);
       console.log(num_bottles + " bottle " + song_line2);
       console.log(song_line3);
       console.log("No more " + song_line4); 
    }
    else {
       console.log(num_bottles + " bottles " + song_line1);
       console.log(num_bottles + " bottles " + song_line2);
       console.log(song_line3);
       console.log(num_bottles +" " + song_line4); 
    }
num_bottles = num_bottles -1;
}


//console.log(num_bottles);