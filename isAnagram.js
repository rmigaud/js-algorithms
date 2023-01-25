// O(n)
const isAnagram = (firstStr, secondStr) => {
    if(firstStr.length != secondStr.length) return false;
    const frequencyOf = {};

    for(let i=0; i<firstStr.length; i++) {
        let letter = firstStr[i];
        if(frequencyOf[letter] != null){
            frequencyOf[letter]++; 
        } else {
            frequencyOf[letter] = 1;
        }
    }
        
    for(let i = 0; i < secondStr.length; i++) {
        let letter = secondStr[i];
        if(frequencyOf[letter] != null) {
            frequencyOf[letter] -= 1;
        } else{
            return false;
        }
    }
    return true;
}

isAnagram("hheelllloo", "helloolleh");
