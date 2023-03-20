import { Container } from "@mui/system";
import React from "react";
import MainTable from "../../../components/table/MainTable";

function Services() {
  const tableHead = ["Image", "Name", "Revenue", "Stock Status", "Action"];
  const productList = [
    {
      imgUrl: "../../assets/headphone-2.jpg",
      name: "headphone-2",
      price: 100,
      available: 15,
    },
    {
      imgUrl: "../../assets/iphone-2.jpg",
      name: "iPhone x1",
      price: 1900,
      available: 35,
    },
    {
      imgUrl: "../../assets/iphone-1.jpg",
      name: "iPhone x2",
      price: 100,
      available: 0,
    },
  ];
  return (
    <div>
      <MainTable
        title="Services"
        tableHead={tableHead}
        list={productList}
        edit={"/services/edit-service"}
        show={"/services/service1"}
      />
    </div>
  );
}

export default Services;
