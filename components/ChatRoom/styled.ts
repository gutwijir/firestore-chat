import styled from 'styled-components'

export const ChatWrapper = styled.div`
  width: 25rem;
  height: 30rem;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  background-color: rgba(255, 255, 255, 0.13);
  padding: 2rem 2rem 0.5rem 2rem;
  border-radius: 1rem 1rem 0 0;
  //box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);

  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;
`

export const ChatMessageForm = styled.form`
  display: grid;
  grid-template-columns: auto min-content;
  grid-column-gap: 1rem;
  background-color: transparent;
  width: 25rem;

  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 0 0 1rem 1rem;
  padding: 1rem;
`

export const SendButton = styled.input`
  padding: 0.5rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 0.5rem;
  width: min-content;
`
