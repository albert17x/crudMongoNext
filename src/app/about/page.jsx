import Link from "next/link"

const AboutPage = () => {
    return (
        <div>
            <h1 className=" text-center text-3xl font-bold mb-4 ">Construccion de un CRUD-Mongo </h1>
            <Link className=" text-2xl" href="https://www.youtube.com/watch?v=CkiuF2wsPRg&t=430">Tutorial 🍄 FaztCode</Link>
            <p className=" mt-4  bg-green-400 p-4">
            CREAR ESTRUCTURA DE CARPETA:
            <ol className=" p-2">
                <li className=" p-1">components:  Navbar-Footer-Header</li>
                <li className=" p-1">models: Esquemas de las bases de datos MongoDb</li>
                <li className=" p-1">utils: Coneccion de la base de dato </li>
            </ol>

            </p>

            <p className=" mt-4 bg-yellow-400 p-4">
            CREAR RUTAS DE BACKEND:
            <ol className=" p-2">
                <li className=" p-1">Carpeta api</li>
                <li className=" ml-5 p-1">Carpeta agenda - Carpeta [id] route.js  PUT() - DELETE() - GET()</li>
                <li className=" ml-3 p-1">route.js POST()  -  GET()  </li>
                <li className=" ml-3 p-1">Usar NextResponse </li>

            </ol>

            </p>
        </div>
    )
}
export default AboutPage