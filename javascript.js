document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slides ul li');
    let rightButton = document.querySelector('.right');
    let leftButton = document.querySelector('.left');
    let index = 0;
    let check = 'out motion';
    /* rightButton Logic */
    rightButton.onclick = function () {
        /* Steps 4: Test the active slide  */
        if (check == 'in motion') {
            return false;
        }
        check = 'in motion'
        /* Step 1: Position of current slide & next slide */
        let activeSlide = slides[index];
        if (index < (slides.length - 1)) {
            index++;
        }
        else {
            index = 0;
        }
        let nextSlide = slides[index];
        /* Steps 2: Add animation for current slide & next slide */
        activeSlide.classList.add('activeSlideFadeNext');
        nextSlide.classList.add('nextSlideFade');
        /* Steps 3: When animation end */
        let statusTwoAnimation = 0;
        activeSlide.addEventListener('webkitAnimationEnd', function () {
            this.classList.remove('active');
            this.classList.remove('activeSlideFadeNext');
            statusTwoAnimation++;
            if (statusTwoAnimation == 2) {
                check = 'out motion';
            }
        });
        nextSlide.addEventListener('webkitAnimationEnd', function () {
            this.classList.remove('nextSlideFade');
            this.classList.add('active');
            statusTwoAnimation++;
            if (statusTwoAnimation == 2) {
                check = 'out motion';
            }
        });
    };
    /* leftButton logic */
    leftButton.onclick = function () {
        /* Steps 4: Test the active slide  */
        if (check == 'in motion') {
            return false;
        }
        check = 'in motion'
        /* Step 1: Position of current slide & next slide */
        let activeSlide = slides[index];
        if (index > 0) {
            index--;
        }
        else {
            index = (slides.length - 1);
        }
        let previousSlide = slides[index];
        /* Step 2: Add animation for current slide & next slide */
        activeSlide.classList.add('activeSlideFadePrevious');
        previousSlide.classList.add('previousSlideFade');
        /* Steps 3: When animation end */
        let statusTwoAnimation = 0;
        activeSlide.addEventListener('webkitAnimationEnd', function () {
            this.classList.remove('active');
            this.classList.remove('activeSlideFadePrevious');
            statusTwoAnimation++;
            if (statusTwoAnimation == 2) {
                check = 'out motion';
            }
        });
        previousSlide.addEventListener('webkitAnimationEnd', function () {
            this.classList.remove('previousSlideFade');
            this.classList.add('active');
            statusTwoAnimation++;
            if (statusTwoAnimation == 2) {
                check = 'out motion';
            }
        });
    };
});