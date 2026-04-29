import type {FC, ReactNode} from "react";
import type {ISimpson} from "../models/SimpsonModel.ts";
import "./CharacterComponent.css"
type TypePropCharacterComponent = {
    character: ISimpson;
    children: ReactNode
}

const CharacterComponent:FC<TypePropCharacterComponent> = ({character, children}) => {
    return (
        <div className={"simpson"}>
            <h1>Name - {character.name}</h1>
            <p>Surname - {character.surname}</p>
            <p>Age - {character.age}</p>
            <img src={character.photo}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;