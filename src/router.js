import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    MainLayout
} from "./layouts"

import {
    Home,
    Project
} from "./views"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainLayout>
                        <Home />
                    </MainLayout>
                </Route>
                <Route path="/project/:id" exact>
                    <MainLayout>
                        <Project />
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    )
}
