import ChatSection from './ChatSection';
import CreationSection from './CreationSection';
import AccountSection from './AccountSection';

const Workshop = (props) => {
    return (
        <>
            <ChatSection />
            <CreationSection 
                setFormSubmitted={ props.setFormSubmitted } 
                formSubmitted={ props.formSubmitted }
            />
            <AccountSection />
        </>
    );
};

export default Workshop;