import './App.css'
import Hero from './components/hero'
import HeaderUser from './components/header-user'
import useUser from './hooks/useUser'
import InfoUser from './components/info-user'
import RepositoryContainer from './components/repository-container'

function App() {
  const { user, repositories, getAllRepositories } = useUser()

  return (
    <>
      <Hero />

      <main className="max-w-5xl mx-5 md:mx-14 xl:max-w-6xl xl:mx-auto xl:container pb-10 z-10 flex flex-col gap-8">
        {user && (
          <>
            <HeaderUser {...user} />
            <InfoUser name={user?.name} bio={user?.bio} />
            <RepositoryContainer />

            {repositories.length === 4 && (
              <div className="flex justify-center mt-3">
                <span
                  className="text-foreground dark:text-mischka font-normal hover:text-oxford-blue dark:hover:text-white transition-colors cursor-pointer"
                  onClick={getAllRepositories}
                >
                  View all repositories
                </span>
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default App
