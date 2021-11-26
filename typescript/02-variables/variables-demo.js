var rank = 10;
var firstName = "Sanket";
var isEnrolledInCourse = false;
console.log("".concat(firstName, " has rank ").concat(rank));
isEnrolledInCourse = true;
console.log("Enrolled in course: ".concat(isEnrolledInCourse));
var arrayA = [4, 3, 2, 6, 5, 7];
for (var i = 0; i < arrayA.length; i++) {
    console.log(arrayA[i]);
}
// use for...of
console.log("Print array elements using for...of");
for (var _i = 0, arrayA_1 = arrayA; _i < arrayA_1.length; _i++) {
    var ele = arrayA_1[_i];
    console.log(ele);
}
