import React from "react";
import { Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderDepartment({ department }) {
  return (
    <Card>
      <Link to={`/department/${department.id}`}>
        <CardTitle>{department.name}</CardTitle>
      </Link>
      <p>Số lượng nhân viên : {department.numberOfStaff}</p>
    </Card>
  );
}

const Department = (props) => {
  const department = props.departments.departments.map((department) => {
    return (
      <div className="col-12 col-lg-4 col-md-6" key={department.id}>
        <RenderDepartment department={department} />
      </div>
    );
  });
  if (props.departments.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.departments.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.departments.errMess}</h4>
        </div>
      </div>
    );
  } else
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
