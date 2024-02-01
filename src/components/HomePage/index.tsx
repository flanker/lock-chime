import ChimesWithPlayer from '@/components/HomePage/ChimesWithPlayer'

const HomePage = () => {
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
          <ChimesWithPlayer />
        </div>
        <div className="flex justify-center gap-4 p-16 text-center">
          <input
            type="text"
            placeholder="Subscribe for more lock chime"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </main>
      <footer className="footer footer-center bg-neutral p-10 text-neutral-content md:p-12">
        CopyLeft @ LockChime
      </footer>
    </div>
  )
}

export default HomePage
