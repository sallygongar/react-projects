
import '../scss/customCheckBox/customcheckbox.scss'

interface IProps{
  label?: string,
  checked: boolean,
  onChange?: any
}

const CustomCheckbox = ({ label, onChange, checked }: IProps) =>{
  return(
    <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="checkbox-custom"/>
        {label && <span className="checkbox-text">{label}</span>}
    </label>
  )
}

export default CustomCheckbox