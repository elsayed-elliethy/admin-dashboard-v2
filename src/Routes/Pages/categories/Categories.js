import { Container } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import MainTable from '../../../components/table/MainTable'
import useHttp from '../../../hooks/use-http';

const Categories = () => {
  const { isLoading, error, requestFn } = useHttp();
/////getCategories///
const getCategories = `https://abdjan.everest-ci.com/api/categories_with_sub_categories`;
  const [categories, setCategories] = useState([]);
useEffect(() => {
  const transformData = (fetchedData) => {
    let loadedCategories = [];
    Object.entries(fetchedData.data).map((ele) => {
      loadedCategories.push(ele[1]);
    });
    setCategories(loadedCategories);
  };
  requestFn(
    {
      url: getCategories,
    },
    transformData
  );
}, [requestFn, getCategories]);
////
const categoriesData = useMemo(() => categories, [categories]);
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
      url: `https://abdjan.everest-ci.com/api/parent_categories/${categoriesData[rowIndex].id}`,
      method: "PUT",
      body: {
        ...categoriesData[rowIndex],
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
    const updatedList = categories.filter((ele) => {
      return ele.id !== catId;
    });
    setCategories(updatedList);
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
      data={categoriesData}
      updateMyData={updateCategories}
      deleteHandler={deleteCategoryHandler}
      filterPlaceholder={`Search ${categoriesData.length} categories `}
      btnContent="Add category"
      add="categories/addCategory"
      edit={"editCategory"}
        show="true"
    />
  </div>
  );
}

export default Categories