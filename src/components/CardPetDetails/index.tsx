import { Container } from './styles'

import fullEnergy from '../../assets/icons/full-energy.svg'
import noEnergy from '../../assets/icons/no-energy.svg'
import maximize from '../../assets/icons/maximize.svg'
import fullEclipse from '../../assets/icons/full-eclipse.svg'
import emptyEclipse from '../../assets/icons/empty-clipse.svg'
import logoDetails from '../../assets/icons/logo-detailsPage.svg'
import whatsappIcon from '../../assets/icons/whatsapp-icon.svg'
import alerta from '../../assets/icons/alerta.svg'

export function CardPetDetails() {
  return (
    <Container>
      <img
        src="https://s3-alpha-sig.figma.com/img/bbef/f7f9/328b9f2cca850bdf6f5be689b99c9a40?Expires=1680480000&Signature=OVZ5ZESgPLH4vXTEgBKNMwIb4ZcDska26Htm-Z-7WMnQwhSxd7ttbEVEGpnbZJ7yTzzByNoAQ1qDCiFGRdfrYM2iChIr5r3MRfFWdjQd8k3LOi58UYrE7lwpC49DCUCQNGAyIXjAQ5ZhgdLdw3AOdCHUrXDhQV3L7EMigc72VEvGqjEJn5ILpqcijMuPS4-ZGK6TerTODInH0CLGH2zdepKN5oCX67~V~hOCNBoNSFcFYqpa0HSs4qVCTn3DXzhDr5lbYRx9C0DZzjgLUNze-VCzpWXpKtakz0R1VJ8m9BnK0QxlqtYZ7owtb3dLzgB8c6H4TCNHdJtvAa5lVMLL1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />

      <div>
        <div>
          <div>Carrousel</div>
        </div>

        <div>
          <h2>Alfredo</h2>
          <p>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>
        </div>

        <div>
          <div>
            <div>
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={fullEnergy} alt="" />
              <img src={noEnergy} alt="" />
            </div>
            <div>muita energia</div>
          </div>

          <div>
            <div>
              <img src={maximize} alt="" />
            </div>
            <div>Ambiente amplo</div>
          </div>

          <div>
            <div>
              <img src={fullEclipse} alt="" />
              <img src={emptyEclipse} alt="" />
              <img src={emptyEclipse} alt="" />
            </div>
            <div>Pequenino</div>
          </div>
        </div>

        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/9aee/3bf3/ebe2b9037571ee5a0ab10ffe737ff8c3?Expires=1680480000&Signature=Q3rZjCCtL3e60NSYsezZBrF1dn~~HeN50qCGj2nsLSLG98JIhXl6f5Rnd7kDVxlsVq4bUujKsQ4X5kfpdf1w2pbNhmhsRAvXmmz970zF6V4hIMJ5FZ~8H-~qpqlquW8RWuzNJ5nRwRV6P4I5pX3s-xjJqHvTj7QFcQO3K4YWSz0~Z7BLSqs1MKzTceKaCL0XgASoAwtuxASkGpo-CgWGqaHYp24FiZsCkC5ZRRbB-p1gC5mzBIKkBOScTEaeTNuqRmyK8E92A9VR5j7vLKDUofLhwkKJMB4tlTIGA2NFF3ZMJtX0OIHjrbRdJHcrSzdeWq8226heLlg0kFkDsdOrDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />

          <p>Ver rotas no Google Maps</p>
        </div>

        <div>
          <img src={logoDetails} alt="" />
          <div>
            <p>Seu Cãopanheiro</p>

            <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>

            <div>
              <img src={whatsappIcon} alt="" />
              81 1234.4567
            </div>
          </div>
        </div>

        <div>
          <p>Requisitos para adoção</p>

          <ul>
            <li>
              <img src={alerta} alt="" />
              Local grande para o animal correr e brincar.
            </li>
            <li>
              <img src={alerta} alt="" />
              Proibido apartamento
            </li>
            <li>
              <img src={alerta} alt="" />
              Ambiente frio, pois possui muito pelo.
            </li>
            <li>
              <img src={alerta} alt="" />
              Cão com intolerância a lactose.
            </li>
          </ul>
        </div>

        <button>
          <img src={whatsappIcon} alt="" />
          Entrar em contato
        </button>
      </div>
    </Container>
  )
}
