import { Table_Row } from "./components/table-row";
import { useUserData } from "./hooks/useUserData"

function App() {
  const { data } = useUserData();
    return (
        <>
            <div className="flex items-center flex-col mt-10">
              <div className="flex items-center mb-10 justify-between w-6/12">
                  <h1 className="font-bold text-xl"> Usuários Cadastrados </h1>
                  <button className="btn">
                    Button
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                  </button>
              </div>
              <div className="overflow-x-auto w-6/12">
                  <table className="table flex items-center justify-center">
                      {/* head */}
                      <thead>
                          <tr className="bg-gray-400">
                              <th>ID</th>
                              <th>Name</th>
                              <th>Username</th>
                              <th>E-mail</th>
                          </tr>
                      </thead>
                      <tbody>
                        {data?.map(userData =>
                          <Table_Row 
                            id = {userData.id}
                            name = {userData.name}
                            username = {userData.username}
                            email = {userData.email}
                          />
                        )}
                          
                      </tbody>
                  </table>
              </div>
            </div>
        </>
    );
}

export default App;
