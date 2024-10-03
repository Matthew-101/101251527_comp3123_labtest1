// Question 2

const resolvedPromise = (
    return new Promise((' ', resolve) => {
        setTimeout(() => {
            resolve("Promise resolved!!");
        }, 500);
    });
);

const resolvedPromise = (
    return new Promise((' ', reject) => {
        setTimeout(() => {
            reject("Promise rejectedd!");
        }, 500);
    });
);


resolvedPromise();
rejectedPromise();