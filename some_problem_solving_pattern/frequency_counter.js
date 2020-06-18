

/******** Frequency Counter | Refactored O(n) ***********/
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length)return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let elem of arr1){
        if(frequencyCounter1.hasOwnProperty(elem)){
            frequencyCounter1[elem]++;
        }else{
            frequencyCounter1[elem] = 1;
        }
    }

    for(let elem2 of arr2){
        if(frequencyCounter2.hasOwnProperty(elem2)){
            frequencyCounter2[elem2]++;
        }else{
            frequencyCounter2[elem2] = 1;
        }
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2))return false;
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key])return false;
    }

    return true;
}
console.log(same([1,2,3,2], [9,1,4,4]))



/************ Anagram with frequency counter ************/
function anagram(str1, str2){
    if(str1.length != str2.length)return false;
    characterCount = {}
    for(let s1 of str1){
        characterCount[s1] = characterCount[s1] + 1 || 1
    }
    for(let s2 of str2){
        if(!characterCount[s2])return false;
        else characterCount[s2]--;
    }
    return true;
}
console.log(anagram('azz', 'zaz'))
