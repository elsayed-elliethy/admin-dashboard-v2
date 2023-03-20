import { Container } from '@mui/system';
import React from 'react';
import EditComponent from '../../../components/edit/EditComponent';


function EditProducts() {

  const productInputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Revenue',
      name: 'revenue',
      type: 'text',
    },
    {
      label: 'Stock Status',
      name: 'stockStatus',
      type: 'text',
    },
  ];
  const editProductHandler = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <EditComponent
        title={'Update Product'}
        inputs={productInputs}
        editHandler={editProductHandler}
      />
    </Container>
  );
}

export default EditProducts;
