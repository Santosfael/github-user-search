import Api from '../../utils/api';
import './styles.css';

type Props = {
    text: string;
    nameUser?: string
}

function CustomButton({ text, nameUser }: Props) {

    function handleSearch() {
        Api({
            url: `/${nameUser}`,
        }).then(response => console.log(response));
    }

    return (
        <div className="container-button">
            <button className="button" onClick={handleSearch}>
                {text}
            </button>
        </div>
    );
};

export default CustomButton;