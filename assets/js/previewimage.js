
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var preview = document.getElementById('preview');
        preview.src = reader.result;
        preview.style.display = "block";
    }
    reader.readAsDataURL(event.target.files[0]);
    
}
const input = document.querySelector('input');
const preview = document.querySelector('.preview');

input.style.opacity = 0;

