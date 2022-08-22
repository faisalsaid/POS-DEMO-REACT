import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu } from './menuSlice';
import { useState, useEffect } from 'react';

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.menu.menu);
  useEffect(() => {
    dispatch(fetchAllMenu());
  }, []);

  return <div>Menu</div>;
};

export default Menu;
