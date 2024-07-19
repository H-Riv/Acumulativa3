import React, { useState } from 'react';
import Note from './Notes';
import './styles.css';

const PostIt = () => {

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Título"
                />
                <input
                    type="text"
                    placeholder="Descripción"
                />
                <label>
                    <input
                        type="checkbox"
                    />
                    Importante
                </label>
                <button>Agregar</button>
            </div>
            <div className="notes-container">
                    <Note/>
            </div>
        </div>
    );
};

export default PostIt;