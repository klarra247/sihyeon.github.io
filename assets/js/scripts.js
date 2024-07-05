document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        document.getElementById('date-time').textContent = dateTimeString;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function showBlog() {
    window.location.href = "blog.html"; // 블로그 메인 페이지로 이동
}
