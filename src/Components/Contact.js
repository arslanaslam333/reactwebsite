import React, { useEffect, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [Users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  const [NewUsers, setNewUsers] = useState([]);

  const submit = () => {
    setNewUsers([...NewUsers, Users]);
    setUsers({
      name: '',
      email: '',
      password: '',
      mobile: '',
    });
  };

  const getLocalItems = () => {
    let List = localStorage.getItem('lists');
    if (List) {
      return JSON.parse(List);
    } else {
      return [];
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
    setNewUsers(getLocalItems());
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(Users));
  }, [Users]);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(NewUsers));
  }, [NewUsers]);

  return (
    <div>
      <div className="container6">
        <h1>
          <b>Contact-Us</b>
        </h1>
        <form className="form" onSubmit={formSubmit}>
          <label
            className="bold"
            htmlFor="name"
            style={{ color: 'white', fontWeight: '700', fontSize: '25px' }}
          >
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleInput}
            value={Users.name}
          />
          <label
            className="bold"
            htmlFor="email"
            style={{ color: 'white', fontWeight: '700', fontSize: '25px' }}
          >
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInput}
            value={Users.email}
          />
          <label
            className="bold"
            htmlFor="password"
            style={{ color: 'white', fontWeight: '700', fontSize: '25px' }}
          >
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            onChange={handleInput}
            value={Users.password}
          />
          <label
            className="bold"
            htmlFor="mobile"
            style={{ color: 'white', fontWeight: '700', fontSize: '25px' }}
          >
            Mobile
          </label>
          <input
            className="input"
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Your Mobile Number"
            onChange={handleInput}
            value={Users.mobile}
          />
          <button className="btn2" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
