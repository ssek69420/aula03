import styles from "./List.module.css";

export default function List({ lista }) {
  return (
    <>
      <ul>
    <div className={styles.home}>
        <h1>Lista de Produtos</h1>
    {lista.map((produto) => (
            <li key={produto.id}>
              <div className="card-container">
                <div className="card">
                  <div className="title">
                    <h2>{produto.title}</h2>
                  </div>
                  <p>{produto.description}</p>
                  <p>Preço: R${produto.price}</p>
                  <div className="image-thing">
                    <img src={produto.image} alt={produto.title} width={100} />
                  </div>
                </div>
              </div>
            </li>
    ))}
        </div>
      </ul>
    </>
  );
}
