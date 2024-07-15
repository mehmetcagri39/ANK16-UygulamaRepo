import React, { useEffect, useState } from 'react';
import '../assets/style/section.scss';

const Section = ({ addRecipe, fakeRecipes, selectedRecipe }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [titleError, setTitleError] = useState(false);
    const [descError, setDescError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" && description === "" || title !== "" && description === "" || title === "" && description !== "") {
            setTitleError(true);
            setDescError(true);
            return;
        } else {
            setTitleError(false);
            setDescError(false);
        }

        addRecipe({
            id: (Number(fakeRecipes[fakeRecipes.length - 1].id) + 1).toString(),
            title: title,
            description: description,
            image: image
        });

        setTitle("");
        setDescription("");
        setImage("");
    }

    useEffect(() => {
        if (selectedRecipe) {
            setTitle(selectedRecipe.title);
            setDescription(selectedRecipe.description);
            setImage(selectedRecipe.image);
            window.scrollTo(0, 0);  // Sayfanın başına yönlendir

        }
    }, [selectedRecipe]);

    return (
        <form onSubmit={handleSubmit}>
            <h3>{selectedRecipe ? "Edit Recipe" : "Add Recipe"}</h3>
            {titleError && <p>Both recipe name and recipe description must be filled!</p>}
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Recipe Name' />
            {descError && <p>Both recipe name and recipe description must be filled!</p>}
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Recipe Description'></textarea>
            <input value={image} onChange={e => setImage(e.target.value)} type="url" placeholder='Recipe Image(url)' />
            <input type="submit" value={selectedRecipe ? "Edit Recipe" : "Add Recipe"} />
        </form>
    );
}

export default Section;
