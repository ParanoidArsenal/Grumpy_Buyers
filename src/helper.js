
const homeURL = process.env.PUBLIC_URL;


const passwordCheck = (value) => {
    const matched_value = value.match(/^(?=\w+)(?=.*\w{8})(?=.*[A-Z])(?=.*\d)(\w+)$/);
    if(matched_value)
        return true;
    else{
        return false;
    }
}

const setSession = ({login, avatar}) =>{
    localStorage.setItem(`Session`,JSON.stringify({ login, avatar}));
}

const getSession = () => JSON.parse(localStorage.getItem(`Session`));


export {homeURL, passwordCheck, setSession, getSession};