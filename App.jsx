import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Card from './components/Card'
import CardForm from './components/CardForm'
function App() {

  const [cities, setCities] = useState(
    [
      {
        id: 0,
        title: "Roma",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
        descrizione: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, accusamus.",
        visitata: false,
      },
      {
        id: 1,
        title: "Napoli",
        img: "https://images.unsplash.com/photo-1710625361134-332bc2801df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5hcG9saXxlbnwwfHwwfHx8MA%3D%3D",
        descrizione: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, accusamus.",
        visitata: true,
      },
      {
        id: 2,
        title: "Roma",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
        descrizione: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, accusamus.",
        visitata: false,
      },
      {
        id: 3,
        title: "Napoli",
        img: "https://images.unsplash.com/photo-1710625361134-332bc2801df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5hcG9saXxlbnwwfHwwfHx8MA%3D%3D",
        descrizione: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, accusamus.",
        visitata: true,
      },
    ]
  )

  const [selectCity, setCity] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);

  const addCities = (city) => {
    setCities([...cities, city]);
  }
  const removeCity = (id) => {
    setCities(cities.filter(city => city.id !== id));
  };

  const openModal = (id) => {
    const city = cities.find(city => city.id === id)
    setCity(city)
    setModalOpen(true)
  }

  const closeModal = () => {
    setCity(null)
    setModalOpen(false)
  };

  const handleChange = (e) => {
    setCity({
      ...selectCity,
      [e.target.name]: e.target.value
    })
  }

  const updateCity = (e) => {
    e.preventDefault();
    setCities(cities.map(city =>
      city.id === selectCity.id ? selectCity : city
    ));
    closeModal();
  }

  const stoProp =(e) =>{
    e.stopPropagation()
  }

  return (
    <>
      <div className='general-container'>
        <Header></Header>
        <div className="container mx-auto px-4 py-8 mt-28">
          <CardForm addCities={addCities}></CardForm>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Card
                key={city.id}
                title={city.title}
                img={city.img}
                descrizione={city.descrizione}
                visitata={city.visitata}
                onRemove={() => removeCity(city.id)}
                onUpdate={() => openModal(city.id)}
              />
            ))}
          </div>
        </div>

        {selectCity && modalOpen && (
          <div id="modale" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
            <div className="modal-content p-4 bg-white rounded-lg shadow-lg w-96"onClick={stoProp}>
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl'>Modifica Viaggio</h1>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  X
                </button>
              </div>
              <form onSubmit={updateCity}>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome Città</label>
                  <input
                    value={selectCity.title}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Nome città"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrizione</label>
                  <textarea
                    value={selectCity.descrizione}
                    onChange={handleChange}
                    name="descrizione"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  ></textarea>
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Immagine</label>
                  <select
                    name="img"
                    value={selectCity.img}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  >
                    <option value="">Seleziona una città</option>
                    <option value="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D">Roma</option>
                    <option value="https://images.unsplash.com/photo-1710625361134-332bc2801df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5hcG9saXxlbnwwfHwwfHx8MA%3D%3D">Napoli</option>
                    <option value="https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWlsYW5vfGVufDB8fDB8fHww">Milano</option>
                    <option value="https://media.istockphoto.com/id/512566906/it/foto/beacon-parco-e-il-lungomare-sentiero-a-sidney-britannico-columbia.webp?a=1&b=1&s=612x612&w=0&k=20&c=KR5nrP1O2DKbEYCA1boHq-yi9EPtlxwf2pLUI3nKM_w=">Sidney</option>
                  </select>
                </div>
                <div className="mb-5 flex items-center justify-center">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visitata?</label>
                  <input
                    checked={selectCity.visitata}
                    type="checkbox"
                    name="visitata"
                    className="ml-5 mb-1 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    onChange={() => setCity({
                      ...selectCity,
                      visitata: !selectCity.visitata
                    })}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Modifica
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App