"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const FutBallCoach_1 = require("./FutBallCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myFutBallCoach = new FutBallCoach_1.FutBallCoach();
let coaches = [];
coaches.push(myCricketCoach);
coaches.push(myFutBallCoach);
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
