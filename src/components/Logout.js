import { useHistory } from 'react-router-use-history';

function Logout() {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.push('/3000');
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;