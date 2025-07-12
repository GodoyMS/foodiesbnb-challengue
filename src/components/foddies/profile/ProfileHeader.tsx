import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Edit, Settings } from "lucide-react"
import { UserProfile } from "@/lib/types/user-profile"

interface ProfileHeaderProps {
  profile: UserProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const memberSince = new Date(profile.joinedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32">
            <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-lg text-gray-600">@{profile.username}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{profile.bio}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Member since {memberSince}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.preferences.favoriteCuisines.slice(0, 5).map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="bg-orange-100 text-orange-800">
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
