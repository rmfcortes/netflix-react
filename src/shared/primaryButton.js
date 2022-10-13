import './primaryButton.css'

function PrimaryButton(props) {
    const classes = ' button ' + props.className;
    return (
        <button style={ { width: props.width } } className={ classes }>
            { props.text }
        </button>
    );
}

export default PrimaryButton;