import React, { useState } from "react"
import { Link } from "react-router-dom"
//Icons
import { RiUser3Fill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri"

const Login = () =>{
  
  const [showPassword, setShowPassword] = useState(false)

  return(
    <div className="bg-secondary p-8 rounded-xl shadow-2xl w-[450px]">
      <h1 className="text-3xl text-center uppercase tracking-[5px] text-white mb-4">Iniciar Sesión</h1>
      <form className="mb-4">
        <div className="flex items-center justify-center gap-2 w-full mb-4 text-white font-bold text-2xl">
          <img 
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-5 h-5"
          />
          Celula - ISP
        </div>
        <div className="relative mb-4">
          <RiUser3Fill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input 
            type="email"
            className="py-3 pl-8 pr-4 bg-fourth w-full outline-none rounded-lg border-2 border-secondary focus:border-2 focus:border-third"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative mb-4">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input 
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 pr-4 bg-fourth w-full outline-none rounded-lg border-2 border-secondary focus:border-2 focus:border-third"
            placeholder="Contraseña"
          />
          { showPassword ? (
            <RiEyeOffFill 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" 
            />
          ) : (
            <RiEyeFill 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" 
            />
          )}
        </div>
        <div>
          <button type="submit" className="bg-third w-full py-3 px-4 rounded-lg border-2 border-secondary hover:font-semibold hover:text-white transition-colors hover:border-2 hover:border-primary">
            Ingresar
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 items-center text-fourth">
        <Link to="/auth/olvide-password" className="hover:text-white transition-colors">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  )
}

export default Login