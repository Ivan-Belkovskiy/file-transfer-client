export default function FileRobotUploader({ ref, onFileUpload }) {
    const onUpload = (e) => {
        const file = e.target.files[0];
        onFileUpload(file);
        
    }
    return (
        <input type="file" ref={ref} hidden onChange={onUpload} />
    );
}