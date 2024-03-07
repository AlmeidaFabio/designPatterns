//refere-se a criação de objetos duplicados, mantendo o desempenho em mente.
//envolve a implementação de uma interface de protótipo que informa para criar um clone do objeto atual.

// Classe base para representar uma pizza
function Pizza() {
    this.size = "";
    this.crust = "";
    this.toppings = [];
}

// Método para descrever a pizza
Pizza.prototype.describe = function () {
    console.log(`Pizza ${this.size} com massa ${this.crust} e os seguintes ingredientes:`);
    this.toppings.forEach(topping => {
        console.log(`- ${topping}`);
    });
};

// Método para clonar a pizza
Pizza.prototype.clone = function () {
    const clone = new Pizza();
    clone.size = this.size;
    clone.crust = this.crust;
    clone.toppings = [...this.toppings];
    return clone;
};

// Criando a pizza base
const basePizza = new Pizza();
basePizza.size = "Média";
basePizza.crust = "Normal";
basePizza.toppings = ["Queijo"];

// Clonando a pizza base para criar uma pizza personalizada
const myPizza = basePizza.clone();
myPizza.toppings.push("Pepperoni");
myPizza.toppings.push("Cogumelos");

// Exibindo os detalhes da pizza
myPizza.describe();

//Neste exemplo, definimos a classe Pizza como uma função construtora e adicionamos métodos à sua propriedade prototype. O método clone() nos permite criar cópias da pizza base, e então podemos personalizar essas cópias adicionando novos ingredientes. Isso nos permite criar pizzas personalizadas a partir de uma pizza base compartilhando a mesma estrutura e evitando a necessidade de recriar toda a estrutura da pizza cada vez que queremos uma nova.