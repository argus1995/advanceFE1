export default function FormInput(props) {
    return (
        <div className="input-group">
            <label htmlFor={props.inputName}>{props.labelValue} <span>*</span></label>
            <input type={props.inputType} name={props.inputName} id={props.inputName} required />
        </div >
    )
}