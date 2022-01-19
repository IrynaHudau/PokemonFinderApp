import React, {Component} from 'react';
import AppBar from '../components/Navigation/AppBar';
import SideDrawer  from '../components/Navigation/SideDrawer';
import { withRouter } from "react-router-dom";

class Layout extends Component{

    constructor(props){
        super(props);
        this.state = {
            showSideDrawer : false,
            mobileView: false
        }
    };

    handleSideDrawerClose = () => {
        this.setState({showSideDrawer: false});

    };

    handleSideDrawerToggle = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !this.state.showSideDrawer};
        });
    };

    componentDidMount(){
        const  setResponsiveness = () => {
            return window.innerWidth < 900 ? this.setState((prevState) => ({...prevState, mobileView : true})) : this.setState((prevState) => ({...prevState , mobileView: false}))
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    };

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
            return;
        };
      };

    handleHomeButtonClick = () => {
        console.log("Clicked Home");
        this.props.history.push('/');
    };

    handleAboutButtonClick = () => {
        console.log("Clicked About");
        console.log(this.props);
       this.props.history.push('/about');
    };


    render(){
        return(
            <div>
                <AppBar 
                    menyButtonClicked={this.handleSideDrawerToggle} 
                    open={this.state.showSideDrawer} 
                    mobileView={this.state.mobileView}
                    clickedAbout={this.handleAboutButtonClick}
                    clickedHome={this.handleHomeButtonClick}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer}  
                    closed={this.handleSideDrawerClose} 
                    clickedAbout={this.handleAboutButtonClick}
                    clickedHome={this.handleHomeButtonClick}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default withRouter(Layout);