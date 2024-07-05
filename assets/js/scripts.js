function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { 
        year: 'numeric', 
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
