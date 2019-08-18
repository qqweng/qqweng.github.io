// https://stackoverflow.com/questions/8053683/display-a-sentence-one-character-at-a-time
(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 75);
    };
})(jQuery);

$('#myBio').writeText("I enjoy traveling to new places, being myself, and having a good time.");

function myFunction() {
	var moreText = document.getElementById("more");
	var btnText1 = document.getElementById("link1");
	var btnText2 = document.getElementById("link2");

  
	/*if (moreText.style.display === "none") { */
	if (getComputedStyle(moreText, null).display === "none") {
	  moreText.style.display = "inline";
	  btnText1.style.display = "none";
	  btnText2.style.display = "inline";
	  
	} else {
	  moreText.style.display = "none";
	  btnText1.style.display = "inline"; 
	  btnText2.style.display = "none";
	}
}

var titles = [
    "Game of Life",
    "Appointment System",
    "Java Translator"
]

var obj = [
    "Following the concepts of Conway's Game of Life, I used Python to create a mini game with patterns such as the glider.",
    "The goal of this program to help students understand the differences between C and C++ programming, the advantages and disadvantages of using C++ programming, and experience how programmers continuously adapt and change their applications to make it more effient and function better.",
    "This program is used to develop a better understanding of parsing and compiling by using Java. Since I mainly use C/C++ as my main programming language, I will be getting familiar with the practical use of Java programming through this project."
]

var about = [
    "This simple mathematical program follows the rules of Conrad's Game of Life, giving us a complex behavior with some simple rules. Given the option to team up with someone, I decided to challenge myself to see how far my knowledge has gone with a quarter of learning programming. <br>",
    "This appointment calendar program was created with my partner, Emma Guo, where we continuously changed the program to adapt it's usages to better fit the client's needs. This program was part of a course assignment where we had to implement course taught concepts of objected-oriented C++ programming and C programming. <br>",
    "I developed this program independently with the help of in class concepts. These program has a combination of three ideas infused together which are syntactic analysis, semantic analysis, and code generation. <br>"
]

var moreInfo = [
    "This program was split into two parts. In order to get familiarized with the rules of the game of life, I started out by creating a program that printed the next generation of glider. Changing the list of 0's and 1's according to the rules of the Game of Life, the function would print out the next pattern of glider. Afterwards, I adapted the program so that it would read in user input for different pattern text files, how many generations, and if the outputted generations need to be saved to a file. To change the design a bit, I changed 0's into dots and 1's into asterisks. Instead of printing the next generation by calling the function one by one, the program would print them out consecutively. <button onclick=\"myFunction()\" id=\"link2\">Read less</button>",
    "Our program's reads in a file filled with data (.csv or .dot) and creates a calendar to put all the data into. By separating the calendar into days, days to appointments, and appointments to time through mulpiple classes, we were able to efficiently change our program accordingly. In the beginning, our program reads in a file and the user is able to search the appointments by the subject/type or date of appointment. As we edited our program, we added features to add and check total amount of appointments. The program should output the date, start time, end time, subject, and location of the appointment. The program continues to prompt the user until the user is finished. <button onclick=\"myFunction()\" id=\"link2\">Read less</button>",
    "In the beginning of the project, the students were given a BNF and grammatical structure of E programming to understand to parse and translate the code to Java. From there, we start off with creating a scanner so that we can break up the input into tokens. Next, we develop a parser to reorganize the grammar using syntax graphs. The next part is one of the hardest parts of the program which is to create the symbol table. Without understanding how E programming stores variables and how to store the variables, it's difficult to proceed through the code. I approached the problem by using stacks and pushing variables through each scope appropriately by following the guideline of how E programming works. The last part is generating the code so that the translator creates a equivalent Java code that works the same as its E code counterpart. Of course, if there were any errors with scanning or parsing, error messages are outputed appropriately like any compiler would. <button onclick=\"myFunction()\" id=\"link2\">Read less</button>"
]

var projectImgs = [
    "<img src=\"pictures/gameOfLife.png\">",
    "<img src=\"pictures/apptSys.png\">",
    "<img src=\"pictures/comingSoon.png\">"
]

var init = 0;

function lastPic() {
    var title = document.getElementById("x");
    var objective = document.getElementById("y");
    var project = document.getElementById("z");
    var extra = document.getElementById("more");
    var imgs = document.getElementById("gallery");

    if (init > 0) {
        init = init - 1;
        title.innerHTML = titles[init];
        objective.innerHTML = obj[init];
        project.innerHTML = about[init];
        extra.innerHTML = moreInfo[init];
        imgs.innerHTML = projectImgs[init];
    }
    else {
        init = 2;
        title.innerHTML = titles[init];
        objective.innerHTML = obj[init];
        project.innerHTML = about[init];
        extra.innerHTML = moreInfo[init];
        imgs.innerHTML = projectImgs[init];
    }
}

function nextPic() {
    var title = document.getElementById("x");
    var objective = document.getElementById("y");
    var project = document.getElementById("z");
    var extra = document.getElementById("more");
    var imgs = document.getElementById("gallery");

    if (init < 2) {
        init = init + 1;
        title.innerHTML = titles[init];
        objective.innerHTML = obj[init];
        project.innerHTML = about[init];
        extra.innerHTML = moreInfo[init];
        imgs.innerHTML = projectImgs[init];
    }
    else {
        init = 0;
        title.innerHTML = titles[init];
        objective.innerHTML = obj[init];
        project.innerHTML = about[init];
        extra.innerHTML = moreInfo[init];
        imgs.innerHTML = projectImgs[init];
    }
}

var story = [
    "<b>Sports</b> <br> One of my favorite hobbies is keeping myself active and playing sports. I have tried and continued doing many sports during my spare time or for class to keep myself active and healthy. I have done tennis my entire high school year, volleyball and taekwondo during university courses in which I plan on continuing, and archery for club activities. Sports just has that passion and competitive feel to it that I can't get stay away from and learning more about.",
    "<b>Cooking</b> <br> I grew up on the mindset that you never know what other people put into the dishes made in restaurants and that it always better to cook your own food. However, the ability to try new food and learning about how to incorporate it into my own cooking is something that I want to show and give my parents a chance to try.",
    "<b>Traveling</b> <br> To travel and see new things is a experience that I feel is very important to life. I get to learn more about another's culture and experience something that I don't normally get a chance to explore and gain knowledge about.",
    "<b>Studying</b> <br> I am currently a undergraduate, fourth year student at the University of California, majoring in Computer Science. In addition to school, I have a part-time job as a student computer technician, helping out our clients in various departments manage and diagnose problems to their systems.",
    "<b>Stress Relieving</b> <br> Being myself, I get time to myself and be who I am. I can calmly think about problems that arise during work and school, trying to find a solution without causing too much stress on myself and asking friends and colleagues for help if I get stuck.",
    "<b>Kpop</b> <br> Ever since I started listening to kpop music about 1 and a half years ago, I have been an avid fangirl of kpop groups. By being able to watch my favorite groups perform and appear on shows, its a real stress reliever to laugh and sing along with my favorite groups. Ever since I started, my favorite group is Seventeen. Unfortunately, I don't have any pictures of relation to Seventeen that I can show off, but BTS is my one of many other favorite groups.",
    "<b>Disney</b> <br> A kid at heart is one thing that I feel fits me pretty well. Of course, I have my professional style where I act according to my profession. However, I am who I am and that's being happy. Some people say that kids don't have to worry about life and can live carefree. I don't need the carefree part, but I do need to be able to smile and go through any obstacle that heads my way. Even if I'm nervous and ready to break down, I want to keep a smile on my face."
    ]

var init2 = 0;

function shiftLeft() {
const boxes = document.querySelectorAll(".box");
const tmpNode = boxes[0];
boxes[0].className = "box move-out-from-left";

setTimeout(function() {
if (boxes.length > 5) {
    tmpNode.classList.add("box--hide");
    boxes[5].className = "box move-to-position5-from-left opac-half";
}
boxes[1].className = "box move-to-position1-from-left opac-half";
boxes[2].className = "box move-to-position2-from-left opac-three-fourth";
boxes[3].className = "box move-to-position3-from-left";
boxes[4].className = "box move-to-position4-from-left opac-three-fourth";
boxes[0].remove();

document.querySelector(".cards__container").appendChild(tmpNode);

}, 500);

var infoMe = document.getElementById("text2");

if (init2 < 6) {
init2 = init2 + 1;
infoMe.innerHTML = story[init2];
}
else {
init2 = 0;
infoMe.innerHTML = story[init2];
}

}

function shiftRight() {
const boxes = document.querySelectorAll(".box");
boxes[4].className = "box move-out-from-right";
setTimeout(function() {
const noOfCards = boxes.length;
if (noOfCards > 4) {
    boxes[4].className = "box box--hide";
}

const tmpNode = boxes[noOfCards - 1];
tmpNode.classList.remove("box--hide");
boxes[noOfCards - 1].remove();
let parentObj = document.querySelector(".cards__container");
parentObj.insertBefore(tmpNode, parentObj.firstChild);
tmpNode.className = "box move-to-position1-from-right opac-half";
boxes[0].className = "box move-to-position2-from-right opac-three-fourth";
boxes[1].className = "box move-to-position3-from-right";
boxes[2].className = "box move-to-position4-from-right opac-three-fourth";
boxes[3].className = "box move-to-position5-from-right opac-half";
}, 500);

var infoMe = document.getElementById("text2");
if (init2 > 0) {
init2 = init2 - 1;
infoMe.innerHTML = story[init2];
}
else {
init2 = 6;
infoMe.innerHTML = story[init2];
}

}
