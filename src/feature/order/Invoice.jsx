import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../../components/layout/Main';
import { fetchAllOrder } from './sliceOrder';

const Invoice = () => {
  const allInvoice = useSelector((state) => state.order.invoice);
  const dispatch = useDispatch();
  console.log(allInvoice);

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, []);
  return (
    <Main>
      <h1>Invoice</h1>
    </Main>
  );
};

export default Invoice;
