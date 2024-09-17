import { useState } from 'react'



function CardForm({addCities}){

    const addCity =(e) => {
        e.preventDefault();
        const city ={
            id: Math.random(),
            title: formData.title,
            img: formData.img,
            descrizione:formData.descrizione,
            visitata:formData.visitata 
        }
        addCities(city);
        // formData.title = "";
        // formData.img = "";
        // formData.descrizione = "";
        // formData.visitata = false
    }

    const [formData, setData] = useState({
        title: "",
        img: "",
        descrizione: "",
        visitata: false,
    })

    const inputValue = (e) => {
        const {name, value, type, checked} = e.target;
        const typeValue = type == "checkbox" ? checked : value;
        setData({
            ...formData,
            [name]: typeValue
        })
    }

    const handleSelectChange = (e) => {
        const selectedCity = e.target.value;
        setData({
            ...formData,
            img: selectedCity
        })
    }

    return(

        <form className="max-w-sm mx-auto bg-zinc-400 rounded-lg p-5 mb-6" onSubmit={addCity}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome Città</label>
                <input type="text" name="title" onChange={inputValue} value={formData.title} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nome città" required />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrizione</label>
                <textarea type="text" name="descrizione" onChange={inputValue} value={formData.descrizione} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required ></textarea>
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Immagine</label>
                
                <select name="img" onChange={handleSelectChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                    <option value="" >Seleziona una città</option>
                    <option value="https://media.istockphoto.com/id/1148857816/it/foto/colosseo-a-roma.webp?a=1&b=1&s=612x612&w=0&k=20&c=qjvXD5qU9yBQq8DLhLkM54uuU8VnKshTG5uHNE5UdJQ=">Roma</option>
                    <option value="https://media.istockphoto.com/id/1097360124/it/foto/veduta-aerea-di-napoli-italia.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Z8aaRhfArqe9gaZqFINEyPBhcVcgKyjZcxzgESGl3Q=">Napoli</option>
                    <option value="https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWlsYW5vfGVufDB8fDB8fHww">Milano</option>
                    <option value="https://media.istockphoto.com/id/512566906/it/foto/beacon-parco-e-il-lungomare-sentiero-a-sidney-britannico-columbia.webp?a=1&b=1&s=612x612&w=0&k=20&c=KR5nrP1O2DKbEYCA1boHq-yi9EPtlxwf2pLUI3nKM_w=">Sidney</option>
                </select>

                {/* <input type="text" name="img" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required /> */}
            </div>


            
            <div className="mb-5 flex justify-center">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visistata?</label>
                <input type="checkbox" name="visitata" onChange={inputValue} checked={formData.visitata} className=" ml-5 mt-1 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <div className="text-center"> 
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aggiungi</button>
            </div>
           
        </form>

    )
}

export default CardForm

