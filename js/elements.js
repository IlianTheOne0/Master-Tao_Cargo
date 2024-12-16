document.getElementById('file-input').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : '';
    document.querySelector('.file-item p').textContent = fileName;
});
