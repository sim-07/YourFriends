import { useEffect, useState } from "react";

const Dialog = ({ visibleDialog, openDialog, setOpenDialog, children }) => {
    const [visible, setVisible] = useState(openDialog);

    useEffect(() => {
        if (openDialog) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 150);
        }
    }, [openDialog]);

    if (!visible) return null;

    const overlayStyle = {
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.4)",
        transition: "opacity 0.3s",
        opacity: visibleDialog ? (openDialog ? 1 : 0) : 1,
    };

    const containerStyle = {
        background: visibleDialog ? "white" : "transparent",
        padding: "50px",
        borderRadius: "12px",
        width: "50vw",
        height: "70vh",
        transform: openDialog ? "scale(1)" : "scale(0.4)",
        opacity: openDialog ? 1 : 0,
        transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
    };

    return (
        <div style={overlayStyle} onClick={() => setOpenDialog(false)}>
            <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Dialog;
