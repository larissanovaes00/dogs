import React from "react";
import { PHOTO_DELETE } from "../../../Api";
import useFetch from "../../../Hooks/useFetch";
import style from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que quer deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={style.delete} disabled></button>
      ) : (
        <button className={style.delete} onClick={handleClick}>Deletar</button>
      )}
    </>
  );
};

export default PhotoDelete;
