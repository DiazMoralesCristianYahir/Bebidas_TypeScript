
export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tailwind con React + TSX funcionando 🚀
        </h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
          Haz clic aquí
        </button>
      </div>
    </div>
  )
}
