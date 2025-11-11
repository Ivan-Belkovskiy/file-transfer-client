import { decodeFilename } from "../../../utils/filename";
import "./FileRobotBlock.css";
export default function FileRobotBlock({ name }) {
    const saveFile = async (e) => {
        try {
            const response = await fetch(`http://localhost:3704/api/files/${name}`);
            if (!response.ok) throw new Error('Ошибка загрузки файла');
            const data = await response.blob();
            const url = URL.createObjectURL(data);
            const a = document.createElement('a');
            a.href = url;
            a.download = decodeFilename(name);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ошибка скачивания', error);
        }
    }
    return (
        <div className="file-robot-block">
            <div className="file-robot-block__left">
                <span className="file-robot-block__title">{decodeFilename(name)}</span>
            </div>
            <div className="file-robot-block__right">
                <button className="file-robot-block__button download-button" onClick={saveFile}>Скачать</button>
            </div>
        </div>
    );
}