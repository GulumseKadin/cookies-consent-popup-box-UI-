document.querySelector('.open-btn').onclick = () => {
    document.querySelector('.cookies-box').classList.add('active');
}

document.querySelector('.close-btn').onclick = () => {
    document.querySelector('.cookies-box').classList.remove('active');
}