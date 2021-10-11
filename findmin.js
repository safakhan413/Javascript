// In JavaScript, define a function `minArgs` which accepts any number of numerical arguments and returns the minimum value. Next, show how you would use the function you just created (without modification) to find the minimum of values in an array.

// Example:

// minArgs(1, -6, 78, 12, 45.5, -6.9); // -6.9

function minArgs(){
    // var minim = Infinity
    if(Array.isArray(arguments[0])){
        arguments = arguments[0];
    }
    var minim = Math.pow(10, 1000)
    for (var i = 0; i < arguments.length; i++){
        if(arguments[i]< minim){
            minim = arguments[i];
        }

    }
    return minim;
}
const arr1 = [1, -6, 78, 12, 45.5, -6.9];



console.log(minArgs(1, -6, 78, 12, 45.5, -6.9))
console.log(minArgs(arr1))
