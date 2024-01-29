import Player from '@/components/HomePage/Player'

const HomePage = () => {
  const chimes = [
    {
      id: 1,
      title: 'Doraemon',
      description: 'Doraemon lock chime',
      imageUrl: '/chimes/images/doraemon.png',
      audioUrl: '/chimes/audio/doraemon.wav',
    },
    {
      id: 2,
      title: 'Super Mario',
      description: 'This is chime 2',
      imageUrl: '/chimes/images/super_mario.jpg',
      audioUrl: '/chimes/audio/super_mario.wav',
    },
    {
      id: 3,
      title: 'Age of Empires',
      description: 'This is chime 3',
      imageUrl: '/chimes/images/age_of_empires.jpg',
      audioUrl: '/chimes/audio/age_of_empires.wav',
    },
    {
      id: 4,
      title: 'Red Alert',
      description: 'This is chime 4',
      imageUrl: '/chimes/images/red_alert.jpeg',
      audioUrl: '/chimes/audio/red_alert.wav',
    },
    {
      id: 5,
      title: 'Street Fighter',
      description: 'This is chime 5',
      imageUrl: '/chimes/images/street-fighter.jpg',
      audioUrl: '/chimes/audio/street-fighter.wav',
    },
  ]

  return (
    <div className="bg-gray-50">
      <header className="mx-auto max-w-6xl p-6">
        <div className="text-xl font-extrabold">LockChime</div>
      </header>
      <main className="mx-auto max-w-6xl">
        <div className="p-10 text-center md:p-20">
          <h1 className="mb-2 text-5xl font-extrabold md:text-6xl">LockChime</h1>
          <p className="text-lg text-gray-600 md:text-xl">The place you can find your lock chime</p>
        </div>
        <div className="grid grid-cols-1 gap-12 p-6 md:grid-cols-2">
          {chimes.map(chime => (
            <div
              key={chime.id}
              className="group/item overflow-hidden rounded-xl border border-gray-100 bg-white"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }}
            >
              <Player audioUrl={chime.audioUrl} imageUrl={chime.imageUrl} />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{chime.title}</h2>
                <p className="text-gray-600">{chime.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 text-center">
          <p>Subscribe for more lock chime</p>
        </div>
      </main>
      <footer className="bg-gray-950 p-6 text-center text-gray-100 md:p-12">CopyLeft @ LockChime</footer>
    </div>
  )
}

export default HomePage
