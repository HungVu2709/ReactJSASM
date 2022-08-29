import React, { useState } from "react";
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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Label, Col, Row } from "reactstrap";
import { Control, Errors, LocalForm } from "react-redux-form";
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

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const toggle = () => setModal(!modal);
  function handleSearchName() {
    console.log(searchName);
    setSearchQuery(searchName);
  }

  function handleSubmit(values) {
    console.log(values, "smth");
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
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={4}>
                Tên
              </Label>
              <Col md={8}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="Tên"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(30),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                    minLength: "Yêu cầu tối thiểu 2 kí tự",
                    maxLength: "Yêu cầu ít hơn 30 kí tự",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="dob" md={4}>
                Ngày sinh
              </Label>
              <Col md={8}>
                <Control.text
                  type="Date"
                  model=".dob"
                  id="dob"
                  name="dob"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".dob"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={8}>
                <Control.text
                  type="Date"
                  model=".startDate"
                  id="startDate"
                  name="startDate"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".startDate"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={8}>
                <Control.select
                  model=".department"
                  id="department"
                  name="department"
                  className="form-control"
                  defaultValue="Sale"
                >
                  <option value="Sale">Sale</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương
              </Label>
              <Col md={8}>
                <Control.text
                  model=".salaryScale"
                  id="salaryScale"
                  name="salaryScale"
                  placeholder="1.0->3.0"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="annualLeave" md={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={8}>
                <Control.text
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder="1"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={8}>
                <Control.text
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Yêu cầu nhập",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  ADD STAFF
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        {/* <ModalFooter></ModalFooter> */}
      </Modal>
      <hr />
      <div className="row">{staff}</div>
    </div>
  );
};

export default StaffList;
