import "./FileRobotButton.css";
export default function FileRobotButton({ children, onClick }) {
    return (
        <button className="file-robot-button" onClick={onClick}>{children}</button>
    );
}