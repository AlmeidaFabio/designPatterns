//é usado onde precisamos tratar um grupo de objetos de maneira semelhante a um único objeto.
//o padrão compõe objetos em termo de uma estrutura em árvore para representar parte e toda hierarquia.
//cria uma classe que contém um grupo de seus próprios objetos. Está clsse fornece maneiras de modificar seu grupo dos mesmos objetos.

// Interface para todos os componentes da árvore
class FileSystemComponent {
    getSize() {
        throw new Error("Método getSize() não implementado");
    }
}

// Implementação de um arquivo
class File extends FileSystemComponent {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

// Implementação de uma pasta
class Folder extends FileSystemComponent {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getSize() {
        let totalSize = 0;
        this.children.forEach(child => {
            totalSize += child.getSize();
        });
        return totalSize;
    }
}

// Criando uma estrutura de arquivos
const rootFolder = new Folder("Root");

const folder1 = new Folder("Folder 1");
folder1.add(new File("File 1", 100));
folder1.add(new File("File 2", 200));
rootFolder.add(folder1);

const folder2 = new Folder("Folder 2");
folder2.add(new File("File 3", 150));
folder2.add(new File("File 4", 250));
rootFolder.add(folder2);

// Calculando o tamanho total da estrutura
const totalSize = rootFolder.getSize();
console.log("Tamanho total da estrutura:", totalSize);


//Neste exemplo, temos a classe abstrata FileSystemComponent que define a interface comum para todos os componentes da árvore de arquivos. As classes File e Folder implementam essa interface. A classe Folder também mantém uma lista de seus componentes filhos.

//Podemos construir uma estrutura de árvore de arquivos adicionando arquivos e pastas às pastas. A classe Folder implementa um método getSize() que calcula o tamanho total da pasta somando os tamanhos de todos os seus componentes filhos, independentemente se eles são arquivos ou outras pastas.

//Ao chamar o método getSize() na pasta raiz, obtemos o tamanho total de toda a estrutura da árvore de arquivos. Este é um exemplo do padrão Composite, onde tratamos tanto arquivos quanto pastas da mesma maneira ao calcular o tamanho total da estrutura.