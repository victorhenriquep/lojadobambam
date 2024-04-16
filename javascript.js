document.addEventListener('DOMContentLoaded', function() {
    const linkCachaca = document.getElementById('link-cachaca');
    const modal = document.getElementById('modal-confirmacao-idade');

    linkCachaca.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    document.getElementById('btnSim').addEventListener('click', function() {
        // O usuário confirmou que tem mais de 18 anos.
        window.location.href = "cachaca.html";
      });
      
      document.getElementById('btnNao').addEventListener('click', function() {
        // O usuário confirmou que não tem mais de 18 anos.
        alert("Desculpe, você deve ter pelo menos 18 anos para acessar esta página.");
        window.location.href = "index.html";
      });
});


