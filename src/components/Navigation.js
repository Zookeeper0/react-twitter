import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => {

    return (
        <nav>
            <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                <li>
                    <Link to="/" style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }}>
                        <img src="./wakMain.png" width="26px" height="26px" />
                        <span style={{ marginTop: 10 }}>
                            Main
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/profile"
                        style={{
                            marginLeft: 33,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            fontSize: 12,
                        }}
                    >
                        <img src="./wakProfile.png" width="26px" height="26px" />
                        <span style={{ marginTop: 10 }}>
                            {userObj.displayName
                                ? `${userObj.displayName}의 프로필`
                                : "프로필"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;