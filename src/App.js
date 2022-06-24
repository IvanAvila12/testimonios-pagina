import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen los Testimonios</h1>

        <Testimonio
          nombre="Carlos Angeles"
          pais="México"
          imagen="im1"
          alias="uno"
          cargo="Ingeniera de Sofware"
          empresa="Spotify"
          testimonio="Es una empresa muy inmpresionante en la cual puedes aprender y desarrollar bastante"
        />

        <Testimonio
          nombre="Shawn Wang"
          pais="singapur"
          imagen="im2"
          alias="dos"
          cargo="Ingeniero de software"
          empresa="Amazon"
          testimonio="Es un entorno muy grande y con muhcas posisbilidades para desarrollarte como persona y profesionalmente"
        />

        <Testimonio
          nombre="Sarah chima"
          pais="Dinamarca"
          imagen="im3"
          alias="tres"
          cargo="Ingeniera en Software"
          empresa="Chat Desk"
          testimonio="Es una empresa en la cuál aprendí y desarrollé mis habilidades para gestionar y desarrollar software"
        />

      </div>
    </div>
  );
}

export default App;
