import React from "react";
import logo from "@/public/images/logo.png";
import { Button, Divider, Flex } from "antd";
import {GoogleOutlined} from "@ant-design/icons";
import SearchProperties from "./SearchProperties";

export default function Header(): React.ReactElement {
    return (
        <nav className="nav">
            <div className="flex-between">
                <div className="flex-align-center">
                    <img src={logo.src} alt="logo" width={200} className="pointer"/>
                        <Button ghost>Properties</Button>
                    </div>
                    <Button icon={<GoogleOutlined/>}>Login or Register</Button>
            </div>
            <hr/>
            <div className="hero-title">
                <h1>Finding your <span className="color-sec">Perfect Home</span></h1>
                <p className="hero-subtitle">
                    Search for your perfect home in the best locations
                </p>
                <SearchProperties/>
                <Flex justify="center" gap={8}>
                    <Button>
                        Browse Properties
                    </Button>
                    <Button>
                        List Property
                    </Button>
                </Flex>
            </div>
        </nav>
    )
}