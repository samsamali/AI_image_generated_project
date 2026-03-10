import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.card_light};
  outline: none;
  font-size: 14px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.card_light};
  outline: none;
  font-size: 14px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const TextInput = ({ label, placeholder, value, onChange, textArea, rows = 4, name }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      {label && <label style={{ color: "inherit" }}>{label}</label>}
      {textArea ? (
        <TextArea
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange} // Ensure this is onChange
          rows={rows}
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange} // Ensure this is onChange
        />
      )}
    </div>
  );
};

export default TextInput;
