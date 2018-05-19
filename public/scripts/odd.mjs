export function isItOdd(num) {
    if (typeof num !== "number")
      return false;

    if ((num % 2) == 0)
     return false;
    else 
     return true;
}


