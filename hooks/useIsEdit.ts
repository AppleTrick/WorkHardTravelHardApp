import { useState } from 'react';

export const useIsEdit = (text: string) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState(text);

  return { isEdit, setIsEdit, editText, setEditText };
};
