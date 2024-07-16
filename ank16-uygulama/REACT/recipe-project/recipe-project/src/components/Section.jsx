import React, {useContext, useEffect, useState } from 'react';
import '../assets/style/section.scss';
import DataContext from '../../context/DataContext';

const Section = () => {
    const {selectedRecipe,
        title,
        description,
        image,
        setTitle,
        setDescription,
        setImage,
        handleSubmit,
        titleError,
        descError


    } = useContext(DataContext);
    

    

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
