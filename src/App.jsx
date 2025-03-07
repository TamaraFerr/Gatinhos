import Gatinhos from "../src/assets/gatinhos.png"

function App() {
  return (
    <div>
      <h1>Bem-vindo ao meu app de gerar gatinhos fofos!!</h1>
      <p>Aqui, você podderá gerar fotos incríveis e super fofas de gatinhos!</p>

      <img className="size-100" src={Gatinhos} alt="gatinhos"/>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Gerar gato</button>
    </div>
  )
}

export default App
