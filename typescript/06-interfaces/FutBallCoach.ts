import { Coach } from "./Coach";

export class FutBallCoach implements Coach {

    getDailyWorkout(): string {
        return "Hit Free Kick!";
    }

}