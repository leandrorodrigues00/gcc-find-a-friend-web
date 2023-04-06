import { Container } from './styles'

import { uploadIcon, fileIcon } from '../../assets/icons/index'

export function CardPetCreate() {
  return (
    <Container>
      <header>
        <h1>Adicione um pet</h1>
      </header>

      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="" />

        <label htmlFor="description">
          Sobre <span>Máximo de 300 catacteres</span>
        </label>
        <input type="text" id="description" placeholder="" />

        <label htmlFor="age">Idade</label>
        <input type="text" id="age" placeholder="" />

        <label htmlFor="age">Porte</label>
        <input type="text" id="age" placeholder="" />

        <label htmlFor="age">Nível de energia</label>
        <input type="text" id="age" placeholder="" />

        <label htmlFor="age">Nível de independência</label>
        <input type="text" id="age" placeholder="" />

        <label htmlFor="age">Ambiente</label>
        <input type="text" id="age" placeholder="" />
      </div>

      <div>
        <label htmlFor="age">Fotos</label>
        <input type="file" id="age" placeholder="a" />
        <div>
          <img src={uploadIcon} alt="" />
          Arraste e solte o arquivo
        </div>

        <div>
          <img src={fileIcon} alt="" /> pictureexemplo.png
        </div>

        <div>
          <span> +</span>
        </div>
      </div>

      <div>
        <h2>Requesitos para adoção</h2>

        <label htmlFor="age">Requisito</label>
        <input type="text" id="age" placeholder="" />
        <div>
          <span> +</span>
        </div>
      </div>

      <button>Confirmar</button>
    </Container>
  )
}
