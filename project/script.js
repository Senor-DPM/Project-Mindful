const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = current.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = currentText.classList.contains('read-more-text--show') ? "Read Less..." : "Read More...";
});
