//Linear Search or Sequential Search
//Time Complexity 
//Best  : O(1)
//Worst : O(N)

//Space Complexity : O(1)

//Usage : 
/*
Unsorted List, Small Dataset (List), Seaching Linked List.
When searching for a Dataset stored in the continous memory.
*/

var linear_search = function (arr, arr_length, key) {
    let location = -1;

    for (let index = 0; index < arr_length; index++) {
        const element = arr[index];
        if (element === key) {
            location = index;
        }
    }

    return location;
}

//let result = linear_search([23,90,91,8,30,20],6,20);
let result = linear_search([23, 90, 91, 8, 30, 20], 6, 45);
console.log(result);