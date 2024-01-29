'use client'

import { useRef } from 'react'

import ChimesData from '@/components/HomePage/data'
import ChimeWIthPlayer from '@/components/HomePage/ChimeWIthPlayer'
import AudioPlayer from '@/components/HomePage/AudioPlayer'

const ChimesWithPlayer = () => {
  const player = useRef<AudioPlayer | undefined>(typeof Audio !== 'undefined' ? new AudioPlayer() : undefined)

  return ChimesData.map(chime => <ChimeWIthPlayer key={chime.id} chime={chime} player={player.current} />)
}

export default ChimesWithPlayer
