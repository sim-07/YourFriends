import { useEffect, useState } from "react";

const Dialog = ({ openDialog, setOpenDialog, children }) => {
    const [visible, setVisible] = useState(openDialog);

    useEffect(() => {
        if (openDialog) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 150);
        }
    }, [openDialog]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "opacity 0.15s",
                opacity: openDialog ? 1 : 0
            }}
            onClick={() => setOpenDialog(false)}
        >
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    width: "300px",
                    transform: openDialog ? "scale(1)" : "scale(0.4)",
                    opacity: openDialog ? 1 : 0,
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Dialog;
