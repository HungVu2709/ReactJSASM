import React from "react";
import { Button } from "reactstrap";
import dateFormat from "dateformat";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }
  onStaffSelected(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null)
      return (
        <Card>
          <CardBody>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-5 m-1">
          <Card key={staff.id} onClick={() => this.onStaffSelected(staff)}>
            <Button>{staff.name}</Button>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staff}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}
