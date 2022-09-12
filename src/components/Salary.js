import React from "react";
import { Card, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderSalary({ salary, onClick }) {
  return (
    <Card>
      <CardTitle>{salary.name}</CardTitle>
      <p>Mã nhân Viên: {salary.id} </p>
      <p>Hệ số lương: {salary.salaryScale}</p>
      <p>Số ngày làm thêm: {salary.overTime}</p>
      <b>Lương: {salary.salary}</b>
    </Card>
  );
}

const Salary = (props) => {
  const salary = props.salarys.salarys.map((salary) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-3" key={salary.id}>
        <RenderSalary salary={salary} onClick={props.onClick} />
      </div>
    );
  });
  if (props.salarys.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.salarys.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.salarys.errMess}</h4>
        </div>
      </div>
    );
  } else
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
        <div className="row">{salary}</div>
      </div>
    );
};

export default Salary;
