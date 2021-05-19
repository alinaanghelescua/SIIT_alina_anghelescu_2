function BMI()
{
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
    var bmi=weight/(height*height);
    var bmiRounded=(bmi.toFixed(1));
function range(bmiRounded){
    if (bmiRounded<18.5) {return("underweight")}
    else if (bmiRounded < 25) {return("healthy")}
    else if (bmiRounded < 30) {return("overweight")}
    else {return("obese")}

}
document.getElementById("result").innerHTML="Your BMI is " + bmiRounded + ". You are " + range(bmiRounded);
}