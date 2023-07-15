import React, { useContext } from "react";
import { Button, Typography } from "antd";
import { MyContext } from "../contexts/MyContext";

const Vendas = (props) => {
    const { rootState, logoutUser } = useContext(MyContext);
    const { isAuth, theUser } = rootState;

    return (
        <div>
            <Button
            style={{backgroundColor: props.theme.token.colorError,}}
             onClick={logoutUser}>
                Logout
            </Button>
            <Typography.Title level={1}>Página de Vendas</Typography.Title>
        </div>
    );
}

export default Vendas;
