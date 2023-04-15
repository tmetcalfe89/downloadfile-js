export default function downloadFile(
  contents,
  fileName,
  mimeType = "text/plain"
) {
  // Create a new Blob object with the file contents
  const blob = new Blob([contents], { type: mimeType });

  // Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create a dummy anchor tag to trigger the download
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName;

  // Add the anchor tag to the body and click it
  document.body.appendChild(a);
  a.click();

  // Remove the anchor tag from the body
  document.body.removeChild(a);

  // Release the URL object
  URL.revokeObjectURL(url);
}
