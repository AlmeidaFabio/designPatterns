//envolve uma única classe responsável por criar um objeto, assegurando que apenas um objeto será criado.
//fornece uma maneira de acessar seu único objeto diretamente sem a necessidade de instanciar o objeto da classe.

class AppConfig {
    constructor() {
        // As configurações padrão do aplicativo
        this.apiKey = "";
        this.apiUrl = "https://api.example.com";
        this.debugMode = false;
    }

    // Método para inicializar a instância única
    static getInstance() {
        // Se a instância única ainda não existe, crie-a
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }

        return AppConfig.instance;
    }

    // Métodos para acessar e modificar as configurações
    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }

    getApiKey() {
        return this.apiKey;
    }

    setApiUrl(apiUrl) {
        this.apiUrl = apiUrl;
    }

    getApiUrl() {
        return this.apiUrl;
    }

    setDebugMode(debugMode) {
        this.debugMode = debugMode;
    }

    getDebugMode() {
        return this.debugMode;
    }
}

// Uso do Singleton para acessar a instância única
const appConfig1 = AppConfig.getInstance();
const appConfig2 = AppConfig.getInstance();

// Modificando as configurações
appConfig1.setApiKey("myApiKey");
appConfig2.setApiUrl("https://api.example.org");
appConfig1.setDebugMode(true);

// Verificando se ambas as instâncias têm as mesmas configurações
console.log(appConfig1.getApiKey());    // Saída: myApiKey
console.log(appConfig2.getApiKey());    // Saída: myApiKey

console.log(appConfig1.getApiUrl());    // Saída: https://api.example.org
console.log(appConfig2.getApiUrl());    // Saída: https://api.example.org

console.log(appConfig1.getDebugMode()); // Saída: true
console.log(appConfig2.getDebugMode()); // Saída: true

// Verificando se as instâncias são realmente as mesmas
console.log(appConfig1 === appConfig2); // Saída: true

//Neste exemplo, a classe AppConfig é um Singleton que contém as configurações do aplicativo. O método getInstance garante que apenas uma instância dessa classe seja criada durante o ciclo de vida da aplicação. Isso permite acessar e modificar as configurações de qualquer lugar do código, garantindo que todas as modificações sejam feitas na mesma instância.