import React from "react";
import { Button, Col, Row } from "reactstrap";
import dateFormat from "dateformat";
import {
  Card,
  CardText,
  CardImgOverlay,
  CardTitle,
  CardImg,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
      </Link>
      {staff.name}
    </Card>
  );
}

const StaffList = (props) => {
  const staff = props.staffs.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-lg-2 mt-3" key={staff.id}>
        <RenderStaffItem staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Row className="col-12 mt-3">
          <Col>
            <h3>Nhân viên</h3>
          </Col>
          <Col>
            <Button color="primary"> ADD STAFF</Button>
          </Col>
          <Col>
            <Input type="search" className="col-12" />
          </Col>
          <Col>
            <Button color="primary"> Search</Button>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="row">{staff}</div>
    </div>
  );
};

export default StaffList;
