/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export const guestListName = css`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  padding: auto;

  .firstNameList {
    font-size: 16px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .lastNameList {
    font-size: 16px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .attendingCheckBoxList {
    border-radius: 8px;
  }
`;

export const firstLastNameForm = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 32px;

  span {
    font-size: 24px;
    margin-left: 32px;
  }

  .firstNameInput {
    font-size: 16px;
    border-radius: 4px;
    margin: 8px;
    padding: 4px;
  }

  .lastNameInput {
    font-size: 16px;
    border-radius: 4px;
    margin: 8px;
    padding: 4px;
  }

  .addGuestButton {
    font-size: 16px;
    border-radius: 12px;
    margin: 8px;
    padding: 8px;
    background-color: black;
  }

  .addGuestButton:hover {
    cursor: pointer;
  }
`;
