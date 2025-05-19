export default function InputField({ name, onChange, placeholder = "" }) {
    let requiredBoolean = false;
    if (
        name === "strMeal" ||
        name === "strCategory" ||
        name === "strIngredient1" ||
        name === "strMeasure1"
    ) {
        requiredBoolean = true;
    }
    return (
        <div className="flex justify-between gap-5 m-1.5">
            <label>{name.substring(3)}</label>
            <input
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                required={requiredBoolean}
                type="text"
                className="bg-white border border-[#dfdfdf] rounded-xl pl-2"
            ></input>
        </div>
    );
}
