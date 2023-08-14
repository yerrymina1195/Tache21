import React, {useState} from 'react'

const AddEleveForm = (props) => {

  const initialFormState = {id: null, name:"", username: "" }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const {name, value} = event.target 

    setUser({...user, [name]: value })
  }

  return (
    <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form
                 onSubmit={(event) =>{event.preventDefault()
                  if(!user.name || !user.username) return 
                props.addEleve(user)
                setUser(initialFormState)
                }}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange = {handleInputChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            username
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="username"
                                value={user.username}
                                onChange = {handleInputChange}
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Ajout d eleves
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default AddEleveForm
