import "./habil.css"


// eslint-disable-next-line react/prop-types
export function HabilBox({title, icon}){

    return<div className="contBox">

        <h3>{title}</h3>

        <div className="box">
            {icon}
        </div>

    </div>

}
// eslint-disable-next-line react/prop-types
export function HabilBox2({title, icon}){

    return<div className="contBox2">

        <div className="box">
            {icon}
        </div>

        <h3>{title}</h3>

    </div>
}