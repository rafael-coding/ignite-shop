import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SucessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Success({ customerName, product }: SucessProps){
    return (
        <>
            <Head>
                <title>Order Paid | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Order Paid!</h1>

                <ImageContainer>
                    <Image src={product.imageUrl} alt="" height={120} width={110}></Image>
                </ImageContainer>
                <p>
                    Congrats <strong>{customerName}</strong> your item <strong>{product.name}</strong> is processing for shipment
                </p>

                <Link href="/">
                    Home
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details!.name
    const product = session.line_items!.data[0].price!.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}