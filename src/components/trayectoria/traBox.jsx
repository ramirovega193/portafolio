import "./trayect.css"

// eslint-disable-next-line react/prop-types
export default function TrayectBox({place, type, date}){

    return<div className="tBox">
        <div className="left">
            {place}
        </div>
        <div className="center">
            {type}
        </div>
        <div className="right">
            {date}
        </div>
    </div>
}