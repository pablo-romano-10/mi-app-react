function Tarjeta({ titulo, descripcion, precio }) {

return (

<article className="card">

<h3>{titulo}</h3>

<p>{descripcion}</p>

<span className="precio">${precio}</span>

</article>

);

}

export default Tarjeta;

function App() {
return (
<div className="app">
<Tarjeta titulo="Producto 1" descripcion="Descripción del producto 1" precio="19.99" />
<Tarjeta titulo="Producto 2" descripcion="Descripción del producto 2" precio="29.99" />
</div>
);
}