let rank: number = 10;
let firstName: string = "Sanket";
let isEnrolledInCourse: boolean = false;

console.log(`${firstName} has rank ${rank}`);
isEnrolledInCourse = true;
console.log(`Enrolled in course: ${isEnrolledInCourse}`);

let arrayA: number[] = [4, 3, 2, 6, 5, 7];
for (let i = 0; i < arrayA.length; i++) {
    console.log(arrayA[i]);
}

// use for...of
console.log(`Print array elements using for...of`);
for (let ele of arrayA) {
    console.log(ele);
}