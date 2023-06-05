import {Button} from "./ButtonStyled";

const Boton = ({id, onClick, value}) => (
    <Button id={id} onClick={onClick}>
        {value}
    </Button>
);

export default Boton;