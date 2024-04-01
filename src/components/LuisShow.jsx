const tomaData = async () => {
    try {
        const respuesta = await fetch(process.env.UXI, { cache: "no-store" })
        return respuesta.json()
    } catch (error) {
        console.log("first error: " + error)
    }
}

const LuisShow = async () => {
    const { data } = await tomaData();
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4 ">
            {data.map((item) => (
                <div key={item._id}  className=" p-3 shadow-lg shadow-violet-900/50 bg-slate-300" >
                    <div className=" my-4">
                        <p className=" text-slate-500">iD: {item._id}</p>
                        <h2 className=" text-2xl">Name: {item.name}</h2>
                        <h2 className=" text-2xl">Lastname: {item.lastName}</h2>
                        <p className=" text-xl">Email: {item.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default LuisShow
