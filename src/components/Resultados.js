export default function Resultados() {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  params.get("keyword");

  return (
    <>
      <h2>Sección resultados</h2>
      <p>Buscaste: {params}</p>
    </>
  );
}
