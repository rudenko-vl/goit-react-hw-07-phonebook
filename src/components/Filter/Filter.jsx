import { useDispatch } from 'react-redux';
import { Label } from "./Filter.styled";
import { Input } from "../ContactForm/ContactForm.styled";
import { changeFilter } from 'redux/contactSlice';

const Filter = () => {
   const dispatch = useDispatch();
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        name='filter'
        onChange={e => dispatch(changeFilter(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </Label>
  );
};

export default Filter;
