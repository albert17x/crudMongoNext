import EjercicioLuis from "@/components/EjercicioLuis"
import EjercicioMap from "@/components/EjercicioMap"

const ExemploPage = () => {
  return (
    <div>
    <h1 className=" text-center text-3xl">Pagina de Ejemplo</h1>
    <h2 className=" font-bold mb-4">Components: EjercicioLuis</h2>
        {/* <EjercicioMap/> */}
        <EjercicioLuis/>
    </div>
  )
}
export default ExemploPage