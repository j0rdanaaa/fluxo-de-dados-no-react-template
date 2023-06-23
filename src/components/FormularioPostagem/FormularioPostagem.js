import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = ({imagem, descricao, setPhoto, setDescription, titulo, setTitulo}) => {
  // estados
 

  // funções
const handleTitulo =(event) => {
 setTitulo(event.target.value)
}

const mudarPhoto=(event)=>{

  setPhoto(event.target.value)
}
const hedleDescription=(event)=>{

  setDescription(event.target.value)
}
  // onchange
  // value
  console.log(imagem)
  console.log(descricao)
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={handleTitulo} value={titulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={mudarPhoto}
          value={imagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={hedleDescription}
          value={descricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
