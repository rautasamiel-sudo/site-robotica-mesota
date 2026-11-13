// Salvarea automată în memoria browserului la click pe buton
document.getElementById('btn-salvare').addEventListener('click', () => {
    const numeEchipa = document.getElementById('nume-echipa').innerText;
    const descriere = document.getElementById('descriere-principala').innerText;

    localStorage.setItem('numeEchipa', numeEchipa);
    localStorage.setItem('descriere', descriere);

    alert('Modificările au fost salvate cu succes!');
});

// Încărcarea datelor salvate când se deschide site-ul
window.addEventListener('load', () => {
    if(localStorage.getItem('numeEchipa')) {
        document.getElementById('nume-echipa').innerText = localStorage.getItem('numeEchipa');
    }
    if(localStorage.getItem('descriere')) {
        document.getElementById('descriere-principala').innerText = localStorage.getItem('descriere');
    }
});