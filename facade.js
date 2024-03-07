//oculta as complexidades do sistema e fornece uma inteface para o cliente a qual o cliente pode acessar o sistema.
//envolve uma única classe que fornece métodos simplificados exigidos pelo cliente e delega chamadas para métodos de classes de sistema existentes.

// Classes complexas do sistema de áudio

class AudioPlayer {
    play() {
        console.log("Reproduzindo áudio");
    }

    pause() {
        console.log("Áudio pausado");
    }

    stop() {
        console.log("Áudio parado");
    }
}

class AudioLibrary {
    loadAudio(audioFile) {
        console.log(`Carregando áudio: ${audioFile}`);
    }

    releaseAudio(audioFile) {
        console.log(`Libertando áudio: ${audioFile}`);
    }
}

class VolumeControl {
    setVolume(volume) {
        console.log(`Ajustando volume para: ${volume}`);
    }
}

// Facade para simplificar a interface para o sistema de áudio

class AudioFacade {
    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.audioLibrary = new AudioLibrary();
        this.volumeControl = new VolumeControl();
    }

    playAudio(audioFile) {
        this.audioLibrary.loadAudio(audioFile);
        this.audioPlayer.play();
    }

    pauseAudio() {
        this.audioPlayer.pause();
    }

    stopAudio() {
        this.audioPlayer.stop();
    }

    releaseAudio(audioFile) {
        this.audioLibrary.releaseAudio(audioFile);
    }

    setVolume(volume) {
        this.volumeControl.setVolume(volume);
    }
}

// Utilizando o Facade para interagir com o sistema de áudio de forma simplificada

const audioFacade = new AudioFacade();

audioFacade.playAudio("music.mp3");
audioFacade.pauseAudio();
audioFacade.stopAudio();
audioFacade.releaseAudio("music.mp3");
audioFacade.setVolume(50);


//Neste exemplo, temos várias classes que representam diferentes partes do sistema de áudio, como AudioPlayer, AudioLibrary e VolumeControl. O Facade, representado pela classe AudioFacade, fornece uma interface simplificada para interagir com essas classes complexas.

//O Facade encapsula a complexidade do sistema de áudio e fornece métodos simples como playAudio(), pauseAudio(), stopAudio(), releaseAudio() e setVolume(), que internamente lidam com as operações necessárias no sistema de áudio.

//Isso permite que os clientes usem o sistema de áudio sem precisar entender a complexidade interna das várias classes e métodos envolvidos. O Facade fornece uma interface limpa e fácil de usar para realizar operações comuns no sistema de áudio.