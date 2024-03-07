# Design Patterns

Os design patterns, ou padrões de projeto, são soluções consolidadas para desafios recorrentes que os desenvolvedores enfrentam ao criar software. Eles representam um conjunto de melhores práticas que evoluíram ao longo do tempo através da experiência coletiva da comunidade de desenvolvimento de software.

Existem diversos benefícios em utilizar design patterns. Primeiramente, eles promovem a reutilização de código, permitindo que soluções testadas e comprovadas sejam aplicadas a problemas similares em diferentes partes do sistema. Isso reduz a duplicação de código e facilita a manutenção, uma vez que as alterações em um padrão podem ser aplicadas de forma consistente em todo o código base.

Além disso, os design patterns proporcionam uma linguagem comum para comunicação entre desenvolvedores. Ao usar padrões bem conhecidos, os membros da equipe podem entender rapidamente o propósito e a implementação de diferentes partes do sistema, facilitando a colaboração e a compreensão do código.

## Padrões GOF

Os padrões GOF (Gang of Four) são um conjunto de 23 padrões de design frequentemente referenciados em desenvolvimento de software. Eles foram apresentados no livro "Design Patterns: Elements of Reusable Object-Oriented Software", escrito por Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, conhecidos como "Gang of Four". Esses padrões representam soluções para problemas comuns no design de software e são organizados em três categorias principais: padrões de criação, padrões estruturais e padrões comportamentais.

1. Padrões de Criação: Estes padrões lidam com os mecanismos de criação de objetos, ajudando a encapsular a lógica de criação e tornando o sistema mais flexível em relação à forma como os objetos são instanciados.
   - Exemplos incluem:
      - [Singleton](/singleton.js)
      - [Factory Method](/factory.js)
      - [Abstract Factory](/abstractFactory.js)
      - [Builder](/builder.js)
      - [Prototype](/prototype.js)

2. Padrões Estruturais: Esses padrões se concentram na composição de classes e objetos para formar estruturas maiores. Eles ajudam a garantir que as relações entre os objetos sejam claras e flexíveis.
   - Exemplos comuns são:
      - [Adapter](/adapter.js)
      - [Bridge](/bridge.js)
      - [Composite](/composite.js)
      - [Decorator](/decorator.js)
      - [Facade](/facade.js)
      - [Flyweight](/flyweight.js)
      - [Proxy](/proxy.js)
  
3. Padrões Comportamentais: Esses padrões tratam do comportamento entre objetos e a comunicação entre eles. Eles ajudam a definir como os objetos interagem e respondem a eventos ou mudanças de estado.
   - Exemplos incluem:
      - [Chain of Responsibility](/chainsOfResponsability.js)
      - [Command](/command.js)
      - [Interpreter](/interpreter.js)
      - [Iterator](/iterator.js)
      - [Mediator](/mediator.js)
      - [Memento](/memento.js)
      - [Observer](/observer.js)
      - [State](/state.js)
      - [Strategy](/strategy.js)
      - [Template Method](/templateMethod.js)
      - [Visitor](/visitor.js)

É importante notar que os design patterns não são soluções prontas para todos os problemas. Eles devem ser aplicados de forma criteriosa, levando em consideração o contexto específico do projeto e as necessidades do sistema. Um uso excessivo ou inadequado de padrões pode levar a uma complexidade desnecessária no código.

Em resumo, os design patterns são ferramentas poderosas para os desenvolvedores, oferecendo abordagens testadas e comprovadas para resolver problemas de design de software. Ao entender e aplicar esses padrões de forma adequada, os desenvolvedores podem criar sistemas mais robustos, flexíveis e fáceis de manter.

## Padrões GRASP

Os padrões GRASP (General Responsibility Assignment Software Patterns) são um conjunto de princípios de design orientado a objetos que ajudam os desenvolvedores a atribuir responsabilidades de forma eficaz dentro de seus sistemas. Eles oferecem orientações práticas para ajudar na identificação de classes e objetos apropriados, bem como na distribuição adequada de responsabilidades entre eles. Os padrões GRASP promovem a coesão, o baixo acoplamento e a flexibilidade no design de software.

Aqui estão alguns dos padrões GRASP mais importantes:

1. Controller: Este padrão sugere que objetos que são responsáveis por coordenar e controlar o fluxo de uma aplicação devem ser designados como controladores. Eles geralmente interpretam entradas do usuário e coordenam ações entre os objetos do sistema.

2. Creator: O padrão Criador ajuda a determinar qual classe deve ser responsável por criar instâncias de outras classes. Geralmente, a classe que tem a composição mais forte com uma outra classe é a mais adequada para ser o criador dessa outra classe.

3. Information of Expert: Este padrão orienta que uma responsabilidade deve ser atribuída à classe que possui a informação necessária para executá-la. Isso promove o encapsulamento e a coesão, pois as classes são responsáveis por manipular seus próprios dados.

4. Interface Controller: Este padrão sugere que a lógica de controle para uma interface de usuário deve ser atribuída a um objeto separado, conhecido como controlador de interface. Isso ajuda a separar a lógica de apresentação da lógica de negócios, facilitando a manutenção e o teste.

5. Polymorphism: Este padrão encoraja o uso de métodos polimórficos para delegar responsabilidades a objetos específicos. Isso permite que diferentes objetos executem a mesma operação de maneiras diferentes, promovendo a flexibilidade e a extensibilidade do sistema.

6. Pure Fabrication: O padrão Puro Fabricante sugere que a responsabilidade pela criação de objetos deve ser atribuída a uma classe separada, conhecida como fábrica. Isso ajuda a manter o baixo acoplamento e a garantir que as classes não precisem saber os detalhes de como os objetos são criados.

7. Protect Variations: Este padrão recomenda que a responsabilidade pela manipulação de variações em comportamento polimórfico seja atribuída à classe que contém as variações. Isso ajuda a garantir que as classes permaneçam coesas e que as variações sejam facilmente gerenciadas.

Os padrões GRASP são ferramentas valiosas para orientar o design orientado a objetos e promover práticas de desenvolvimento de software de alta qualidade. Ao aplicar esses padrões de forma adequada, os desenvolvedores podem criar sistemas mais flexíveis, fáceis de entender e de manter.

## DAO (Data Access Object)

O padrão DAO é utilizado para separar a lógica de acesso a dados da lógica de negócios em um sistema. Ele fornece uma abstração entre a camada de acesso a dados e o restante do código, permitindo que as operações de leitura e gravação no banco de dados sejam encapsuladas em objetos dedicados, conhecidos como Data Access Objects. Isso facilita a manutenção, testabilidade e reutilização do código, além de promover a separação de preocupações.

## Front Controller

O Front Controller é um padrão de design de arquitetura de software onde um único componente central é responsável por processar todas as requisições recebidas por um aplicativo web. Ele atua como um ponto de entrada para o sistema, roteando requisições para os controladores apropriados e coordenando o fluxo de execução. O Front Controller simplifica a estrutura do aplicativo, centraliza a lógica de tratamento de requisições e promove a consistência no processamento de solicitações.

## Service Locator

O padrão Service Locator é utilizado para centralizar a localização e obtenção de serviços dentro de um sistema. Ele fornece um mecanismo para registrar e recuperar instâncias de serviços através de um local centralizado, conhecido como Service Locator. Isso permite que os componentes do sistema obtenham acesso aos serviços de forma desacoplada, facilitando a substituição e a configuração dos serviços em tempo de execução. No entanto, o uso excessivo do Service Locator pode introduzir complexidade e acoplamento indesejado no código.
