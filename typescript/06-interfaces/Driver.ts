import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { FutBallCoach } from "./FutBallCoach";

let myCricketCoach = new CricketCoach();
let myFutBallCoach = new FutBallCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myFutBallCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}