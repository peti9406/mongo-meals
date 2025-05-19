import categoryImages from "../../utils/categoryImages";

function CategoryCard({ category, onClick }) {
    return (
        <div
            className="p-2 group"
            onClick={onClick}
        >
            <div className="w-60 h-60 flex justify-center bg-white rounded-full overflow-hidden">
                <img
                    src={categoryImages[category.strCategory]}
                    alt="category-image"
                    className="max-w-60 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
                ></img>
            </div>
            <h1 className="text-3xl text-center font-[Pacifico] font-bold text-[#3a4e15] py-4 group-hover:text-[#aaae8c]">
                {category.strCategory}
            </h1>
        </div>
    );
}

export default CategoryCard;
