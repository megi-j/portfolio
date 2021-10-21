// 1st section
function createSlider(){
    let images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
    ]
    
    let currentSlideIndex = 0;
    setTimeout(next, 5000);
    let slider = document.getElementById('sectionSlider');
    
    createSlide();
    function next() {
        let nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex >  images.length - 1) nextSlideIndex = 0;
        setActiveSlide(nextSlideIndex);
        
    }
    function setActiveSlide(newIndex) {
        let slider = document.getElementById('sectionSlider');
        slider.classList.add('out');

        setTimeout(function() {
            currentSlideIndex = newIndex;
            createSlide();
            setTimeout(next, 5000);
            slider.classList.remove('out');
        }, 500);
    }
    
    function createSlide(){
        slider.style.backgroundImage = 'url(' + images[currentSlideIndex] + ')';
    }
}
createSlider();
// 2nd section
window.addEventListener('scroll', function(){
    let scrollTop = document.querySelector('html').scrollTop;

    if(scrollTop < 1900 && scrollTop > 700){
        document.querySelector('.pers-number.one').classList.add('red');
        document.querySelector('.pers-number.two').classList.add('red');
        document.querySelector('.pers-number.three').classList.add('red');
        document.querySelector('.pers-number.four').classList.add('red');
        document.querySelector('.line.one').classList.add('red');
        document.querySelector('.line.two').classList.add('red');
        document.querySelector('.line.three').classList.add('red');
        document.querySelector('.line.four').classList.add('red');
    }   
})
// 3rd section
function createServiceBox() {
    let serviceBox = document.querySelectorAll('.service-box');

    for(let i = 0; i < serviceBox.length; i++){
        serviceBox[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = '#15263E';
            this.children[0].style.display = 'none';
            this.children[1].style.display = 'none';
            this.children[2].style.display = 'block';
        });
        serviceBox[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#FAFAFA'
            this.children[0].style.display = 'flex';
            this.children[1].style.display = 'flex';
            this.children[2].style.display = 'none';
        });
    }
}

createServiceBox();

// 4rth section
function createRecommendationsSlider(){
    let usersRecommendations = [
        {
            text: 'She was always accommodating, committed, and motivated.We worked on many projects together, and she is very applied and aims for high-quality work.Anyone would be lucky to have Magi as a colleague.',
            image: 'images/teo.jpg',
            profession: 'developer',
            author: 'Teona Mchedlidze'
        },
        {
            text: 'We have known each other for over 15 years now.Megi and I went to the same university and I had the pleasure of taking a few classes with her and seeing how brilliant she is.If you give her the opportunity I am sure you will never regret.',
            image: 'images/mari.jpg',
            profession : 'Front-end developer',
            author: 'Mary Chitadze'
        },
        {
            text: 'In spite of she is junior front-end developer,she has the ability to work on multiple tasks and still be focused and deliver quality work. ',
            image: 'images/lasha.jpg',
            profession : 'Full stack developer',
            author: 'Lasha Nanobashvili'
        }
    ]
    
    let currentUsersRecommendations = 0;
    
    function recommendationsSlider(){
        let recommendationsSlider = document.getElementById('recommendationsSlider');
    
        createBullets();
        function createBullets(){
            let div = document.createElement('div');
            div.className = 'bullet-box';
            recommendationsSlider.appendChild(div);
    
            for (let i = 0; i < usersRecommendations.length; i++) {
                let bullet = document.createElement('button');
                bullet.className = 'bullet';
                div.appendChild(bullet);
            }
            setActiveBullet();
        }
    
        function setActiveBullet(){
            let bullets = document.querySelectorAll('.bullet');
        
            for(let i = 0; i < bullets.length; i++){
                bullets[i].classList.remove('active');
                bullets[i].addEventListener('click', function(){
                    setActiveSlide(i);
                })
            }
        
            bullets[currentUsersRecommendations].classList.add('active');
        }
    
        setActiveSlide(currentUsersRecommendations);
    
        function setActiveSlide(newIndex){
            currentUsersRecommendations = newIndex;
    
            let recommendationsText = document.getElementById('recommendationsText');
            recommendationsText.innerText = usersRecommendations[newIndex].text;
    
            let recommendationsProfession = document.getElementById('recommendationsProfession');
            recommendationsProfession.innerText = usersRecommendations[newIndex].profession;
    
            let recommendationsName = document.getElementById('recommendationsName');
            recommendationsName.innerText = usersRecommendations[newIndex].author;
    
            let recommendationsImage = document.getElementById('recommendationsImage');
            recommendationsImage.src = usersRecommendations[newIndex].image;
    
            setActiveBullet();
        }
    }
    recommendationsSlider();
}
createRecommendationsSlider();
// 5th section


document.querySelector('.all').addEventListener('mouseover', function(){
    document.querySelector('.project-one .project-img').classList.add('change-opacity');
    document.querySelector('.project-two .project-img').classList.add('change-opacity');
    document.querySelector('.project-three .project-img').classList.add('change-opacity');
    document.querySelector('.project-four .project-img').classList.add('change-opacity');
    document.querySelector('.project-five .project-img').classList.add('change-opacity');
    document.querySelector('.project-six .project-img').classList.add('change-opacity');
})
document.querySelector('.all').addEventListener('mouseout', function(){
    document.querySelector('.project-one .project-img').classList.remove('change-opacity');
    document.querySelector('.project-two .project-img').classList.remove('change-opacity');
    document.querySelector('.project-three .project-img').classList.remove('change-opacity');
    document.querySelector('.project-four .project-img').classList.remove('change-opacity');
    document.querySelector('.project-five .project-img').classList.remove('change-opacity');
    document.querySelector('.project-six .project-img').classList.remove('change-opacity');
})

document.querySelector('.calculator').addEventListener('mouseover', function(){
    document.querySelector('.project-one .project-img').classList.add('change-opacity');
})
document.querySelector('.calculator').addEventListener('mouseout', function(){
    document.querySelector('.project-one .project-img').classList.remove('change-opacity');
})
document.querySelector('.simple-slider').addEventListener('mouseover', function(){
    document.querySelector('.project-two .project-img').classList.add('change-opacity');
})
document.querySelector('.simple-slider').addEventListener('mouseout', function(){
    document.querySelector('.project-two .project-img').classList.remove('change-opacity');
})
document.querySelector('.design').addEventListener('mouseover', function(){
    document.querySelector('.project-three .project-img').classList.add('change-opacity');
})
document.querySelector('.design').addEventListener('mouseout', function(){
    document.querySelector('.project-three .project-img').classList.remove('change-opacity');
})
document.querySelector('.animation').addEventListener('mouseover', function(){
    document.querySelector('.project-four .project-img').classList.add('change-opacity');
})
document.querySelector('.animation').addEventListener('mouseout', function(){
    document.querySelector('.project-four .project-img').classList.remove('change-opacity');
})
document.querySelector('.survey-form').addEventListener('mouseover', function(){
    document.querySelector('.project-five .project-img').classList.add('change-opacity');
})
document.querySelector('.survey-form').addEventListener('mouseout', function(){
    document.querySelector('.project-five .project-img').classList.remove('change-opacity');
})
document.querySelector('.tribute-page').addEventListener('mouseover', function(){
    document.querySelector('.project-six .project-img').classList.add('change-opacity');
})
document.querySelector('.tribute-page').addEventListener('mouseout', function(){
    document.querySelector('.project-six .project-img').classList.remove('change-opacity');
})
// 6th section
// document.querySelector('.first-span').addEventListener('click', function(){
//     document.querySelector('.first-hide-text').classList.add('clearity');
// })
// document.querySelector('.second-span').addEventListener('click', function(){
//     document.querySelector('.second-hide-text').classList.add('clearity');
// })
// document.querySelector('.third-span').addEventListener('click', function(){
//     document.querySelector('.third-hide-text').classList.add('clearity');
// })
// 8th section

document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let website = document.getElementById('website').value;
    let message = document.getElementById('message').value;
  
    sendMessage(name, email, website, message).then(function(messages) {
        console.log(messages);
        
    });
    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('website').value = '';
    document.getElementById('message').value = '';
    e.preventDefault();
});
  
function sendMessage(name, email, website, message) {
    return fetch('https://ucha.ge/contact-form/submit.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: 'action=send_message&name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&website=' + encodeURIComponent(website) + '&message=' + encodeURIComponent(message)
    }).then(function(r) {
      return r.json();
    });
}