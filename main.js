let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("totalSlides").textContent = totalSlides;

function showSlide(index) {
	// Remove active class from all slides
	slides.forEach((slide) => slide.classList.remove("active"));

	// Add active class to current slide
	slides[index].classList.add("active");

	// Update slide counter
	document.getElementById("currentSlide").textContent = index + 1;

	// Update button states
	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");

	prevBtn.disabled = index === 0;
	nextBtn.disabled = index === totalSlides - 1;

	// Update button styles based on disabled state
	if (prevBtn.disabled) {
		prevBtn.classList.add("opacity-50", "cursor-not-allowed");
	} else {
		prevBtn.classList.remove("opacity-50", "cursor-not-allowed");
	}

	if (nextBtn.disabled) {
		nextBtn.classList.add("opacity-50", "cursor-not-allowed");
	} else {
		nextBtn.classList.remove("opacity-50", "cursor-not-allowed");
	}
}

function changeSlide(direction) {
	const newIndex = currentSlideIndex + direction;

	if (newIndex >= 0 && newIndex < totalSlides) {
		currentSlideIndex = newIndex;
		showSlide(currentSlideIndex);
	}
}

// Event listeners for navigation buttons
document.getElementById("prevBtn").addEventListener("click", function () {
	if (!this.disabled) {
		changeSlide(-1);
	}
});

document.getElementById("nextBtn").addEventListener("click", function () {
	if (!this.disabled) {
		changeSlide(1);
	}
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
		event.preventDefault();
		changeSlide(-1);
	} else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
		event.preventDefault();
		changeSlide(1);
	}
});

// Initialize presentation
showSlide(0);

// Add hover effects to distribution cards
document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".hover\\:scale-105");
	cards.forEach((card) => {
		card.addEventListener("mouseenter", function () {
			this.style.transform = "scale(1.05)";
			this.style.transition = "transform 0.2s ease-in-out";
		});

		card.addEventListener("mouseleave", function () {
			this.style.transform = "scale(1)";
		});
	});
});

// Add click feedback to interactive elements
document.querySelectorAll("button").forEach((button) => {
	button.addEventListener("click", function () {
		if (!this.disabled) {
			this.style.transform = "scale(0.95)";
			setTimeout(() => {
				this.style.transform = "scale(1)";
			}, 100);
		}
	});
});
