export default function InputField({ name, onChange, value = "" }) {
    let requiredBoolean = false;

    if (name === "strMeal" || name === "strIngredient1" || name === "strMeasure1") {
        requiredBoolean = true;
    }

    return (
        <div className="flex justify-between gap-5 m-1.5">
            <label>{name.substring(3)}</label>
            <input
                name={name}
                onChange={onChange}
                required={requiredBoolean}
                value={value}
                type="text"
                className="bg-white border border-[#dfdfdf] rounded-xl pl-2"
            ></input>
        </div>
    );
}
