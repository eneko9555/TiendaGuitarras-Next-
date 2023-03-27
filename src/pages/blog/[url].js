import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "../../../utils/helpers"

export default function Blog({ post }) {
    const { titulo, imagen, contenido, publishedAt } = post[0].attributes
    return (
        <Layout
            title={`Blog - ${titulo}`}
        >
            <article className={`${styles.post} ${styles["mt-3"]}`}>
                <Image className={styles.img} src={imagen.data.attributes.url} alt={`Imagen Blog ${titulo}`} width={1000} height={300} />

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                    
                </div>
            </article>
        </Layout>
    )
}


export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const { data } = await respuesta.json()
    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data: post } = await respuesta.json()
    return {
        props: {
            post
        }
    }
}
