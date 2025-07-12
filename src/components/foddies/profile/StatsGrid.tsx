import { Card, CardContent } from "@/components/ui/card"
import { UserProfile } from "@/lib/types/user-profile"
import { MenuIcon as Restaurant, Star, Users, UserPlus, Camera } from "lucide-react"

interface StatsGridProps {
  stats: UserProfile["stats"]
}

export function StatsGrid({ stats }: StatsGridProps) {
  const statItems = [
    {
      label: "Restaurants Visited",
      value: stats.restaurantsVisited,
      icon: Restaurant,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Reviews Written",
      value: stats.reviewsWritten,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      label: "Followers",
      value: stats.followers.toLocaleString(),
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Following",
      value: stats.following,
      icon: UserPlus,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      label: "Photos Shared",
      value: stats.photosShared,
      icon: Camera,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {statItems.map((item) => (
        <Card key={item.label} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.bgColor} mb-3`}>
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
