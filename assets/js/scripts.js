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
