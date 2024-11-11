import styles from "./List.module.css";

export default function List({ lista }) {
  return (
    <>
      <ul>
    <div className={styles.home}>
        <h1 className={styles.listproductstitle}>Lista de Produtos</h1>
    {lista.map((produto) => (
            <li key={produto.id}>
              <div className={styles.cardcontainer}>

                <div className={styles.card}>

                  <div className={styles.imagething}>

                    <img src={produto.image} alt={produto.title} width={100} />
                  
                  </div>

                  <div className={styles.title}>
                    <h2>{produto.title}</h2>
                  </div>

                  <p>{produto.description}</p>

                  <p>Preço: R${produto.price}</p>

                </div>
              </div>
            </li>
    ))}
        </div>
      </ul>
    </>
  );
}
