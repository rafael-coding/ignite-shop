import { styled } from "..";

export const ProductContainer = styled('main', {
    '@bp1':{
        maxWidth: 576,
    },

    '@bp2': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'stretch',
        gap: '4rem',
    
        maxWidth: 1180,
        margin: '0 auto',
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 'calc(656px - 0.5rem)',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
        width: '100%',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
        marginTop: '1rem',

        '@bp2': {
            marginTop: 0,
        }
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },

    button: {

        margin: '2.5rem 0',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        },

        '@bp2': {
            margin: 'auto 0 0 0',
        }
    }
})