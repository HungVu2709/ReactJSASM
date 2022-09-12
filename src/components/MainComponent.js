import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Menu from "./MenuComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./Department";
import Salary from "./Salary";

import { connect } from "react-redux";
import { fetchStaffs } from "../redux/ActionCreators";
import { fetchSalarys } from "../redux/ActionCreators";
import { fetchDepartments } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DepartmentDetail from "./DepartmentDetail";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salarys: state.salarys,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalarys: () => {
    dispatch(fetchSalarys());
  },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalarys();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          staff={this.props.staffs.staffs.filter((staff) => staff.featured)[0]}
          staffsLoading={this.props.staffs.isLoading}
          staffsErrMess={this.props.staffs.errMess}
          department={
            this.props.departments.departments.filter(
              (department) => department.featured
            )[0]
          }
          departmentsLoading={this.props.departments.isLoading}
          departmentsErrMess={this.props.departments.errMess}
          salary={
            this.props.salarys.salarys.filter((salary) => salary.featured)[0]
          }
          salarysLoading={this.props.salarys.isLoading}
          salarysErrMess={this.props.salarys.errMess}
        />
      );
    };

    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
        />
      );
    };
    const DepartmentWithId = ({ match }) => {
      return (
        <DepartmentDetail
          department={
            this.props.departments.departments.filter(
              (department) => department.id === match.params.departmentId
            )[0]
          }
          staff={this.props.staffs.staffs}
          isLoading={this.props.departments.isLoading}
          errMess={this.props.departments.errMess}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/contactus" component={Contact} />
              <Route
                exact
                path="/staff"
                component={() => <StaffList staffs={this.props.staffs} />}
              />

              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.state.dishes} />}
              />
              <Route path="/staff/:staffId" component={StaffWithId} />
              <Route
                path="/department/:departmentId"
                component={DepartmentWithId}
              />
              <Route
                path="/department"
                component={() => (
                  <Department departments={this.props.departments} />
                )}
              />
              <Route
                path="/salary"
                component={() => <Salary salarys={this.props.salarys} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
