import ItemCompra from './components/ItemCompra'
import './App.css'

const compras = [
  { id: 1, produto: 'Arroz', quantidade: 2 },
  { id: 2, produto: 'Leite', quantidade: 3 },
  { id: 3, produto: 'Pão', quantidade: 6 },
]

export default function App() {
  return (
    <div>
      <h1>Lista de Compras</h1>

      <ul>
        {compras.map((compra) => (
          <ItemCompra
            key={compra.id}
            produto={compra.produto}
            quantidade={compra.quantidade}
          />
        ))}
      </ul>
    </div>
  )
}