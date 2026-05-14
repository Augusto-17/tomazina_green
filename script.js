// Função para animar os números das estatísticas
function animateCount(id, target) {
    let current = 0;
    let obj = document.getElementById(id);
    if(!obj) return;
    
    let duration = 2000; // 2 segundos
    let stepTime = 20;
    let steps = duration / stepTime;
    let increment = target / steps;
    
    let timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            obj.innerHTML = target.toLocaleString();
            clearInterval(timer);
        } else {
            obj.innerHTML = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// Inicia a animação quando a página carrega
window.onload = () => {
    animateCount('count-ha', 1250);
    animateCount('count-co2', 15400);
    animateCount('count-pro', 42);
    animateCount('count-money', 450000);
};

// Log de sucesso (bom para auditoria do Agrinho)
console.log("Tomazina Green: Script carregado conforme regulamento.");