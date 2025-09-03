import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'

interface Props {
  avatar_url: string
  name: string
  followers: number
  following: number
  location: string
  type: string
}

export default function HeaderUser({
  avatar_url,
  name,
  followers,
  following,
  location,
  type,
}: Props) {
  return (
    <header className="flex flex-wrap flex-col md:flex-row items-start md:items-end gap-8 -mt-10">
      <div className="bg-white dark:bg-big-stone px-2 pt-2 z-20 rounded-t-2xl">
        <Avatar className="size-28 rounded-xl">
          <AvatarImage src={avatar_url} alt={`User avatar ${name}`} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-2.5 text-mischka mb-3">
        <Card className="py-4 border-0 dark:bg-mirage">
          <CardContent className="flex items-center justify-center gap-3 px-5">
            <p>Followers</p>
            <Separator
              orientation="vertical"
              className="bg-oxford-blue h-full"
            />
            <p>{followers}</p>
          </CardContent>
        </Card>

        <Card className="py-4 border-0 dark:bg-mirage">
          <CardContent className="flex items-center justify-center gap-3 px-5">
            <p>Following</p>
            <Separator orientation="vertical" className="bg-oxford-blue" />
            <p>{following}</p>
          </CardContent>
        </Card>

        <Card className="py-4 border-0 dark:bg-mirage">
          <CardContent className="flex items-center justify-center gap-3 px-5">
            <p>Location</p>
            <Separator orientation="vertical" className="bg-oxford-blue" />
            <p>{location}</p>
          </CardContent>
        </Card>

        <Card className="py-4 border-0 dark:bg-mirage block md:hidden xl:block">
          <CardContent className="flex items-center justify-center gap-3 px-5">
            <p>Type</p>
            <Separator orientation="vertical" className="bg-oxford-blue" />
            <p>{type}</p>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
