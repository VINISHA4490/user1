// Write a JavaScript function to get an array and to read the first element of an array and check whether it is prime or not
function checkFirstElement(arr) 
{
    const firstElement=arr[0];
    function prime(num)
    {
      if(num<=1)
        return false;
    for(let i=2;i*i<=num;i++)
        {
            if(num%i===0)
                return false
        }
        return true;  

    }
    if(prime(firstElement))
    {
        console.log("The first element is pime number")

    }
    else
    {
        console.log("The first element is not a prime number")

    }
}
const  myArray=[2,3,4,5,7];
checkFirstElement(myArray);

    
