

function msmh(){
    milisecond++;
  
    if(milisecond ==100){
        second ++;
        milisecond = 0;
        if(second == 60){
            munite++;
            second =0;
            if(munite == 60){
                hour++;
                munite = 0;
            }
        }

    }

    let h = (hour>10)? hour:hour;
    let s = (second>10)? second:second;
    let m = (munite>10)? munite:munite;
    let mili = (milisecond>10)? milisecond:milisecond;


    time_output.innerHTML =`${h}:${m}:${s}:${mili}`;

}





function clear(){
    if(hour>0){
        hour =0;
    }else if(munite>0){
        munite =0;

    }else if(second>0){
        second =0;
    }else if(milisecond>0){
        milisecond =0;
    }
    let h = (hour>0)? hour:hour+"0";
    let s = (second>0)? second:second+"0";
    let m = (munite>0)? munite:munite+"0";
    let mili = (milisecond>0)? milisecond:milisecond+"0";

    time_output.innerHTML =`${h}:${m}:${s}:${mili}`;
}