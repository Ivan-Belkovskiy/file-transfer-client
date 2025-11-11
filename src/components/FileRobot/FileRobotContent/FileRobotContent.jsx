import { useEffect, useRef, useState } from "react";
import FileRobotBlock from "../FileRobotBlock/FileRobotBlock";
import FileRobotButton from "../FileRobotButton/FileRobotButton";
import FileRobotUploader from "../FileRobotUploader/FileRobotUploader";
import "./FileRobotContent.css";
import { encodeFilename } from "../../../utils/filename";
export default function FileRobotContent() {
    const uploaderRef = useRef(null);
    const [files, setFiles] = useState([]);    

    const uploadHandler = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file, encodeFilename(file.name));

            const response = await fetch('http://localhost:3704/api/files', {
                method: 'POST',
                body: formData
            });
            const uploadedFile = await response.json();
            setFiles([...files, uploadedFile]);
        } catch (error) {
            alert('Ошибка загрузки файла!');
        }
        // alert(file.name);
    }

    const fetchFiles = async () => {
        try {
            const response = await fetch(`http://localhost:3704/api/files`);
            const data = await response.json();
            setFiles(data);
        } catch (error) {
            // alert('Ошибка загрузки файлов!');
            console.error('Fetch files error: ', error);
        }
    }

    useEffect(() => {
        fetchFiles();
    });

    return (
        <div className="file-robot-content">
            <div className="file-robot-content__main">
                {files.map((file, idx) => <FileRobotBlock name={file.filename} key={idx} />)}
            </div>

            <div className="file-robot-content__buttons">
                <FileRobotUploader ref={uploaderRef} onFileUpload={uploadHandler} />
                <FileRobotButton onClick={() => uploaderRef?.current.click()}>Загрузить файл</FileRobotButton>
                {/* <FileRobotButton>Удалить файл</FileRobotButton> */}
            </div>
        </div>
    );
}