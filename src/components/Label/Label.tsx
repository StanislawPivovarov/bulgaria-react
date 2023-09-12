import style from './Label.module.scss'

interface Props {
    class: string
}

const Label = (props: Props ) => {
    return(
        <div className={style.label_wrapper && props.class}>
        <div className={style.label}>
            <h1 className={style.text} style={{textAlign: 'center'}}>АКЦИЯ</h1>
        </div>
        </div>

    )
}

export default Label;
