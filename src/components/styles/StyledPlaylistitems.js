import styled from 'styled-components';

const StyledPlaylistItems = styled.div`
  padding:0 20px;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 5px
  }

  ::-webkit-scrollbar-track {
    backgroud: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  ::-webkit-scrollbat-thumb:hover {
    background: #555
  }
`
export default StyledPlaylistItems;