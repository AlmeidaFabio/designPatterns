//é usado quando precisamos separar uma abstração de sua implementação para que as duas possam variar independentemente.
//envolve uma interface que atua como uma ponte que torna a funcionalidade de classes concretas independentes das classes do implementador de interface.
//ambos os tipos de classes podem ser alterados estruturalmente sem se afetarem.

// Abstração para renderizar conteúdo
class Renderer {
    constructor(platform) {
        this.platform = platform;
    }

    render(content) {
        console.log(`Renderizando ${content} na plataforma ${this.platform}`);
    }
}

// Implementação de uma plataforma de renderização: Web
class WebRenderer {
    render(content) {
        console.log(`Renderizando ${content} na Web`);
    }
}

// Implementação de uma plataforma de renderização: Mobile
class MobileRenderer {
    render(content) {
        console.log(`Renderizando ${content} no Mobile`);
    }
}

// Abstração para o tipo de conteúdo
class Content {
    constructor(renderer) {
        this.renderer = renderer;
    }

    display() {
        console.log(`Exibindo conteúdo`);
    }
}

// Implementação de um tipo de conteúdo: Texto
class TextContent extends Content {
    display() {
        super.display();
        this.renderer.render("texto");
    }
}

// Implementação de um tipo de conteúdo: Imagem
class ImageContent extends Content {
    display() {
        super.display();
        this.renderer.render("imagem");
    }
}

// Testando o padrão Bridge
const webRenderer = new Renderer(new WebRenderer());
const mobileRenderer = new Renderer(new MobileRenderer());

const textContent = new TextContent(webRenderer);
textContent.display(); // Exibindo conteúdo e renderizando texto na Web

const imageContent = new ImageContent(mobileRenderer);
imageContent.display(); // Exibindo conteúdo e renderizando imagem no Mobile


//Neste exemplo, a classe Renderer é a abstração que é usada para renderizar o conteúdo em diferentes plataformas (Web e Mobile). As classes WebRenderer e MobileRenderer são implementações específicas de plataformas de renderização. A classe Content é a abstração que representa o tipo de conteúdo (texto e imagem), e as classes TextContent e ImageContent são implementações específicas desse tipo de conteúdo. O padrão Bridge nos permite combinar as implementações de plataforma e conteúdo de forma independente, permitindo-nos estender e modificar cada uma separadamente.