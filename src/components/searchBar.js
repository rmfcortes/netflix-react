import PrimaryButton from '../shared/primaryButton';
import './searchBar.css'

function SearchBar() {
    return (
        <div>
            <input placeholder='What do you want to watch?'/>
            <PrimaryButton text="Search" width="233px" className="btn-primary"></PrimaryButton>
        </div>
    );
}

export default SearchBar;