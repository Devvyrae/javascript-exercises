const repeatString = function(str, num) {
    if (num<=0) {
        return "";
    }
    let result = ""; 

for (i=0; i<num; i++) {
     result += str; 

}
return result; 
};



// Do not edit below this line
module.exports = repeatString;
