//cria um objeto complexo usando objetos simples e usando uma aboradagem passo a passo.

// Classe para representar uma pizza
class Pizza {
    constructor() {
        this.size = "";
        this.crust = "";
        this.toppings = [];
    }

    // Método para adicionar tamanho à pizza
    setSize(size) {
        this.size = size;
    }

    // Método para adicionar tipo de massa à pizza
    setCrust(crust) {
        this.crust = crust;
    }

    // Método para adicionar ingredientes à pizza
    addTopping(topping) {
        this.toppings.push(topping);
    }

    // Método para exibir os detalhes da pizza
    describe() {
        console.log(`Pizza ${this.size} com massa ${this.crust} e os seguintes ingredientes:`);
        this.toppings.forEach(topping => {
            console.log(`- ${topping}`);
        });
    }
}

// Classe Builder para construir a pizza passo a passo
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    // Método para definir o tamanho da pizza
    setSize(size) {
        this.pizza.setSize(size);
        return this;
    }

    // Método para definir o tipo de massa da pizza
    setCrust(crust) {
        this.pizza.setCrust(crust);
        return this;
    }

    // Método para adicionar ingredientes à pizza
    addTopping(topping) {
        this.pizza.addTopping(topping);
        return this;
    }

    // Método para finalizar a construção da pizza
    build() {
        return this.pizza;
    }
}

// Uso do Builder para construir uma pizza personalizada
const pizzaBuilder = new PizzaBuilder();
const myPizza = pizzaBuilder
    .setSize("Grande")
    .setCrust("Fina")
    .addTopping("Queijo")
    .addTopping("Pepperoni")
    .addTopping("Cogumelos")
    .build();

// Exibindo os detalhes da pizza
myPizza.describe();

//Neste exemplo, criamos a classe Pizza que representa uma pizza com tamanho, tipo de massa e ingredientes. Em seguida, criamos a classe PizzaBuilder que nos permite construir uma pizza passo a passo, adicionando tamanho, tipo de massa e ingredientes antes de finalizá-la com o método build(). Isso nos dá flexibilidade para construir pizzas personalizadas com diferentes tamanhos, tipos de massa e ingredientes.