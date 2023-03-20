import { Container } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainTable from '../../../components/table/MainTable'
import useHttp from '../../../hooks/use-http';

const CategoryDetails = () => {
  const { isLoading, error, requestFn } = useHttp();
/////getCategories///
const { catId } = useParams();
const getCategoryDetails = `https://abdjan.everest-ci.com/api/sub_categories/${catId}`;
  const [category, setCategory] = useState([]);
useEffect(() => {
  const transformData = (fetchedData) => {
    let loadedCategory = [];
    Object.entries(fetchedData.data).map((ele) => {
      loadedCategory.push(ele[1]);
    });
    setCategory(loadedCategory);
  };
  requestFn(
    {
      url: getCategoryDetails,
    },
    transformData
  );
}, [requestFn, getCategoryDetails]);
////
const categoryData = useMemo(() => category, [category]);
const categoriesColumns = React.useMemo(
  () => [
    {
      Header: "Id",
      accessor: "id",
      sticky: "left",
      // maxWidth: 150,
      // minWidth: 100,
      width: 80,
      // collapse: true,
    },
    {
      Header: "Name",
      accessor: "name",
      // maxWidth: 150,
      // minWidth: 600,
     
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: "actions",
      sticky: "right",
      width: 150,
    },
  ],
  []
);
const updateCategories = (rowIndex, columnId, value) => {
  const transformData = (data) => {};
  requestFn(
    {
      url: `https://abdjan.everest-ci.com/api/parent_categories/${categoryData[rowIndex].id}`,
      method: "PUT",
      body: {
        ...categoryData[rowIndex],
        [columnId]: value,
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
    transformData
  );
};
const deleteCategoryHandler = (catId) => {
  const proceed = window.confirm("Are you sure?");
  if (proceed) {
    const updatedList = category.filter((ele) => {
      return ele.id !== catId;
    });
    setCategory(updatedList);
    requestFn({
      url: `https://abdjan.everest-ci.com/api/parent_categories/${catId}`,
      method: "DELETE",
    });
  }
};

return (
  <div>
    <h1 className="text-center">Categories</h1>
    <MainTable
      columns={categoriesColumns}
      data={categoryData}
      updateMyData={updateCategories}
      deleteHandler={deleteCategoryHandler}
      filterPlaceholder={`Search ${categoryData.length} categories `}
      btnContent="Add details"
      add="categories/addCategory"
      edit={`/categories/${catId}/editSubCategory`}
      show="false"
    />
  </div>
  );
}

export default CategoryDetails