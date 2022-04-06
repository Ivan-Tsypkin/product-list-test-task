import styled from "styled-components";
import CheckboxProps from "../interfaces/CheckboxProps";

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  & + span {
    position: relative;
    height: 20px;
    width: 36px;
    border-radius: 20px;
    background-color: #2F2F2F;
    transition: all .2s linear;
  }

  &:checked + span {
    background-color: #3DDC84;
  }

  & + span::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    top: 10%;
    left: 10%;
    border-radius: 50%;
    background-color: #8B8B8B;
    transition: left .2s linear;
  }

  &:checked + span::after {
    left: 50%;
    background-color: #fff;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, setChecked }) => {
  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={checked || false}
        onChange={() => setChecked(!checked)}
      />
      <span></span>
      Available only
    </StyledLabel>
  )
};

export default Checkbox;