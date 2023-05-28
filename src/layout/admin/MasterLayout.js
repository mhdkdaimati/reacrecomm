import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import routes from '../../routes/routes';
import { Switch, Route, Redirect } from 'react-router-dom';

const MasterLayout = () =>{
    return (
        <div className="sb-nav-fixed">
            <NavbarAdmin />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            { routes.map((route, idx)=>{
                                return(
                                    route.component && (
                                        <Route 
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={
                                            (props)=> (
                                                <route.component {...props}/> 
                                            )
                                        }
                                        />
                                        )
                                    )
                                }
                            )
                        }
                            <Redirect from="/admin" to="/admin/dashboard "/> 
                        </Switch>
                    </main>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Footer />
            </div>
            </div>
        </div>
    );
}
export default MasterLayout;