import style from './Label.module.scss'
import badge from '../../assets/Label.svg'

interface Props {
    class: string
}

const Label = (props: Props ) => {
    return(
            <img className={style.label_wrapper && props.class} src={badge} alt="alt" />
    )
}

export default Label;
