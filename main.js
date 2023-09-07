document.addEventListener("DOMContentLoaded", function() {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getUTCDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time
    function getCurrentUTCTime() {
        const now = new Date();
        const utcTime = now.toISOString().split("T")[1].split(".")[0];
        return utcTime;
    }

    // Display the current day of the week
    const currentDayElement = document.getElementById("currentDay");
    currentDayElement.textContent = "Current day of the week: " + getCurrentDayOfWeek();

    // Display the current UTC time
    const currentTimeElement = document.getElementById("currentTime");
    currentTimeElement.textContent = "Current UTC time: " + getCurrentUTCTime();
});
