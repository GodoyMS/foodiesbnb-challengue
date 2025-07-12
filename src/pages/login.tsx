import { LoginForm } from "@/components/login/LoginForm";

import { ChefHat, Sparkles } from "lucide-react"

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
          >
            <div className="bg-gradient-to-br from-red-500 to-primary text-white flex size-8 items-center justify-center rounded-xl shadow-lg">
              <ChefHat className="size-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-primary bg-clip-text text-transparent">
              FoodiesBNB
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="font-medium text-primary hover:underline">
            Empieza ahora
          </a>
        </div>
      </div>

      <div className="relative hidden lg:block overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Restaurant interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

        <div className="absolute top-8 right-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <div className="space-y-6 text-white">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight">
                Obten grandes beneficios
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  como un foodie
                </span>
              </h2>
              <p className="text-lg text-white/90 max-w-md leading-relaxed">
                Conviértete en un Foodie de verdad aunque no seas un "influencer reconocido".

              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
               🧾 Explora tus visitas anteriores
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                🍽️ Reserva experiencias gastronómicas
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  📲 Programa de referidos
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Restaurantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Visitas diarias</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-white/80">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 right-12 hidden xl:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold text-sm">✓</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Visita #1247</div>
                <div className="text-sm text-gray-600">Table 8 • 2 items</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Agendado • $24.50</div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-8 hidden xl:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🍕</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Margherita Pizza</div>
                <div className="text-sm text-gray-600">Más popular hoy</div>
                <div className="text-xs text-orange-600 font-medium">+23% orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
