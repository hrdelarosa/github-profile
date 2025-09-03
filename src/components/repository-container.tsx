import useUser from '@/hooks/useUser'
import CardRepository from './card-repository'

export default function RepositoryContainer() {
  const { repositories } = useUser()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repositories.map((repo) => (
        <CardRepository key={repo.id} {...repo} />
      ))}
    </div>
  )
}
