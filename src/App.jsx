import Gatinhos from "../src/assets/gatinhos.png"

function App() {
  return (
    <div className="box-border flex flex-col my-10 bg-fuchsia-50">
      <h1 className="block mx-auto font-sans font-bold text-2xl text-center	">Bem-vindo ao meu app de gerar gatinhos fofos!!</h1>
      <p className="block mx-auto font-sans font-medium text-base text-center	mt-5 mb-10">Aqui, você podderá gerar fotos incríveis e super fofas de gatinhos!</p>

      <img className="block mx-auto w-1/4 rounded-full mb-20" src={Gatinhos} alt="gatinhos"/>
      <button className="block mx-auto px-4 py-1  bg-white text-base text-pink-400 font-semibold rounded-full border border-pink-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Gerar gatinho</button>
    </div>
  )
}

export default App
