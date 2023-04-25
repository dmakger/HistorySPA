import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss"
import {MainPageWrapperContext} from "./core/context/MainPageWrapperContext";
import TopBar from "./core/components/top_bar/TopBar";

class MainPageWrapper extends Component {

    render() {
        const {children, ...props} = this.props;
        const content = (
            <MainPageWrapperContext.Provider value={{
                ...props
            }}>
                {children}
            </MainPageWrapperContext.Provider>
        )
        return (
            <div className={cl.block}>
                <TopBar />
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

const MainPageContextConsumer = MainPageWrapperContext.Consumer;
export {MainPageWrapper, MainPageContextConsumer};