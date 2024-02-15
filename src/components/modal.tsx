import React, { useEffect, useState } from "react";
import { useUserData } from "../hooks/useUserData";
import { useUserDataMutate } from "../hooks/useUserDataMutate";
import { UserData } from "../interface/UserData";

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
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

    const submit = () => {
        const userData: UserData = {
            name,
            username,
            email,
            password,
        };

        mutate(userData);
    };

    useEffect(() => {
        if (!isSuccess) return closeModal();
    }, [isSuccess]);

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
