import { fetchingCategories } from "../../utils/fetching";
import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";

export default function SelectDropDown({ name, onChange, defaultValue }) {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCategories() {
            try {
                const data = await fetchingCategories();
                const categoriesName = data.categories.map((category) => category.strCategory);
                setCategories(categoriesName);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        getCategories();
    }, []);

    if (error) return <ErrorComponent error={error} />;
    if (loading) return <Loading />;

    return (
        <div className="flex justify-between gap-5 m-1.5">
            <label>{name.substring(3)}</label>
            <select
                name={name}
                onChange={onChange}
                className="bg-white border border-[#dfdfdf] rounded-xl pl-2"
                defaultValue={defaultValue}
            >
                <option value="" hidden>
                    Select a Category!
                </option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
