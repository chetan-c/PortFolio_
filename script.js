function openCertificate(src, title, issued, org) {
    document.getElementById("certificateModal").style.display = "block";
    document.getElementById("modalImage").src = src;
    document.getElementById("modalInfo").innerHTML = `
      <h3>${title}</h3>
      <p>Issued: ${issued}</p>
      <p>Organization: ${org}</p>
    `;
  }
  
  function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
  }
  
