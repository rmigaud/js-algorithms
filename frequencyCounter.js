const frequencyCounter = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;

    let histogram1 = {};
    let histogram2 = {};

    for(let elm of arr1) {
        if(histogram1.hasOwnProperty(elm)) {
            histogram1[elm] += 1;
        } else {   
            histogram1[elm] = 1;
        }
    }

    for(let elm of arr2) {
        histogram2[elm] = (histogram2[elm] || 0) + 1;
    }

    for(let count in histogram1) {
        if(!(count in histogram2)){
            return false;
        } else {
            // console.log(count, "{" + histogram1[count] , histogram2[count] + "}");
            if(histogram2[count] != histogram1[count]) {
                return false;
            }
        } 
    }
    return true;
}

// frequencyCounter([1,1,1,2,3,3], [3,4,2,1,1,1]); // false
frequencyCounter([1,2,2,3], [3,1,2,2]); // true
frequencyCounter("hello".split(),"hello".split().reverse()) // true