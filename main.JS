
let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;

let runnerAge = Math.floor(Math.random() * 80);

if(runnerAge > 65){
    console.log(`At age ${runnerAge}, you're too old to participate. Better luck next time Grandpa!`);
} else{
    runnerEarly && runnerAge >= 18 ? raceNumber +=1000 : raceNumber;

    if(runnerEarly && runnerAge >= 18){
        console.log(`Runner ${raceNumber}, your race time is 9:30am.`)
    } else if(runnerEarly === false && runnerAge >= 18){
        console.log(`Runner ${raceNumber}, your race time is 11:00am.`)
    } else if(runnerAge < 18){
        console.log(`Runner ${raceNumber}, your race time is 12:30pm.`);
    } else{console.log('You did not register')};

}
