import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchingCategories } from "../../utils/fetching";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function Categories() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCategories() {
            try {
                const allCategories = await fetchingCategories();
                setCategories(allCategories.categories);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        getCategories();
    }, []);

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 py-20">
            {categories.map((category) => (
                <CategoryCard
                    key={category.idCategory}
                    category={category}
                    onClick={() => navigate(`/categories/${category.strCategory}`)}
                />
            ))}
        </div>
    );
}

export default Categories;
