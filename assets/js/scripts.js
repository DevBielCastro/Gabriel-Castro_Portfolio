// assets/js/scripts.js

// ==============================================
// Configuração do Marked (Markdown Parser)
// ==============================================
marked.setOptions({
    breaks: true, // Converte quebras de linha em <br>
    highlight: function (code) {
        return hljs.highlightAuto(code).value; // Syntax highlighting
    },
});

// ==============================================
// Função Principal: Carregar Documentação
// ==============================================
async function loadDocs(projectCard) {
    const readmeUrl = projectCard.dataset.readmeUrl;
    const modal = document.getElementById("docsModal");
    const contentDiv = document.getElementById("docsContent");

    // Loader animation
    const loader = `
      <div class="text-center py-8">
        <div class="loader animate-spin inline-block w-8 h-8 border-4 border-white/30 border-t-blue-500 rounded-full"></div>
      </div>
    `;

    // Evita recarregar o README se já estiver carregado
    if (modal.style.display === "block" && contentDiv.innerHTML.trim() !== loader.trim()) {
        return;
    }

    // Abrir modal e exibir loader
    modal.style.display = "block";
    contentDiv.innerHTML = loader;

    try {
        // Fetch do README.md
        const response = await fetch(readmeUrl);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: README não encontrado em ${readmeUrl}`);
        }
        const markdown = await response.text();

        // Converter Markdown para HTML
        const html = marked.parse(markdown);

        // Sanitizar HTML (segurança contra XSS)
        const cleanHTML = DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ["h1", "h2", "h3", "p", "a", "ul", "ol", "li", "code", "pre", "strong", "em", "img", "table", "thead", "tbody", "tr", "th", "td"],
            ALLOWED_ATTR: ["href", "src", "alt", "class", "target"],
        });

        // Injetar conteúdo no DOM
        contentDiv.innerHTML = `
        <div class="github-markdown-content">
          ${cleanHTML}
        </div>
      `;

        // ==============================================
        // Pós-processamento
        // ==============================================
        // 1. Links abrem em nova aba
        contentDiv.querySelectorAll("a").forEach((link) => {
            link.setAttribute("target", "_blank");
            link.classList.add("text-blue-400", "hover:text-blue-300");
        });

        // 2. Syntax highlighting (opcional)
        hljs.highlightAll();

        // 3. Ajustar imagens
        contentDiv.querySelectorAll("img").forEach((img) => {
            img.classList.add("mx-auto", "my-4", "rounded-lg");
        });

    } catch (error) {
        console.error("Erro:", error);
        contentDiv.innerHTML = `
        <div class="text-red-400 p-4 text-center">
          ❌ Erro ao carregar documentação.<br>
          <a href="${readmeUrl}" target="_blank" class="underline mt-2 inline-block">
            Acessar README diretamente
          </a>
        </div>
      `;
    }
}

// ==============================================
// Função: Fechar Modal
// ==============================================
function closeDocs() {
    document.getElementById("docsModal").style.display = "none";
    setTimeout(() => document.getElementById("docsContent").innerHTML = "", 300); // Evita exibição de conteúdo desatualizado
}

// ==============================================
// Event Listeners
// ==============================================
// Fechar modal ao clicar fora
window.onclick = function (event) {
    const modal = document.getElementById("docsModal");
    if (event.target === modal) {
        closeDocs();
    }
};

// Fechar com tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDocs();
});

// ==============================================
// Cache de Documentação (Opcional)
// ==============================================
async function cachedLoadDocs(projectCard) {
    const readmeUrl = projectCard.dataset.readmeUrl;
    const cached = localStorage.getItem(readmeUrl);

    if (cached) {
        document.getElementById("docsContent").innerHTML = cached;
        return;
    }

    await loadDocs(projectCard);
    localStorage.setItem(readmeUrl, document.getElementById("docsContent").innerHTML);
}
