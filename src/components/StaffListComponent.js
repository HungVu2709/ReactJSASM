import React, { useState } from "react";
import { Col, Row } from "reactstrap";
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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function RenderStaffItem({ staff }) {
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
  const [searchName, setSearchName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  function handleSearchName() {
    console.log(searchName);
    setSearchQuery(searchName);
  }
  const staff = props.staffs
    .filter((staff) => staff.name.toLowerCase().includes(searchQuery))
    .map((staff) => {
      return (
        <div className="col-6 col-md-4 col-lg-2 mt-3" key={staff.id}>
          <RenderStaffItem staff={staff} onClick={props.onClick} />
        </div>
      );
    });

  return (
    <div className="container">
      <div className="row">
        <Row className="col-12 col-md-4 col-lg-12 mt-3">
          <Col>
            <h3>Nhân viên</h3>
          </Col>
          <Col>
            <Input
              type="search"
              placeholder="Search"
              className="col-12"
              onChange={(e) => setSearchName(e.target.value)}
            />
          </Col>
          <Col>
            <Button color="primary" onClick={handleSearchName}>
              Search
            </Button>
          </Col>
          <Col>
            <Button color="primary" onClick={toggle}>
              {" "}
              ADD STAFF
            </Button>
          </Col>
        </Row>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD STAFF</ModalHeader>
        <ModalBody>Lorem ipsum dolor sit amet</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            ADD
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <hr />
      <div className="row">{staff}</div>
    </div>
  );
};

export default StaffList;
