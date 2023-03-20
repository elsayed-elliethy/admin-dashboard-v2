import { Container } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import EditComponent from '../../../components/edit/EditComponent';
import useHttp from '../../../hooks/use-http';


function EditSubCategory() {
    const {catId, subcatId } = useParams();
  const editSubCategoryApi = `https://abdjan.everest-ci.com/api/sub_categories/${subcatId}`;
  const subCategoryInputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
    },
  ];
  
  return (
    <Container>
      <EditComponent
        title={'Update subCategory'}
        inputs={subCategoryInputs}
        url={editSubCategoryApi}
        parentId={catId}
      />
    </Container>
  );
}

export default EditSubCategory;