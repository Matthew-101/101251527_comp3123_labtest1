//Question 1

const lowerCaseWords = (mixedArray) = {
    return new Promise(resolve, reject) => {
        if (!Array.isArray(mixedArray)){
            console.log("Input must be an array. Try again.");
            return mixedArray;
        }
    }

    try {
        const lowerCaseArray = mixedArray
            .filter(item => typeof item === 'string')
            .map(str => str.toLowerCase());           

        resolve(lowerCaseArray);
    } catch (error) {
        reject("An error occurred.");

        const mixedArray(["Pizza is great", 10, true, 25, false, 'Wings']);
};
