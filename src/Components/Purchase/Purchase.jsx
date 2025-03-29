import { useContext } from 'react';
import styles from './Purchase.module.css'
import { darkModeCtx } from '../../App';
import { phoneVariants } from '../../variants';
const Purchase = () => {
    const darkMode = useContext(darkModeCtx);
    return (
        <div className={styles.main} style={{color: darkMode.darkMode ? "var(--white)" : "var(--black)", background: darkMode.darkMode ? "var(--black)" : "var(--white)" }}>
            <h1 className={styles.head}>Choose Your Perfect Variant</h1>
            <div className={styles.variantsSection}>
                {
                    phoneVariants.map((variant) => (
                        <div key={variant.id} className={styles.variantCard}>
                            <img src={variant.imgLink} alt={variant.model} className={styles.variantImage} />
                            <h2>{variant.model}</h2>
                            <p>💾 {variant.ram} RAM | 📂 {variant.storage} Storage</p>
                            <p>🎨 Colors: {variant.colorOptions.join(", ")}</p>
                            <p>🔥 Best For: {variant.bestFor}</p>
                            <h3>💰 {variant.price}</h3>
                            <button>Buy Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Purchase;