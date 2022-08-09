import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

function RenderStaff({ staff }) {
  return (
    <div>
      <Card>
        <CardImg top src={staff.image} alt={staff.name} />
      </Card>
    </div>
  );
}

function RenderStaffInfo({ staff }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Họ và tên: {staff.name}</CardTitle>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>Phòng ban: {staff.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

const StaffDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.staff.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <RenderStaff staff={props.staff} />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <RenderStaffInfo staff={props.staff} />
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
