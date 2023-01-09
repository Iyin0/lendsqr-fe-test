import PageTransition from "../components/pageTransition";
import '../styles/userDetails.scss'

const UserDetails = () => {
    return (
        <PageTransition>
            <main className="user-details">
                This is user detail page
            </main>
        </PageTransition>
    );
}

export default UserDetails;