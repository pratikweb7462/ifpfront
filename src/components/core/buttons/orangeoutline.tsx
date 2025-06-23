import styles from '../../../assets/styles/orangeoutline.module.scss';

interface OrangeOutlineProps {
  label: string;
  onClick?: () => void;  
        
}

export default function OrangeOutline({ label, onClick}: OrangeOutlineProps) {
  return <button onClick={onClick} className={styles.orangeOutline}>{label}</button>;
}