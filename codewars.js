function addToZero(arr){ //O(n^2)
    if(arr.length <= 1)
    {
        return false;
    }
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0)
            {
                return true
            }
        }

    }
    return false;
}


console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

console.log("--------------");

function hasUniqueChars(str) { //O(n)
    let chars = {}
    for(let i=0; i<str.length; i++)
    {
        if(!chars[str[i]])
        {
            chars[str[i]] = 1
        }
        else
        {
            return false;
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

console.log("--------------")

function isPangram(string){ //O(n)
    let chars = {}
    let str = string.toLowerCase()
    str = str.replace(/[^a-z+]+/g, "");//anything not a-z will be replaced by nothing
    for(let i=0; i<str.length; i++)
    {
        if(!chars[str[i]])
        {
            chars[str[i]] = 1
        }
        else{
            chars[str[i]]++
        }
    }
    if(Object.keys(chars).length>=26){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

console.log("---------------")


function findLongestWord(arr){ //O(n)
    let size = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > size) {
            size = arr[i].length;
        }
    }
    return size;
}
console.log(findLongestWord(["hi", "hello"]));

