// 시작 페이지 시간
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { 
        // year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'short', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    const formattedDateTime = now.toLocaleDateString('ko-KR', options);
    dateTimeElement.textContent = formattedDateTime;
}

// 초기화
updateDateTime();

// 1초마다 갱신
setInterval(updateDateTime, 1000);


// 밀어서 잠금해제
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderContainer = document.querySelector('.slider-container');
    let isDragging = false;
    let startX = 0;

    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        let moveX = e.clientX - startX;
        let sliderWidth = slider.offsetWidth;
        let containerWidth = sliderContainer.offsetWidth;

        if (moveX < 0) moveX = 0;
        if (moveX > containerWidth - sliderWidth) moveX = containerWidth - sliderWidth;

        slider.style.left = moveX + 'px';
    });

    document.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        isDragging = false;

        let sliderWidth = slider.offsetWidth;
        let containerWidth = sliderContainer.offsetWidth;

        if (parseInt(slider.style.left) >= containerWidth - sliderWidth) {
            // 밀어서 잠금 해제 완료
            location.href = 'blog.html';
        } else {
            // 슬라이더 위치 초기화
            slider.style.left = '0';
        }
    });
});

// 아이콘 확대
document.addEventListener('DOMContentLoaded', function() {
    const dockItems = document.querySelectorAll('.dock-item');

    dockItems.forEach((item, index) => {
        item.addEventListener('mouseover', function() {
            dockItems.forEach(dockItem => {
                dockItem.style.transform = 'scale(1)';
            });

            item.style.transform = 'scale(1.6)';
            if (dockItems[index - 1]) {
                dockItems[index - 1].style.transform = 'scale(1.15)';
            }
            if (dockItems[index + 1]) {
                dockItems[index + 1].style.transform = 'scale(1.15)';
            }
        });

        item.addEventListener('mouseout', function() {
            dockItems.forEach(dockItem => {
                dockItem.style.transform = 'scale(1)';
            });
        });
    });
});

// // 음악 팝업
// document.addEventListener('DOMContentLoaded', function() {
//     const musicIcon = document.getElementById('music-icon');
//     const musicPopup = document.getElementById('music-popup');

//     musicIcon.addEventListener('click', function() {
//         if (musicPopup.style.display === 'none' || musicPopup.style.display === '') {
//             musicPopup.style.display = 'block';
//         } else {
//             musicPopup.style.display = 'none';
//         }
//     });
// });

// 음악 팝업 재생 및 일시정지
document.addEventListener('DOMContentLoaded', function() {
    const musicIcon = document.getElementById('music-icon');
    const musicPopup = document.getElementById('music-popup');
    const playButton = document.getElementById('play-button');
    const marquee = document.querySelector('.marquee');
    const marqueeText = marquee.querySelector('p');

    // Toggle music popup visibility
    musicIcon.addEventListener('click', function() {
        if (musicPopup.style.display === 'none' || musicPopup.style.display === '') {
            musicPopup.style.display = 'block';
            setTimeout(() => {
                marquee.classList.add('marquee-start');
            }, 10000); // 10초 후에 애니메이션 시작
        } else {
            musicPopup.style.display = 'none';
            marquee.classList.remove('marquee-start');
        }
    });

    // Play or pause audio
    playButton.addEventListener('click', function() {
        if (playButton.textContent == '▶️') {
            playButton.textContent = '⏸';
            playButton.classList.add('pause');
        } else {
            playButton.textContent = '▶️';
            playButton.classList.remove('pause');
        }
    });

});
