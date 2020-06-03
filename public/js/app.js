const noteForm = document.querySelector("form");
noteForm.addEventListener("submit", e => {
  e.preventDefault();
  const text = document.querySelector("input").value;
  if (text) {
    fetch("http://localhost:3000/save?text=" + text);
    fetchNotes();
  }
});

const fetchNotes = () => {
  fetch("http://localhost:3000/get").then(response => {
    response.json().then(data => {
      let notes = "";
      data.forEach(note => (notes += `${note.text}<br>`));

      document.getElementById("notes").innerHTML = notes;
    });
  });
};
window.onload = () => {
  fetchNotes();
};
