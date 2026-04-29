import "./CharacterComponent.tsx"
import {simpsons} from "../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";


const FamilyComponent = () => {
    return (
        <>
            {
                simpsons.map((personag, index) => <CharacterComponent character={personag} key = {index}>
                    {personag.info}
                    </CharacterComponent>

                )
            }
        </>
    );
};

export default FamilyComponent;