import ModeToggle from './mode-toggle'
import SearchingContainer from './searching-container'
import useUser from '../hooks/useUser'
import SelectedUser from './selected-use'

export default function Hero() {
  const { userSelected, user } = useUser()

  return (
    <div className="w-full h-60 grid place-items-center relative bg-cover bg-center bg-[url('/hero-image-github-profile-sm.jpg')] md:bg-[url('/hero-image-github-profile.jpg')]">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-48 md:top-5 right-5 z-10">
        <ModeToggle />
      </div>

      <div className="relative flex flex-col gap-3 max-w-xs md:max-w-md w-full z-10 dark -mt-16 md:mt-0">
        <SearchingContainer />

        <div className="absolute top-14 flex flex-col gap-2.5 max-w-md w-full">
          <SelectedUser
            userSelected={userSelected?.login}
            user={user?.login}
            avatar_url={userSelected?.avatar_url}
            name={userSelected?.name}
            bio={userSelected?.bio}
          />
        </div>
      </div>
    </div>
  )
}
