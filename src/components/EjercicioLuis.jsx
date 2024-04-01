const takeDatos = async()=> {
    try {
        const respuesta = await fetch(process.env.UXI, {
            cache:"no-store"
        })
        return respuesta.json()
    } catch (error) {
        console.log(error);        
    }
}

const EjercicioLuis = async () => {
    const {data} = await takeDatos();
    
    return (
        <div>
            {data.map((item) => (
                <div key={item._id} className=" p-4 bg-slate-400">
                    <div className=" bg-slate-200">
                        <p>id: {item._id}</p>
                        <h2>Nombre: {item.name}</h2>
                        <h2>Apellid: {item.lastname}</h2>
                        <p>Email: {item.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default EjercicioLuis