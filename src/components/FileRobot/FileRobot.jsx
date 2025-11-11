import "./FileRobot.css";
import FileRobotContent from "./FileRobotContent/FileRobotContent";
import FileRobotDecoration from "./FileRobotDecoration/FileRobotDecoration";
export default function FileRobot() {
    return (
        <div className="file-robot__container">
            <div className="file-robot__top">
                <h1 className="file-robot__title">Загруженные файлы:</h1>
                <FileRobotDecoration
                    fillColor="#031141"
                    outlineColor="#638aa3"
                    style={{
                        position: 'absolute',
                        left: '-50px'
                    }}
                />
                <FileRobotDecoration
                    fillColor="#031141"
                    outlineColor="#638aa3"
                    style={{
                        position: 'absolute',
                        right: '-50px',
                        transform: "rotate(180deg)"
                    }}
                />
            </div>
            <FileRobotContent />
        </div>
    );
}