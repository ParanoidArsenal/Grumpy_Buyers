import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import {homeURL, passwordCheck, setSession, getSession} from '../../helper';

const Login = ({history}) => {

    useEffect(() =>{
        const session = getSession();
        if(session){
            history.push(homeURL + '/');
        }
    }, [history]);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginWasFailled, setloginWasFailled] = useState(false);

    const submit = (e) => {
      e.preventDefault();
      if(!passwordCheck(password)){
        setloginWasFailled(true);
        setTimeout(() => setloginWasFailled(false), 1000);
        return;
      }
      axios.get(`https://api.github.com/users/${login}`,
      ).then(
          res => {
            console.log(res);
            setSession(
            {
                login: res.data.login,
                avatar: res.data.avatar_url
            });
            history.push(homeURL + '/');
          },
          err => {
            setloginWasFailled(true);
            setTimeout(() => setloginWasFailled(false), 1000);
            console.log(err);
          }
      );
    };

    const handlePasswordChange = (value) => {
        const matched_value = value.match(/\S+/);
        if(matched_value)
            setPassword(matched_value[0]);
        else
            setPassword(``);
    };

    const handleLoginChange = (value) => {
        const matched_value = value.match(/\S+/);
        if(matched_value)
            setLogin(matched_value[0]);
        else
            setLogin(``);
    };
    
    const isActive = (password && login) ?  ``: 'inactive';
    const handleClick = (password && login) ? submit : (e) => e.preventDefault();
    const notification = (password && login) ? null : <span className= "notification">  *Все поля необходимы для заполнения</span>;

    const alert =  loginWasFailled ? (
    <div className = 'modal-window'>
        <div className = 'alert-message'>
            <h3> Неверный логин или пароль! </h3>
        </div>
    </div> )
    : null;

    return (
        <div className="form-container">
            {alert}
            <form className="authorization-form">
                <label>
                    <span><b>Логин:</b></span>
                <input type="text" name="login"  placeholder="Введите логин"
                    value = {login}
                    onChange={e => handleLoginChange( e.target.value)} />
                </label>
                <label>
                <span><b>Пароль:</b></span>
                <input type="text" name="password" placeholder="Введите пароль"
                    value = {password}
                    onChange = {e => handlePasswordChange(e.target.value)}/>
                </label>
                {notification}
                <input className = {`btn ${isActive}`} type="submit" value="Отправить" onClick={handleClick} />
            </form>
        </div>
    );
};

export { Login }