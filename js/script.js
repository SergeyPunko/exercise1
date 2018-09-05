name=prompt('What is your name?');
var numeral=["0","1","2","3","4","5","6","7","8","9"];
trnumeral=false;
for (var i=0; i<name.length;i++){
    for (var j=0; j<numeral.length;j++){
        if(name[i]==numeral[j]){
            trnumeral=true;
        };
    };
};
var newname = new Array();
var newname = [];
if(trnumeral){
    for( var i=0; i<name.length; i++){
        if(i & 1){
            newname[i]=name[i].toLowerCase();
        } else{
            newname[i]=name[i].toUpperCase();
        };
    };
    document.write(newname.join(''));
} else{
    document.write(name.split("").reverse().join(""));
};