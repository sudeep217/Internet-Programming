document.addEventListener('DOMContentLoaded', function() {
    const introForm = document.getElementById('intro-form');
    const nextIntroButton = document.getElementById('next-intro');
    const mainPage = document.getElementById('main-page');
    const nextMainButton = document.getElementById('next-main');
    const dashboard = document.getElementById('dashboard');
    const roleSelect = document.getElementById('role');
    const buyerSection = document.getElementById('buyer-section');
    const sellerSection = document.getElementById('seller-section');
    const buyerForm = document.getElementById('buyer-form');
    const sellerForm = document.getElementById('seller-form');

    nextIntroButton.addEventListener('click', function() {
        introForm.style.display = 'none';
        mainPage.style.display = 'block';
    });

    nextMainButton.addEventListener('click', function() {
        mainPage.style.display = 'none';
        dashboard.style.display = 'block';
        if (roleSelect.value === 'buyer') {
            buyerSection.style.display = 'block';
        } else {
            sellerSection.style.display = 'block';
        }
    });

    buyerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you, your order has been placed.');
        location.reload();
    });

    sellerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you, seller. Your product sale is now live.');
        location.reload();
    });
});