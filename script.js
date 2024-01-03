const targetDate = new Date('2024-02-02T00:00:00'); // Set your target date here

let previousTimeBetweenDates;

const countdownInterval = setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((targetDate - currentDate) / 1000);
  if (timeBetweenDates <= 0) {
    clearInterval(countdownInterval);
    displayZeroes();
    return;
  }
  flipAllCards(timeBetweenDates);
  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const days = Math.max(0, Math.floor(time / (3600 * 24)));
  const remainingTime = time % (3600 * 24);
  const hours = Math.max(0, Math.floor(remainingTime / 3600));
  const remainingMinutes = remainingTime % 3600;
  const minutes = Math.max(0, Math.floor(remainingMinutes / 60));
  const seconds = Math.max(0, remainingMinutes % 60);

  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function displayZeroes() {
  // Display 00s when the countdown reaches zero
  flip(document.querySelector("[data-days-tens]"), 0);
  flip(document.querySelector("[data-days-ones]"), 0);
  flip(document.querySelector("[data-hours-tens]"), 0);
  flip(document.querySelector("[data-hours-ones]"), 0);
  flip(document.querySelector("[data-minutes-tens]"), 0);
  flip(document.querySelector("[data-minutes-ones]"), 0);
  flip(document.querySelector("[data-seconds-tens]"), 0);
  flip(document.querySelector("[data-seconds-ones]"), 0);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}


$('#carousel-example-generic').on('slide.bs.carousel', function () {
  var $active = $('.carousel-indicators-vertical .active');
  var $next = $active.next();

  if ($next.length === 0) {
    $next = $('.carousel-indicators-vertical li').first();
  }

  $active.removeClass('active');
  $next.addClass('active');
  
  $('#carousel-example-generic').on('mouseenter', function() {
    $(this).carousel('cycle');
  });
  
  // Resume carousel on mouseleave
  $('#carousel-example-generic').on('mouseleave', function() {
    $(this).carousel('cycle');
  });
  
});


$(document).ready(function() {
    // Disable default click action on carousel controls and indicators
    $('#carousel-example-generic').click(function(event) {
      event.preventDefault();
    });
  });
  
  
