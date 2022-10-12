import { useState } from 'react';
import './genreToggle.css'

function GenreToggle() {
    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const [selected, setSelected] = useState(0);

    return (
        <div className='genre-container'>
            { 
                genres.map((genre, i) => (
                    <span className='genre-title'>
                        <div 
                            className={ selected === i ? 'selected' : '' }
                            onClick={ () => setSelected(i) }
                        >
                            { genre }
                        </div>
                    </span>
                )) 
            }
        </div>
    );
}

export default GenreToggle;