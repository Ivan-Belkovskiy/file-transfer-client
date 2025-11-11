export default function FileRobotDecoration({ fillColor, outlineColor, style }) {
    return (
        <svg width="85" height="85" viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg" style={style}>
            <rect fill={outlineColor} width="20" height="19" x="30" y="33"></rect>
            <polygon
                points="0,0 34,25.5 34,59.5 0,85"
                fill={fillColor}
                stroke={outlineColor}
                stroke-width="5"
            />
        </svg>
    );
}