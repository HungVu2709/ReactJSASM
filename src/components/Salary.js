import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle } from "reactstrap";

function RenderSalary({ staff, onClick }) {
  return (
    <Card>
      <CardTitle>{staff.name}</CardTitle>
      <p>Mã nhân Viên: {staff.id} </p>
      <p>Hệ số lương: {staff.salaryScale}</p>
      <p>Số ngày làm thêm: {staff.overTime}</p>
      <b>
        Lương:{" "}
        {Math.trunc(staff.overTime * 200000 + staff.salaryScale * 3000000)}
      </b>
    </Card>
  );
}

const Salary = (props) => {
  const staff = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3" key={staff.id}>
        <RenderSalary staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {/* <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Nguyễn Văn B</BreadcrumbItem>
        </Breadcrumb> */}
        <div className="col-12">
          <h3>Bảng Lương</h3>
          <hr />
        </div>
      </div>
      <div className="row">{staff}</div>
    </div>
  );
};

export default Salary;
