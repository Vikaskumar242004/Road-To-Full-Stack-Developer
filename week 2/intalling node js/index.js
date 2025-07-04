// write a function 'isanagram' which takes 2 primeters and returns true or false 
// if those are anagrams or not. 

function isAnagram(str1,str2){
    const lowcase1 = str1.toLowerCase();
    const arr1 = lowcase1.split("");
    arr1.sort();
    const sortstr1 =   arr1.join("");

    const lowcase2 = str2.toLowerCase();
    const arr2 = lowcase2.split("");
    arr2.sort();
    const sortstr2 =   arr2.join("");

    if(sortstr1 == sortstr2){
        console.log("true")
    } else{
        console.log("false")
    }
}

isAnagram("vikas","sakiv")

