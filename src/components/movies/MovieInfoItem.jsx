import styled from "styled-components";
export function MovieInfoItem({ name, value }) {
  return (
    <PeliculaInfoItem>
      <p>{name}:</p>
      <p className="contenido"> {value}</p>
    </PeliculaInfoItem>
  );
}

const PeliculaInfoItem = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  text-align: left;
  .feature {
    width: 200px;
  }
  .contain {
    width: 600px;
    margin-left: 0.5em;
  }
  p {
    margin: 0 1em;
    @media (max-width: 450px) {
      font-size: 10px;
      margin: 0;
    }

    @media ${({ theme }) => theme.device.laptop} {
      aside {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
      }
    }
  }
  @media (max-width: 450px) {
    p.contenido {
      font-size: 0.5em !important;
      margin-left: 15px;
    }
  }
`;

/*
color: ${({ theme }) => theme.colors.white};

 width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ theme }) => theme.colors.bg2};

   box-shadow: inset 0 0 70px
      ${({ theme }) => addOpacityToColor(theme.colors.black, 0.3)},
    0 0 20px ${({ theme }) => addOpacityToColor(theme.colors.black, 0.5)};
  
*/

export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
