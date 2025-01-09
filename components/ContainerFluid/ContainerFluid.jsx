import styles from './ContainerFluid.module.css'
const ContainerFluid = ({ children }) => {
    return (
        <div className={styles.containerFluid}>
            {children}
        </div>
    )
}

export default ContainerFluid