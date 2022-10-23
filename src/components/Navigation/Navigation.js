import {useNavigate} from "react-router-dom";
import './Navigation.scss'
//Navigation component to manage each joke related actions

export default function NavigationComponent({handleGetJoke, handleNewJoke}) {


    let navigate = useNavigate();

    const routeChange = () => {
        let path = `favorites`;
        navigate(path);
    }


    return (
        <>
            <div className="main__content">
                <form onSubmit={handleNewJoke}>
                    <button type="submit">Get jokes each 5 sec</button>
                </form>
                <button type="submit" onClick={routeChange}>Favorites</button>
            </div>
        </>
    );
}
