import React, { useState } from "react";
import { useUserDataMutate } from "../hooks/useUserDataMutate";
import { UserData } from "../interface/UserData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void,
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label> {label} </label>
            <input
                value={value}
                onChange={(event) => updateValue(event.target.value)}
                className="border border-gray-400 rounded-md p-1.5"
            ></input>
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, isSuccess} = useUserDataMutate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Evita que o formulário recarregue a página

        const userData: UserData = {
            name,
            username,
            email,
            password,
        };

        mutate(userData);

        if (isSuccess) {
            closeModal(); // Fecha o modal se a operação for bem-sucedida
        }
    };

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Cadastro de Usuário</h3>
                {/* Formulário para cadastro de usuário */}
                <form onSubmit={handleSubmit}  className="flex flex-col">
                    <Input label="Nome" value={name} updateValue={setName} />
                    <Input label="Nome de Usuário" value={username} updateValue={setUsername} />
                    <Input label="E-mail" value={email} updateValue={setEmail} />
                    <Input label="Senha" value={password} updateValue={setPassword} />
                    <button type="submit" className="bg-black mt-10 text-white rounded-md p-3 font-bold">Cadastrar</button>
                </form>
            </div>
        </dialog>
    );
}
