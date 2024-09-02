console.log("it's a Mark distribution program");

function showDiv() {
    // Get the hidden div by its ID
    const hiddenDiv = document.getElementById("ouputgrade");

    // Set the display style to block to make it visible
    hiddenDiv.style.display = "block";
}

function getNumber() {
    // Get the numeric value from the input field
    const number = document.getElementById("gradenumber").value;
    
    // Convert the value to a number (optional but recommended)
    const numericValue = parseFloat(number);

var marks = numericValue;

if(marks < 1 || marks > 100 ){
    var stringValue = ("Your Marks Input It's not Right");
    document.getElementById("gradeoutput").textContent = "" + stringValue;

}
 else if(marks >=33 && marks < 40){
    var stringValue = ("E");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=40 && marks < 50){
    var stringValue = ("C");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=50 && marks < 60){
    var stringValue = ("B");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=60 && marks < 70){
    var stringValue = ("B+");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=70 && marks < 80){
    var stringValue = ("A-");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=80 && marks < 90){
    var stringValue = ("A");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else if(marks >=90 && marks < 101){
    var stringValue = ("A+");
    document.getElementById("gradeoutput").textContent = "Your Got : " + stringValue;
}

else{
    var stringValue = ("You are Fail");
    document.getElementById("gradeoutput").textContent = "" + stringValue;
}


}
