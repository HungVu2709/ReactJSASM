import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, matchPath } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderDepartment({ staff }) {
  return (
    <div>
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg top src="/assets/images/alberto.png" alt={staff.name} />
        </Card>
      </FadeTransform>
    </div>
  );
}

function RenderDepartmentInfo({ staff }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Họ và tên: {staff.name}</CardTitle>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Phòng ban: {staff.departmentId}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
const DepartmentDetail = (props) => {
  const staffDepartment = props.staff
    .filter((staff) => staff.departmentId === props.department.id)
    .map((staff) => {
      return (
        <div className="row" key={staff.id}>
          <div className="col-12 col-md-4 col-lg-3">
            <RenderDepartment staff={props.staff} />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <RenderDepartmentInfo staff={staff} />
          </div>
        </div>
      );
    });
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.department != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/department">Phòng Ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.department.name}</h3>
            {console.log(props.staff)}
            <hr />
          </div>
        </div>
        {staffDepartment}
      </div>
    );
};

export default DepartmentDetail;
