import * as React from 'react';

const body: React.CSSProperties = {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F9F9F9'
}

const app: React.CSSProperties = {
    marginTop: -1,
    backgroundColor: '#FFFFFF',
    maxWidth: 650,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'solid 1px #E2E2E2',
    padding: '0 70px'
}

const logo: React.CSSProperties = {
    height: 20,
    width: 250,
    textAlign: 'right',
    fontFamily: 'DM Serif Display, serif',
    fontWeight: 500,
    marginTop: 50,
    marginBottom: 0,
    fontSize: 48,
    display: 'inline-block',
    lineHeight: '50px',
    paddingRight: 25
}

const pagination: React.CSSProperties = {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
}

const header: React.CSSProperties = {
    textAlign: 'right',
    position: 'relative'
}

const link: React.CSSProperties = {
    color: '#393939',
    display: 'block',
    fontFamily: 'DM Serif Text, serif',
    textDecoration: 'none',
    fontSize: 17,
    padding: '8px 0',
    fontWeight: 200,
    position: 'relative'
}

const border: React.CSSProperties = {
    width: 4,
    height: 240,
    display: 'block',
    backgroundColor: '#D8D8D8',
    position: 'absolute',
    right: 0,
    top: 0,
}

const date: React.CSSProperties = {
    color: '#E44A4A',
    padding: '0 0 2px 0',
    display: 'block',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 12
}

export { app, logo, body, pagination, header, link, border, date };
