import Gatinhos from "../src/assets/gatinhos.png"

function App() {
  return (
    <div>
      <h1>Bem-vindo ao meu app de gerar gatinhos fofos!!</h1>
      <p>Aqui, você podderá gerar fotos incríveis e super fofas de gatinhos!</p>

      <img src={Gatinhos} alt="gatinhos"/>
      <button class="bg-sky-500 hover:bg-sky-700">Gerar gato</button>
    </div>
  )
}

export default App
