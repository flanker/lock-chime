'use client'

import PlayerIcon from '@/components/HomePage/PlayerIcon'

import type { Chime } from '@/components/HomePage/types'
import type AudioPlayer from '@/components/HomePage/AudioPlayer'

const ChimeWIthPlayer = ({ chime, player }: { chime: Chime; player: AudioPlayer }) => {
  const playerClicked = (audioUrl: string) => {
    player.play(audioUrl)
  }

  return (
    <div
      key={chime.id}
      className="group/item overflow-hidden rounded-xl border border-gray-100 bg-white"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }}
    >
      <div className="relative cursor-pointer" onClick={e => playerClicked(chime.audioUrl)}>
        <div
          className="h-72 bg-cover bg-center transition-all group-hover/item:blur"
          style={{ backgroundImage: `url(${chime.imageUrl})` }}
        ></div>
        <div className="absolute left-0 top-0 flex size-full items-center justify-center transition-all group-hover/item:flex md:hidden">
          <div className="w-1/3">
            <PlayerIcon />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold">{chime.title}</h2>
        <p className="text-gray-600">{chime.description}</p>
      </div>
    </div>
  )
}

export default ChimeWIthPlayer
