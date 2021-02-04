import React from "react";
import { PHOTO_GET } from "../../Api";
import { useParams } from "react-router-dom";
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import useFetch from '../../Hooks/useFetch'

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options)
  }, [request, id]);

if(error) return <Error error={error}/>
if(loading) return <Loading />
if(data) return <section className="container mainContainer">
  <PhotoContent data={data} single={true} />
</section>
 else return null;
};

export default Photo;
