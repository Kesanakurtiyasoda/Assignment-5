//Assignment-1
var array = ["HTML", "CSS", "JAVA", "JS"];
var string = "";
for(var i=0; i < array.length; i++){
    if(i==0){
        string = string + array[i];
    }else{
        string = string + "," + array[i];
    }
}
console.log(string);

//Assignment-2
var array =  ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var count = 0;
for(var i=0; i < array.length; i++){
    for(var j=0; j < array[i].length; j++){
        count++;
    }
}
console.log(+count);

//Assignment-3
var array = [100, 20, 31, 150, 39, 72];
var low = array[0];
var high = array[0];
for(var i=0; i < array.length-1; i++){
    if(low < array[i+1]){
        if(high < array[i+1]){
            high = array[i+1];
        } 
    }else{
        low = array[i+1];
    }
}
console.log(+high);
console.log(+low);

//Assignment-4
var matrix =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
if(matrix.length != 0){
    var row = matrix.length;
}else{
    console.log("0");
}
var column = matrix[0].length;
console.log(+row);
console.log(+column);

//Assignment-5
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(i=0; i < matrix.length; i++){
    console.log(matrix[i][i])
}

//Assignment-6
var array =["assignment", "problem", "media", "upload"];
var result =[];
var k =0;
for(var i=0; i < array.length; i++){
    if(array[i][0]=='a' || array[i][array[i].length -1]=='a'){
        result[k]=array[i];
        k++;
    }
}
console.log(result);

//Assignment-7
var array =["edstem", "tech"];
var string ="";
for(var i=0; i < array.length; i++){
    if(i==0){
        string = string + array[i];
    }else{
        string = string +'_'+ array[i];
    }
}
console.log(string);

//Assignment-8
var sum1=0
var sum2=0
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for(i=0; i < matrix.length; i++){
    sum1 += matrix[i][i]
    for(j=0; j < matrix.length; j++){
        if(i+j == matrix.length-1){
            sum2 += matrix[i][j]
        }
    }
}
console.log(sum1-sum2)

//Assignment-9
var array = [2,3,4];
var product =1
for(i=0; i < array.length; i++){
    product *= array[i]
}
console.log(product)

//Assignment-10
var matrix=[ [1, 2, 3], [4, 5, 6], [7,  8, 9]];
for(i=0; i < matrix.length; i++){
    for(j=0; j < matrix.length; j++){
        if(j == Math.floor(matrix.length/2)){
            console.log(matrix[i][j])
        }
    }
}