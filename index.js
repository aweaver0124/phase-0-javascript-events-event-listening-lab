const input = document.getElementById('input');

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
} 
input.addEventListener('click', addingEventListener);