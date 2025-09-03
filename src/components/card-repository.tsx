import { GitFork, ShieldEllipsis, Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from './ui/card'
import TextIcon from './ui/text-icon'
import type { License } from '@/types/users-type'
import { formatDate } from '@/utils/formatDate'

interface Props {
  name: string
  description: string
  license: License
  forks_count: number
  stargazers_count: number
  updated_at: Date
}

export default function CardRepository({
  name,
  description,
  license,
  forks_count,
  stargazers_count,
  updated_at,
}: Props) {
  return (
    <Card className="border-0 dark:bg-gradient-to-r from-mirage to-port-gore">
      <CardContent className="flex flex-col gap-2.5">
        <h2 className="text-xl">{name}</h2>

        <p className="text-sm text-oxford-blue dark:text-mischka">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center gap-8 text-oxford-blue dark:text-mischka">
        <div className="flex items-center gap-3.5">
          {license && (
            <TextIcon label={license.spdx_id}>
              <ShieldEllipsis className="size-5" />
            </TextIcon>
          )}
          <TextIcon number={forks_count}>
            <GitFork className="size-5" />
          </TextIcon>
          <TextIcon number={stargazers_count}>
            <Star className="size-5" />
          </TextIcon>
        </div>

        <p className="text-xs">update {formatDate(updated_at)} ago</p>
      </CardFooter>
    </Card>
  )
}
