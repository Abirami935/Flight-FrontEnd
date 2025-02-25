import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
       
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md border border-white/20">
                <div className="text-center space-y-6">
                    <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight">
                        SkyVista Airways
                    </h1>
                    <p className="text-xl text-white/80 font-light">
                        Choose your journey path
                    </p>
                    <div className="space-y-4 mt-8">
                        <Link to="/login" className="block">
                            <button className="w-full px-6 py-4 text-lg font-medium bg-white text-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                                Passenger Portal
                            </button>
                        </Link>
                        <Link to="/admin/login" className="block">
                            <button className="w-full px-6 py-4 text-lg font-medium bg-indigo-900 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                                Admin Dashboard
                            </button>
                        </Link>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-white/70 flex items-center justify-center gap-2 hover:text-white transition-colors">
                            <span>Need assistance?</span>
                            <a href="#" className="font-medium underline underline-offset-2">Contact Support</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage