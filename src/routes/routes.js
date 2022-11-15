import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts';
import Dashboard from '../components/Dashboard';
import ContactUs from '../components/ContactUs';
import PostDetails from '../components/PostDetails';
import Creatures from '../components/Creatures';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />} />
      <Route path='/home' element={<Home {...props} />} />
      <Route path='/posts' element={<Posts {...props} />} />
      <Route path='/post/:id' element={<PostDetails {...props} />} />
      <Route path='/dashboard/' element={<Dashboard {...props} />} />
      <Route path='/creatures'  element={<Creatures {...props} />} />
      <Route path='/contact-us' element={<ContactUs {...props} />} />
    </Routes>
  )
}