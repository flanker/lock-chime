'use client'

import PlayerIcon from '@/components/HomePage/PlayerIcon'

const Player = ({ imageUrl, audioUrl }: { imageUrl: string; audioUrl: string }) => {
  const playerClicked = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play().then(r => console.log(r))
  }

  return (
    <div className="chime-image-and-player relative cursor-pointer " onClick={e => playerClicked(audioUrl)}>
      <div
        className="chime-image h-72 bg-cover bg-center group-hover/item:blur transition-all"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="chime-player flex md:hidden group-hover/item:flex absolute top-0 left-0 w-full h-full items-center justify-center transition-all">
        <div className="w-1/3">
          <PlayerIcon />
        </div>
      </div>
    </div>
  )
}

export default Player
