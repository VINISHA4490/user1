// Write a JavaScript program to find the sum of squares of the elements of an array.
let array2=[2,4,5,6]
sum=0;
for(let i=0;i<array2.length;i++)
{
    sum+=Math.pow(array2[i],2)
}
console.log("sum is" +sum)
