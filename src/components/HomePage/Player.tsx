'use client'

import PlayerIcon from '@/components/HomePage/PlayerIcon'

const Player = ({ imageUrl, audioUrl }: { imageUrl: string; audioUrl: string }) => {
  const playerClicked = (audioUrl: string) => {
    const audio = new Audio(audioUrl)
    audio.play().then(r => console.log(r))
  }

  return (
    <div className="relative cursor-pointer" onClick={e => playerClicked(audioUrl)}>
      <div
        className="h-72 bg-cover bg-center transition-all group-hover/item:blur"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center transition-all group-hover/item:flex md:hidden">
        <div className="w-1/3">
          <PlayerIcon />
        </div>
      </div>
    </div>
  )
}

export default Player
