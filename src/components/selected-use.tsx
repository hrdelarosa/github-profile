import useUser from '@/hooks/useUser'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent } from './ui/card'

interface Props {
  userSelected?: string
  user?: string
  avatar_url?: string
  name?: string
  bio?: string
}

export default function SelectedUser({
  userSelected,
  user,
  avatar_url,
  name,
  bio,
}: Props) {
  const { changeUser } = useUser()

  return (
    <>
      {userSelected !== user && (
        <Card
          className="py-2 bg-mirage hover:bg-secondary transition-colors cursor-pointer"
          onClick={() => changeUser()}
        >
          <CardContent className="px-2 flex gap-2 items-center">
            <Avatar className="rounded-md size-16 md:size-[74px]">
              <AvatarImage src={avatar_url} alt={`User avatar ${name}`} />
              <AvatarFallback>{name?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div>
              <span className="font-semibold">{name}</span>
              <p className="text-xs text-gray-400">{bio}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
