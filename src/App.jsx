import { Table_Row } from "./components/table-row";
import { useUserData } from "./hooks/useUserData";
import { CreateModal } from "./components/modal"; // Importe o componente CreateModal

function App() {
  const { data } = useUserData();

  return (
    <>
      <div className="flex items-center flex-col mt-10">
        <div className="flex items-center mb-10 justify-between w-6/12">
          <h1 className="font-bold text-xl"> Usuários Cadastrados </h1>
          {/* Abrir o modal ao clicar no botão */}
          <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Cadastrar Usuário</button>
          {/* Modal para cadastro de usuário */}
          <CreateModal />
        </div>
        <div className="overflow-x-auto w-6/12">
          <table className="table flex items-center justify-center">
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
                  key={userData.id}
                  id={userData.id}
                  name={userData.name}
                  username={userData.username}
                  email={userData.email}
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
