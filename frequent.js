//  Write a JavaScript program to find the most frequent item of an array
var array1=[10,'b',8,'b','b',10,2];
a=1;
b=0;
var item;
for(var i=0;i<array1.length;i++)
{
    for(j=i;j<array1.length;j++)
    {
        if(array1[i]==array1[j])
            b++;
        if(a<b)
        {
            a=b;
            item=array1[i];
        }

    }
    b=0;
}
console.log(item+"(" +a+ "times)");
