import React, { useEffect, useState } from "react";
import { Content } from "../../components/PageSection";
import { UserName, Avatar, Loading } from "./styled";
import loading from "../../images/loading.gif";

const GITHUB_USERNAME = "MadameMeduse";

export const MyProfile = () => {
    const [name, setName] = useState();
    const [avatarUrl, setAvatarUrl] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            const user = await response.json();
            setName(user.name);
            setAvatarUrl(user.avatar_url);
        })();
    }, []);

    return (
        <Content>
            {name
                ? (
                    <>
                        <UserName>{name}</UserName>
                        <Avatar src={avatarUrl} />
                    </>
                )
                : (
                    <Loading src={loading} />
                )
            }
        </Content>
    )
};
