"use client"
import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import { FaPlus } from "react-icons/fa6";
import PostFrom from './PostFrom';


const styles = {
    mask: {
        backgroundImage: `linear-gradient(to top, #18181b 0, rgba(21, 21, 22, 0.2) 100%)`,
    },
};

const PostFromPopup = () => {
    const [modalOpen, setOpen] = useState(false);
    const sharedProps = {
        centered: true,
    };

    return (
        <Flex gap="middle">
            <Button
                onClick={() => setOpen(true)}
                style={{
                    backgroundColor: "#7c3aed",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "19px 10px",
                    gap: "6px",
                    width: "130px",
                    fontSize: "16px;"
                }}
            >
                Create Post <FaPlus />
            </Button>

            <Modal
                {...sharedProps}
                footer={null}
                styles={styles}
                open={modalOpen}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                <PostFrom/>
            </Modal>
        </Flex>
    );
};
export default PostFromPopup;