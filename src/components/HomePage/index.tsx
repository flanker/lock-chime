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
      <header className="p-6 max-w-6xl mx-auto">
        <div className="page-logo font-extrabold text-xl">LockChime</div>
      </header>
      <main className="max-w-6xl mx-auto">
        <div className="page-title-and-description p-10 md:p-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">LockChime</h1>
          <p className="text-lg md:text-xl text-gray-600">The place you can find your lock chime</p>
        </div>
        <div className="chime-items p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {chimes.map(chime => (
            <div
              key={chime.id}
              className="chime-item group/item border bg-white border-gray-100 rounded-xl overflow-hidden"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }}
            >
              <Player audioUrl={chime.audioUrl} imageUrl={chime.imageUrl} />
              <div className="chime-title-and-description p-6">
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
      <footer className="p-6 md:p-12 bg-gray-950 text-gray-100 text-center">CopyLeft @ LockChime</footer>
    </div>
  )
}

export default HomePage
