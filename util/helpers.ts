export const handleFileInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!e.target.files) return;
  const file: Blob | null = e.target.files[0];
  createFileUrl(file, setState);
  e.target.value = "";
};

export const createFileUrl = (
  file: Blob,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setState(reader.result as string);
  };
};
