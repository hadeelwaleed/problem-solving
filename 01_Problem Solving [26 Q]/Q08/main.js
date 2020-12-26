console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(arr) {
 let obj ={}
 for (var i = 0; i < arr.length; i++){
   if (obj[arr[i]] >=0){
     obj[arr[1]]=obj[arr[1]]+1;
     } else{
     obj[arr[1]]=1;
     }
     }
     result = object.keys(obj)
      return result.length;
}

/* 
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
