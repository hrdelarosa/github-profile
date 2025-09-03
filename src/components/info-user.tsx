interface Props {
  name: string
  bio: string
}

export default function InfoUser({ name, bio }: Props) {
  return (
    <div className="space-y-3 text-oxford-blue dark:text-mischka">
      <h1 className="text-4xl">{name}</h1>
      <p className="text-lg">{bio}</p>
    </div>
  )
}
