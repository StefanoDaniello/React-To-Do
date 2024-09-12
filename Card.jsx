function Card({ title, img, descrizione, visitata, onRemove , onUpdate}) {
    
    return (
        <>
            <div className="rounded-md bg-zinc-700 overflow-hidden w-80 text-white">
                <img className="h-52 w-80" src={img} alt={title} />
                <div className="flex flex-col p-3 text-center">
                    <h1 className="mb-3 text-4xl">{title}</h1>
                    <p >{descrizione}</p>
                    <p className="mt-3">{visitata ? "✔️ Visitata" : "✖️ Non Visitata"}</p>
                </div>
                <div className="flex justify-around py-3">
                    <button onClick={onRemove}  type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Elimina
                    </button>
                    <button onClick={onUpdate} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Modifica
                    </button>
                </div>
            </div>
        </>
    )

}

export default Card