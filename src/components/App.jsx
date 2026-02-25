import { useEffect, useState } from "react";

function App() {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDog = async () => {
        setLoading(true);

        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        const data = await response.json();

        setImageUrl(data.message);
        setLoading(false);
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <img src={imageUrl} alt="Random Dog" />
            )}

            <button onClick={fetchDog}>
            Get New Dog
            </button>
        </div>
    )
}

export default App;