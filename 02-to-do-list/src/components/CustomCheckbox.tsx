
import '../assets/css/customcheckbox.css'

interface IProps{
  label?: string,
  index: number,
  onChange: any
}

const CustomCheckbox = ({ label, onChange, index }: IProps) =>{
  return(
    <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={(e) => onChange(e.target.checked, index)}
        />
        <span className="checkbox-custom"/>
        {label && <span>{label}</span>}
    </label>
  )
}

export default CustomCheckbox;