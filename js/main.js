function showHide(target) {
    const res = target.nextElementSibling
    
    target.classList.toggle('active');
    res.style.display = res.style.display !== 'block' ? 'block' : 'none'

} 