export default function AnimalsComponent({animalName, deleteFn, focusFn}) {
    return (
        <div>
            <strong>{animalName}</strong>
            <div>
            <button onClick={() => {
                focusFn(animalName);
            }}>Focus</button> | <button onClick={() => {
                deleteFn(animalName);
            }}>Delete</button>
            </div>
        </div>
    )
}