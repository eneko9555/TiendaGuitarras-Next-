import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return (
        <>
            <Layout
                title="Nosotros"
                description={"Blog de música, venta de guitarras"}
            >
                <main className="contenedor">
                    <h2 className="heading">Nosotros</h2>
                    <div className={styles.contenido}>
                        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"></Image>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officiis consequuntur sequi praesentium, libero odio iste recusandae ut adipisci ab ad impedit, cumque facere optio deleniti rem labore. In, quod!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officiis consequuntur sequi praesentium, libero odio iste recusandae ut adipisci ab ad impedit, cumque facere optio deleniti rem labore. In, quod!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officiis consequuntur sequi praesentium, libero odio iste recusandae ut adipisci ab ad impedit, cumque facere optio deleniti rem labore. In, quod!</p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>

    )
}
