// Function to handle file upload submission
function submitDesign() {
  const fileInput = document.getElementById("upload");
  if (fileInput.files.length === 0) {
    alert("Please select a design file before submitting.");
    return;
  }

  const fileName = fileInput.files[0].name;
  alert(`✅ Your design "${fileName}" has been received! We'll be in touch soon.`);
  fileInput.value = ""; // Reset form
}

// Function to handle custom artwork request
function requestArtwork() {
  const description = document.getElementById("description").value.trim();
  if (!description) {
    alert("🖌️ Please describe your vision before requesting artwork.");
    return;
  }

  alert("✨ Thanks for your request! Our design team will reach out shortly.");
  document.getElementById("description").value = ""; // Reset form
}
