import Button from 'react-bootstrap/Button';

const ButtonComp = ({variant, buttonText, onClick}) => {
    return (
        <Button 
            onClick={onClick} 
            variant={variant}
        >
            {buttonText}
        </Button>
    )
}

export default ButtonComp;