import React, {Component, FunctionComponent} from "react";
import {LayoutPropsTypes} from "./types";
import cn from "classnames";
import s from "./Layout.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Layout({children}: LayoutPropsTypes): JSX.Element {
    return (
       <>
       <Header />
           <div>
               <SideBar />
               <div>
                   {children}
               </div>
           </div>
           <Footer />
       </>
        )
};

    export const withLayout = <T extends Record<string, unknown> >(Component: FunctionComponent<T>) => {
        return function withLayoutComponent(props: T): JSX.Element {
            return (
                <Layout>
                    <Component {...props}/>
                </Layout>
            )
        }
}