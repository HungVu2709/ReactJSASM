import React from "react";
import { Button } from "reactstrap";
import dateFormat from "dateformat";
import { Card, CardText, CardImgOverlay, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

// export default class StaffList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStaff: null,
//     };
//   }
//   onStaffSelected(staff) {
//     this.setState({ selectedStaff: staff });
//   }

//   renderStaff(staff) {
//     if (staff != null)
//       return (
//         <Card>
//           <CardBody>
//             <CardTitle>Họ và tên: {staff.name}</CardTitle>
//             <CardText>
//               Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
//             </CardText>
//             <CardText>
//               Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
//             </CardText>
//             <CardText>Phòng ban: {staff.department.name}</CardText>
//             <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
//             <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
//           </CardBody>
//         </Card>
//       );
//     else return <div></div>;
//   }

//   render() {
//     const staff = this.props.staffs.map((staff) => {
//       return (
//         <div key={staff.id} className="col-6 col-md-2 col-sm-4">
//           <Card key={staff.id} onClick={() => this.onStaffSelected(staff)}>
//             <CardImg src={staff.image} alt={staff.name} />
//             <Button>{staff.name}</Button>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <h2>Nhân viên</h2>
//         <hr />

//         <div className="row">{staff}</div>
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderStaff(this.state.selectedStaff)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
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
        {/* <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Nguyễn Văn B</BreadcrumbItem>
        </Breadcrumb> */}
        <div className="col-12">
          <h3>Nhân viên</h3>
          <hr />
        </div>
      </div>
      <div className="row">{staff}</div>
    </div>
  );
};

export default StaffList;
