import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import dayjs from 'dayjs';
import './calculator.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../redux/slices/diarySlice';
import {
  diaryDateThunk,
  addProductToDiaryThunk,
  removeProductToDiaryThunk,
} from '../../redux/operators/diaryOperator';
//import { diaryProductsThunk } from '../../redux/operators/productOperator';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import { selectIsLogged } from '../../redux/selectors/authSelectors';
import ProductSelector from './ProductsSelect';

const UserDiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(selectIsLogged);
  const bloodTypeLoged = useSelector(state => state.auth.bloodType);

  const selectedDate = useSelector(state => state.diary.selectedDate);
  const tableData = useSelector(state => state.diary.tableData);
  const loading = useSelector(state => state.diary.loading);
  const error = useSelector(state => state.diary.error);

  useEffect(() => {
    if (isLogged && !bloodTypeLoged) {
      alert(
        'Falta el dato del tipo de sangre. Por favor, actualiza tu perfil.'
      );
      navigate('/goit-project-react/user-calculator');
    }
  }, [isLogged, bloodTypeLoged, navigate]);

  const memoizedSelectedDate = useMemo(
    () => dayjs(selectedDate),
    [selectedDate]
  );

  const [selectedProduct, setSelectedProduct] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    if (memoizedSelectedDate.isValid()) {
      dispatch(diaryDateThunk(memoizedSelectedDate.format('YYYY-MM-DD')));
    }
  }, [dispatch, memoizedSelectedDate]);

  /*
  const productsLoaded = useSelector(
    state => state.products.products.length > 0
  );
  console.log(productsLoaded);
  useEffect(() => {
    if (isLogged && !productsLoaded) {
      dispatch(diaryProductsThunk());
    }
  }, [dispatch, isLogged, productsLoaded]);*/

  const validDate = currentDate => {
    return currentDate.isSameOrBefore(new Date(), 'day');
  };

  const handleDateChange = date => {
    if (date && date.isValid()) {
      const formattedDate = date.format('YYYY-MM-DD');
      dispatch(setDate(formattedDate));
    }
  };

  const handleAddProduct = async productCalories => {
    if (!selectedProduct) {
      alert('Por favor, seleccione un producto.');
      return;
    }

    if (!weight || isNaN(weight) || weight <= 0) {
      alert('Por favor, ingrese un peso válido.');
      return;
    }

    try {
      await dispatch(
        addProductToDiaryThunk({
          productId: selectedProduct,
          weight,
          date: memoizedSelectedDate.format('YYYY-MM-DD'),
          calories: productCalories,
        })
      ).unwrap();
      dispatch(diaryDateThunk(memoizedSelectedDate.format('YYYY-MM-DD')));
      setSelectedProduct('');
      setWeight('');
    } catch (error) {
      if (error === 'food already exists') {
        alert('El producto ya está en el diario para esta fecha.');
      } else {
        alert(
          'No se pudo añadir el producto. Verifica los datos o intenta de nuevo.'
        );
      }
    }
  };

  const handleRemoveProduct = useCallback(
    async product => {
      const { id } = product;
      try {
        await dispatch(
          removeProductToDiaryThunk({
            id,
            date: memoizedSelectedDate.format('YYYY-MM-DD'),
          })
        ).unwrap();
        dispatch(diaryDateThunk(memoizedSelectedDate.format('YYYY-MM-DD')));
      } catch (error) {
        alert('No se pudo eliminar el producto. Intenta de nuevo.');
      }
    },
    [dispatch, memoizedSelectedDate]
  );

  const columns = useMemo(
    () => [
      { id: 'name', header: 'Nombre', accessorKey: 'name' },
      { id: 'grams', header: 'Gramos', accessorKey: 'grams' },
      { id: 'calories', header: 'Calorias', accessorKey: 'calories' },
      {
        id: 'actions',
        header: 'Eliminar',
        cell: info => (
          <button
            onClick={() => handleRemoveProduct(info.row.original)}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            {' '}
            Eliminar
          </button>
        ),
      },
    ],
    [handleRemoveProduct]
  );

  const data = useMemo(() => tableData, [tableData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h3>Seleccione una fecha:</h3>
      <Datetime
        value={memoizedSelectedDate.toDate()}
        onChange={handleDateChange}
        isValidDate={validDate}
        dateFormat="DD-MM-YYYY"
        timeFormat={false}
        closeOnSelect={true}
      />
      <p>
        Fecha seleccionada:{' '}
        {memoizedSelectedDate.isValid()
          ? memoizedSelectedDate.format('DD-MM-YYYY')
          : 'Ninguna'}
      </p>

      <ProductSelector
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        weight={weight}
        setWeight={setWeight}
        handleAddProduct={handleAddProduct}
      />

      {loading && <p>Cargando...</p>}
      {!loading && error && <p>{error}</p>}

      {!loading && !error && tableData.length === 0 && (
        <p>No hay datos disponibles para la fecha seleccionada.</p>
      )}

      {/* Tabla para mostrar datos */}
      <table
        style={{ marginTop: '20px', width: '50%', borderCollapse: 'collapse' }}
      >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr
              key={headerGroup.id}
              style={{ borderBottom: '1px solid black' }}
            >
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{ padding: '10px', textAlign: 'left' }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} style={{ borderBottom: '1px solid black' }}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{ padding: '10px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDiary;
