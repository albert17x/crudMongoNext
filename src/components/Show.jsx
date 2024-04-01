import Link from "next/link";
import BtnDelete from "./BtnDelete";
// Conectarnos a nuestra base de datos para mostrar los registros
const getData = async () => {
    try {
        const response = await fetch(process.env.URI, { cache: "no-store" })
        return response.json()
    } catch (error) {
        console.log("error: ", error)
    }
};
// const {data} = await getData();
// console.log(data)

//--------------------------------------
const Show = async () => {
    const { data } = await getData()
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((elemento) => (
                <div key={elemento._id}  className=" p-3 shadow-lg shadow-indigo-800/50  my-4 flex justify-between gap-4 items-start">
                    <div>
                        <p className=" text-slate-500">_id: {elemento._id}</p>
                        <h2 className=" font-bold text-2xl">Nombre: {elemento.name}</h2>
                        <p>Edad: {elemento.age}</p>
                    </div>

                    {/* Botones de accion */}
                    <div className=" flex mt-4 space-x-3 md:mt-6">
                        <Link href={`/edit/${elemento._id}`} className=" inline-flex items-center  hover:bg-violet-600  focus:ring-4 px-4 py-2 text-sm text-center font-medium bg-indigo-500 rounded-lg" >Update</Link>
                        <BtnDelete id={elemento._id}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Show

// return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );