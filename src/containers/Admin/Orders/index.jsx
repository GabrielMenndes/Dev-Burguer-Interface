import { useEffect } from 'react';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Row } from './row';
import { Filter, FilterOptions } from './styles';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState([0]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }
    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilteredOrders(orders);
    } else {
      const statusItem = orderStatusOptions.find(
        (item) => item.id === activeStatus,
      );
      if (statusItem) {
        const newFilteredOrders = orders.filter(
          (order) => order.status === statusItem.value,
        );
        setFilteredOrders(newFilteredOrders);
      }
    }
  }, [orders]);

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOptions
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOptions>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
