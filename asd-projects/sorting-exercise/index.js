/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
// sorts all elements of the array from smallest to largest, and updates the swap counter accordingly

async function bubbleSort(array){
    for(var i = 0; i < array.length - 1; i++){ // runs/pushes through the array
        for(var j = array.length - 1; j > 1; j--){ // sorts through the array, starts at the end of the array moving backwards, compares the two elements next to eachother
            if(array[j].value < array[j - 1].value){ // if the value of the current index is less than the prev element, the swap function is called
                swap(array, j, j - 1); // swaps the value of index j if the value is less than the prev element, else it will skip
                updateCounter(bubbleCounter); // updates the movecount
                await sleep(); // awaits the sleep amount in order to pause the movement (causes visuals to be slower)
            }
        }
    }
}


// TODO 3: Implement quickSort

async function quickSort(array, left, right){
    if(left >= right){  // if the right index is greater than the left index, the array is already sorted and only needs to be returned
        return;
    }
    var index = await partition(array, left, right); // sets the index to await the partition function
    if(left < index - 1){ // reads if the left value of the array is less than the index of the array - 1
        await quickSort(array, left, index - 1); // awaits the function quickSort if the conditions of the if statement is met
    }
    
    if(index < right){ // reads if the value of the index of the array is greater than the value of the right index
        await quickSort(array, index, right); // awaits the function quickSort to sort the array based upon the array, index, and right arguements
    }
}

// TODOs 4 & 5: Implement partition

async function partition(array, left, right){
    let pivot = array[Math.floor((right + left) / 2)].value; // creating a variable called pivot that selects the pivot amount by finding the middle index and using its value
    while(left < right){ // executes the code inside of the while loop as long as the conditions are met, and will not run if the conditions are not met
        while(array[left].value < pivot){  // reads if the value of the left index in the array is less than the value of pivot
            left++; // increses left if the conditions of the while statement are met
        }
        while(array[right].value > pivot){ // reads if the value of the right index in the array is greater than the value of pivot
            right--; // decreases right if the conditions of the while statement are met
        }
        if(left < right){ // reads if the value of left is greater than the value of right
            swap(array, left, right); // calls the swap function if the conditions of the if statement are met
            updateCounter(quickCounter); // calls the updateCounter function if the conditions of the if statement are met
            await sleep(); // awaits sleep if the conditions of the if statement are met, ending the loop
        }
    }

    return left + 1; // returns the index value of left + 1 as long as the function partition is called
};


// TODO 1: Implement swap

function swap(array, i, j){
    var temp = array[i]; // stores the index value of the array in a temporary variable
    array[i] = array[j]; // value i is being stored as index j
    array[j] = temp; // value j is being stored as temp
    drawSwap(array, i, j); // visually draws the swap 
}


///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}