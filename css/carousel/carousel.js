let $ = document;

let $slides = $.querySelectorAll('#slides .slide'); // slide ㄱㅏ져오기
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(_n){
	$slides[currentSlide].className = 'slide';

	currentSlide = (_n+$slides.length)%($slides.length);   // 이미지 개수에 대해서 동적으로 처리하기 위해.. 마지막 인덱스일 경우 0으로 전환

	$slides[currentSlide].className = 'slide showing';
}


let playing = true;
let $pauseButton = $.getElementById('pause');

function pauseSlideshow(){
	$pauseButton.innerHTML = '&#9658;'; // play character
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	$pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	playing = true;
	slideInterval = setInterval(nextSlide,2000);
}

$pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

let $next = $.getElementById('next');
let $previous = $.getElementById('previous');

$next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
$previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};
