$(document).ready(function() {
    // Start screen function
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Trivia</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //function to start game
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
        generateHTML();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event){
        //if answer
        selectedAnswer = $(this).text();
        if(selectedAnswer === rightAnswers[questionCounter]) {
            //right
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            //wrong
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    }); 
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Out of time!  The right answer was: " + rightAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  
    }
    
    function generateWin() {
        rightTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Right! The answer is: " + rightAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  
    }
    
    function generateLoss() {
        wrongTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The right answer is: "+ rightAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Here's Your Score!" + "</p>" + "<p class='summary-correct'>Right: " + rightTally + "</p>" + "<p>Wrong: " + wrongTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset Cigar Trivia!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        rightTally = 0;
        wrongTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["Which is the darkest color cigar wrapper", "What are the three parts of a hand-rolled cigar?", "What is the name of the tobacco grown in the United States that is most often used for high quality cigar wrappers?", "What is the finding of the Surgeon General of the United States concerning cigars?", "Cigars are categorized by their length and what other measurement?", "Which is not the name of a size/style of cigar?", "What are the optimum conditions to store a cigar?", "Which Florida city was often called the cigar capital of the U.S.A.?"];
    var answerArray = [["Maduro","Oscuro","Claro","Colorado"], ["label, cover, center","wrapper, binder, filler","wrapper, leaf, label","wrapper. filler, label"], ["Cuban Seed", "Tampa", "Connecticut Shade", "Colorado Red"], ["Cigars are a safe alternative to cigarettes.","Cigars are safe as long you you do not inhale.","Cigars are not a safe alternative to cigarettes.","Cigars are unsafe but secondhand cigar smoke is safe."], ["circumference","weight","balance point","ring size"], ["pyromado","figurado","robusto","lonsdale"], ["70 degrees F and 90% humidity","65 degrees F and 70% humidity","40 degrees F and 90% humidity","80 degrees F and 20% humidity"], ["Orlando","Pensacola","St. Augustine","Tampa"]];
    var imageArray = ["<img class='center-block img-right' src='assets/images/maduro.jpg'>", "<img class='center-block img-right' src='assets/images/binder.jpg'>", "<img class='center-block img-right' src='assets/images/connecticut.jpeg'>", "<img class='center-block img-right' src='assets/images/sgw.png'>", "<img class='center-block img-right' src='assets/images/ring.jpeg'>", "<img class='center-block img-right' src='assets/images/size.png'>", "<img class='center-block img-right' src='assets/images/store.jpeg'>", "<img class='center-block img-right' src='assets/images/tampa.jpeg'>"];
    var rightAnswers = ["A. Maduro", "B. wrapper, binder, filler", "C. Connecticut Shade", "C. Cigars are not a safe alternative to cigarettes.", "D. ring size", "A. pyromado", "B. 65 degrees F and 70% humidity", "D. Tampa"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var rightTally = 0;
    var wrongTally = 0;
    var unansweredTally = 0;
    