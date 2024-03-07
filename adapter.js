//funciona como uma ponte entre duas interfaces imcompátiveis.
//envolve uma classe responsável por unir funcionalidades de interfaces independentes.

// Interface padrão para um reprodutor de áudio
class AudioPlayer {
    playAudio(filename) {
        throw new Error("Método playAudio() não implementado");
    }
}

// Classe para reproduzir arquivos MP3
class Mp3Player {
    playMp3(filename) {
        console.log(`Reproduzindo MP3: ${filename}`);
    }
}

// Classe para reproduzir arquivos WAV
class WavPlayer {
    playWav(filename) {
        console.log(`Reproduzindo WAV: ${filename}`);
    }
}

// Adaptador para reproduzir arquivos MP3 usando a interface padrão de AudioPlayer
class Mp3PlayerAdapter extends AudioPlayer {
    constructor(mp3Player) {
        super();
        this.mp3Player = mp3Player;
    }

    playAudio(filename) {
        this.mp3Player.playMp3(filename);
    }
}

// Criando instâncias dos players de MP3 e WAV
const mp3Player = new Mp3Player();
const wavPlayer = new WavPlayer();

// Utilizando o adaptador para reproduzir um arquivo MP3
const audioPlayer = new Mp3PlayerAdapter(mp3Player);
audioPlayer.playAudio("musica.mp3");

// Utilizando o adaptador para reproduzir um arquivo WAV
const audioPlayer2 = new Mp3PlayerAdapter(wavPlayer);
audioPlayer2.playAudio("som.wav");

//Neste exemplo, temos duas classes diferentes Mp3Player e WavPlayer, cada uma com seu próprio método para reproduzir áudio. Em seguida, criamos um adaptador Mp3PlayerAdapter que implementa a interface padrão AudioPlayer e utiliza a classe Mp3Player para reproduzir arquivos MP3. Isso permite que ambas as classes, Mp3Player e WavPlayer, sejam utilizadas através da mesma interface AudioPlayer, simplificando o código cliente.