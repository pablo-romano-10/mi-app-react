import { useState, useEffect } from "react";
function FechtUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                const data = await response.json();
                setUsuarios(data);
                setCargando(false);
            } catch (err) {
                setError(err.message);
                setCargando(false);
            }
        };
        fetchUsuarios();
    }, []);
    function App() {
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <FetchUsuarios />
    </div>
  )
}       
}
export default FechtUsuarios;