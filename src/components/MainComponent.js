import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./Department";
import Salary from "./Salary";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    staffs: state.staffs,
    departments: state.departments,
  };
};
class Main extends Component {
  constructor(props) {
    super(props);
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          staff={this.props.staffs.filter((staff) => staff.featured)[0]}
          department={
            this.props.departments.filter(
              (department) => department.featured
            )[0]
          }
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          // comments={this.state.comments.filter(
          //   (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          // )}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/staff"
            component={() => <StaffList staffs={this.props.staffs} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Route
            path="/department"
            component={() => (
              <Department departments={this.props.departments} />
            )}
          />
          <Route
            path="/salary"
            component={() => <Salary staffs={this.props.staffs} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
