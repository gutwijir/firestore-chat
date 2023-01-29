import styled from 'styled-components'

import { CredentialInput } from '../SignIn/styled'

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

  background-color: rgba(40, 39, 47, 0.7);
  padding: 2rem 2rem 0 2rem;
  border-radius: 1rem 1rem 0 0;

  display: grid;
  grid-template-rows: repeat(10, min-content);
  row-gap: 1rem;
  align-items: end;

  //for the background to work as expected
  z-index: 1000;
  position: relative;
`

export const ChatMessageForm = styled.form`
  display: grid;
  grid-template-columns: auto min-content;
  grid-column-gap: 1rem;
  background-color: transparent;
  width: 25rem;

  background-color: rgba(40, 39, 47, 0.7);
  border-radius: 0 0 1rem 1rem;
  padding: 0 1rem 1rem 1rem;

  z-index: 1000;
  position: relative;
`

export const SendButton = styled.input`
  padding: 0.5rem 0.75rem;
  background-color: rgba(94, 93, 98, 0.9);
  border: none;
  border-radius: 0.5rem;
  width: min-content;
  cursor: pointer;
`

export const SignoutButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  width: auto;
  position: relative;
  z-index: 1000;
  left: 80%;
  top: -1rem;
`

export const NewMessageInput = styled(CredentialInput)`
  background-color: rgba(94, 93, 98, 0.9);

  &:focus-within {
    background-color: rgba(94, 93, 98, 0.9);
  }
`
