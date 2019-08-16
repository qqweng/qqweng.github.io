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

var story = [
    "<b>Sports</b> <br> One of my favorite hobbies is keeping myself active and playing sports. I have tried and continued doing many sports during my spare time or for class to keep myself active and healthy. I have done tennis my entire high school year, volleyball and taekwondo during university courses in which I plan on continuing, and archery for club activities. Sports just has that passion and competitive feel to it that I can't get stay away from and learning more about.",
    "<b>Cooking</b> <br> I grew up on the mindset that you never know what other people put into the dishes made in restaurants and that it always better to cook your own food. However, the ability to try new food and learning about how to incorporate it into my own cooking is something that I want to show and give my parents a chance to try.",
    "<b>Traveling</b> <br> To travel and see new things is a experience that I feel is very important to life. I get to learn more about another's culture and experience something that I don't normally get a chance to explore and gain knowledge about.",
    "<b>Studying</b> <br> I am currently a undergraduate, fourth year student at the University of California, majoring in Computer Science. In addition to school, I have a part-time job as a student computer technician, helping out our clients in various departments manage and diagnose problems to their systems.",
    "<b>Stress Relieving</b> <br> Being myself, I get time to myself and be who I am. I can calmly think about problems that arise during work and school, trying to find a solution without causing too much stress on myself and asking friends and colleagues for help if I get stuck.",
    "<b>Kpop</b> <br> Ever since I started listening to kpop music about 1 and a half years ago, I have been an avid fangirl of kpop groups. By being able to watch my favorite groups perform and appear on shows, its a real stress reliever to laugh and sing along with my favorite groups. Ever since I started, my favorite group is Seventeen. Unfortunately, I don't have any pictures of relation to Seventeen that I can show off, but BTS is my one of many other favorite groups.",
    "<b>Disney</b> <br> A kid at heart is one thing that I feel fits me pretty well. Of course, I have my professional style where I act according to my profession. However, I am who I am and that's being happy. Some people say that kids don't have to worry about life and can live carefree. I don't need the carefree part, but I do need to be able to smile and go through any obstacle that heads my way. Even if I'm nervous and ready to break down, I want to keep a smile on my face."
    ]

var init = 0;

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

if (init < 6) {
init = init + 1;
infoMe.innerHTML = story[init];
}
else {
init = 0;
infoMe.innerHTML = story[init];
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
if (init > 0) {
init = init - 1;
infoMe.innerHTML = story[init];
}
else {
init = 6;
infoMe.innerHTML = story[init];
}

}
