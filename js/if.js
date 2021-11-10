function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
     console.log("good day")
    } else if (time < 22) {
        console.log("what a day")
    } else {
        console.log("nice day")
    }
  
  }
  myFunction()