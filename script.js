function show(id) {
  document.querySelectorAll('.card').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}
