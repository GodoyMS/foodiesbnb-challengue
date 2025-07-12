export interface UserProfile {
  id: string
  name: string
  username: string
  email: string
  avatar: string
  bio: string
  location: string
  joinedDate: string
  stats: {
    restaurantsVisited: number
    reviewsWritten: number
    followers: number
    following: number
    photosShared: number
  }
  preferences: {
    favoriteCuisines: string[]
    dietaryRestrictions: string[]
    priceRange: string[]
    diningStyle: string[]
  }
  achievements: Achievement[]
  recentVisits: RestaurantVisit[]
  wishlist: WishlistItem[]
  foodPhotos: FoodPhoto[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedDate: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

export interface RestaurantVisit {
  id: string
  restaurantName: string
  cuisine: string
  rating: number
  visitDate: string
  review?: string
  photos: string[]
}

export interface WishlistItem {
  id: string
  restaurantName: string
  cuisine: string
  location: string
  image: string
  addedDate: string
}

export interface FoodPhoto {
  id: string
  image: string
  restaurantName: string
  dishName: string
  uploadDate: string
  likes: number
}
