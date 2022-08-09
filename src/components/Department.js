import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderDepartment({ department, onClick }) {
  return (
    <Card>
      <CardTitle>{department.name}</CardTitle>
      <p>Số lượng nhân viên :{department.numberOfStaff}</p>
    </Card>
  );
}

const Department = (props) => {
  const department = props.departments.map((department) => {
    return (
      <div className="col-12 col-lg-4 col-md-6" key={department.id}>
        <RenderDepartment department={department} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Phòng Ban</h3>
          <hr />
        </div>
      </div>
      <div className="row">{department}</div>
    </div>
  );
};

export default Department;
