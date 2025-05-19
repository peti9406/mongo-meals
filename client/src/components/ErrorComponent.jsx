export default function ErrorComponent({ error }) {
    return (
        <div className="text-center">
            <h1 className="text-red-500 text-4xl">{error.message}</h1>
        </div>
    );
}
