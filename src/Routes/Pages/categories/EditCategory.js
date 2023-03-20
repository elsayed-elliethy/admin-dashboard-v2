import { Container } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import EditComponent from '../../../components/edit/EditComponent';
import useHttp from '../../../hooks/use-http';


function EditCategory() {
    const { catId } = useParams();
  const editCategoryApi = `https://abdjan.everest-ci.com/api/parent_categories/${catId}`;
  const categoryInputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
    },
  ];
  
  return (
    <Container>
      <EditComponent
        title={'Update Category'}
        inputs={categoryInputs}
        url={editCategoryApi}
      />
    </Container>
  );
}

export default EditCategory;