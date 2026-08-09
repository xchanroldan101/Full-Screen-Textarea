const alertBox = document.getElementById('internet-alert');

function updateOnlineStatus() {
    if (navigator.onLine) {
        alertBox.classList.add('hidden');
    } else {
        alertBox.classList.remove('hidden');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

updateOnlineStatus();

