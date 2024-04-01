const traeDatos = async () => {
    try {
        const respuestax = await fetch(process.env.UXI, {
            cache: "no-store"
        })
        return respuestax.json()
    } catch (error) {
        console.log(error)
    }
}



const EjercicioMap = async() => {
    const {data} = await traeDatos()
    return (
        <div>
            {data.map((item) =>(
                <div key={item._id} className=" p-4">
                <div>
                    <p>ID: {item._id}</p>
                    <h2>Nombre: {item.name}</h2>
                    <h2>Apellido: {item.lastname}</h2>
                    <p>Email: {item.email}</p>
                </div>

                </div>
            ))}
        </div>
    )
  
}


export default EjercicioMap