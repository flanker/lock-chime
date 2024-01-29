class AudioPlayer {
  private audio: HTMLAudioElement

  constructor() {
    this.audio = new Audio()
  }

  play(audioUrl: string) {
    this.audio.src = audioUrl
    this.audio.play().then(r => console.log(r))
  }
}

export default AudioPlayer
